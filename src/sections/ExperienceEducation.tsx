import { Reveal } from "../components/Reveal"
import { EducationSection } from "../components/journey/EducationSection"
import { ExperienceSection } from "../components/journey/ExperienceSection"

export function ExperienceEducationSection() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-20 sm:px-8 md:py-28">
        <Reveal id="experience-start">
          <p className="eyebrow">The journey so far</p>
          <h2 className="display mt-3 text-[clamp(2.3rem,4vw,3.5rem)] text-ink">
            The path to Product Management.
          </h2>
        </Reveal>

        <Reveal className="journey">
          <ExperienceSection />
          <EducationSection />
        </Reveal>
      </div>
    </section>
  )
}
