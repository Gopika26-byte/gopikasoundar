import { ArrowUpRight } from "lucide-react"
import { MediumArticleCover } from "../components/MediumArticleCover"
import { Reveal } from "../components/Reveal"
import { mediumArticles, mediumProfileUrl, profile } from "../data/site"

export function MediumArticles() {
  const total = mediumArticles.length

  return (
    <section id="writing" aria-labelledby="writing-heading">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow">Thoughts & writing</p>
          <h2 id="writing-heading" className="display mt-3 text-[clamp(2.4rem,4vw,3.5rem)] text-ink">
            Ideas worth writing about.
          </h2>
        </Reveal>

        <div className="writing-grid writing-grid--pair">
          {mediumArticles.map((article, index) => (
            <Reveal key={article.id} delay={index * 90} className="h-full">
              <MediumArticleCover
                number={index + 1}
                total={total}
                category={article.category}
                title={article.title}
                description={article.description}
                author={profile.name}
                href={article.url}
                tone={article.tone}
              />
            </Reveal>
          ))}
        </div>

        {mediumProfileUrl ? (
          <p className="mt-10 text-sm text-muted">
            Enjoyed these ideas? There's more where they came from.{" "}
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-sunset underline-offset-4"
            >
              Explore all my writing on Medium
              <ArrowUpRight size={14} aria-hidden="true" className="ml-1 inline" />
            </a>
          </p>
        ) : null}
      </div>
    </section>
  )
}
