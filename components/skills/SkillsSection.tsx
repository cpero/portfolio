import dynamic from "next/dynamic";

const SkillsMatrix = dynamic(() => import("@/components/skills/SkillsMatrix"), {
  loading: () => (
    <section id="skills" className="w-full">
      <div className="mx-auto max-w-6xl p-8" aria-busy="true" aria-live="polite">
        Loading skills…
      </div>
    </section>
  ),
});

export default function SkillsSection() {
  return <SkillsMatrix />;
}
