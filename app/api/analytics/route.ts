import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "edge";

const AnalyticsEventSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("resume_download"),
    source: z.enum(["hero", "resume-section", "other"]).default("other"),
    timestamp: z.number().optional(),
    userAgent: z.string().optional(),
  }),
  z.object({
    type: z.literal("visit"),
    path: z.string().optional(),
    ref: z.string().optional(),
    timestamp: z.number().optional(),
    userAgent: z.string().optional(),
  }),
  // Extend with more events here as needed
]);

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const event = AnalyticsEventSchema.parse(json);

    const now = Date.now();
    console.log("analytics:event", { ...event, receivedAt: now });

    // Forward to Google Analytics 4 via Measurement Protocol if configured
    const measurementId = process.env.GA4_MEASUREMENT_ID;
    const apiSecret = process.env.GA4_API_SECRET;
    if (measurementId && apiSecret) {
      try {
        const headers = new Headers(request.headers);
        const forwardedProto = headers.get("x-forwarded-proto") || "https";
        const host = headers.get("host") || "";
        const ip = headers.get("x-forwarded-for") || undefined;
        const userAgent = headers.get("user-agent") || undefined;

        const tsMs = (event as { timestamp?: number }).timestamp ?? now;
        const timestampMicros = String(tsMs * 1000);

        const pageLocationBase = host ? `${forwardedProto}://${host}` : "";
        const toGaEvent = () => {
          if (event.type === "visit") {
            return {
              name: "page_view",
              params: {
                page_location: `${pageLocationBase}${event.path ?? "/"}`,
                page_referrer: event.ref ?? undefined,
              },
            };
          }
          if (event.type === "resume_download") {
            return {
              name: "resume_download",
              params: {
                source: event.source,
                page_location: `${pageLocationBase}`,
              },
            };
          }
          return { name: "custom_event", params: {} };
        };

        const clientId = (globalThis.crypto?.randomUUID?.() ?? `${now}.${Math.random()}`) as string;

        const body = {
          client_id: clientId,
          timestamp_micros: timestampMicros,
          non_personalized_ads: true,
          events: [toGaEvent()],
        } as const;

        const endpoint = `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(
          measurementId,
        )}&api_secret=${encodeURIComponent(apiSecret)}`;

        const gaHeaders = new Headers({ "Content-Type": "application/json" });
        if (userAgent) gaHeaders.set("User-Agent", userAgent);
        if (ip) gaHeaders.set("X-Forwarded-For", ip);

        await fetch(endpoint, {
          method: "POST",
          headers: gaHeaders,
          body: JSON.stringify(body),
        });
      } catch (gaError) {
        console.warn("analytics:ga4_forward_failed", gaError);
      }
    }

    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "Invalid analytics payload" }, { status: 400 });
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const debug = url.searchParams.get("debug");

  const measurementId = process.env.GA4_MEASUREMENT_ID;
  const apiSecret = process.env.GA4_API_SECRET;

  const result: Record<string, unknown> = {
    hasMeasurementId: Boolean(measurementId),
    hasApiSecret: Boolean(apiSecret),
    runtime,
  };

  if (debug === "1" && measurementId && apiSecret) {
    try {
      const headers = new Headers(request.headers);
      const forwardedProto = headers.get("x-forwarded-proto") || "https";
      const host = headers.get("host") || "";
      const pageLocationBase = host ? `${forwardedProto}://${host}` : "";

      const body = {
        client_id: `diagnostic.${Date.now()}`,
        non_personalized_ads: true,
        events: [
          {
            name: "page_view",
            params: {
              page_location: `${pageLocationBase}/analytics-debug`,
            },
          },
        ],
      } as const;

      const endpoint = `https://www.google-analytics.com/debug/mp/collect?measurement_id=${encodeURIComponent(
        measurementId,
      )}&api_secret=${encodeURIComponent(apiSecret)}`;

      const resp = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      let json: unknown = null;
      try {
        json = await resp.json();
      } catch {
        // ignore JSON parse errors
      }

      result.gaDebug = {
        ok: resp.ok,
        status: resp.status,
        validation: json,
      };
    } catch (_error) {
      result.gaDebug = { ok: false, error: "ga_debug_request_failed" };
    }
  }

  return NextResponse.json(result);
}
