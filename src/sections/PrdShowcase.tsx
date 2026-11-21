import { Reveal } from "../components/Reveal"
import { PrdDocumentCard } from "../components/PrdDocumentCard"
import { prdDocuments } from "../data/site"

export function PrdShowcase() {
  return (
    <section id="documentation" className="bg-white/40" aria-labelledby="documentation-heading">
      <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal id="documentation-start">
          <p className="eyebrow">Product documentation (PRDs)</p>
          <h2 id="documentation-heading" className="display mt-3 text-[clamp(2.4rem,4vw,3.5rem)] text-ink">
            How I turn ideas into product specs.
          </h2>
        </Reveal>

        <div className="doc-grid doc-grid--pair">
          {prdDocuments.map((document, index) => (
            <Reveal key={document.slug} delay={index * 80} className="h-full">
              <PrdDocumentCard document={document} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
