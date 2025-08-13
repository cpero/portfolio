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

    // Basic processing placeholder; replace with durable storage/logging as needed
    const now = Date.now();
    console.log("analytics:event", { ...event, receivedAt: now });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid analytics payload" },
      { status: 400 }
    );
  }
}


