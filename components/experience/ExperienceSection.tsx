import dynamic from "next/dynamic";

const ExperienceTimeline = dynamic(() => import("@/components/experience/ExperienceTimeline"), {
  loading: () => (
    <section id="experience" className="w-full">
      <div className="mx-auto max-w-6xl p-8" aria-busy="true" aria-live="polite">
        Loading experience…
      </div>
    </section>
  ),
});

export default function ExperienceSection() {
  return <ExperienceTimeline />;
}
