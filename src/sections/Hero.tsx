import { ArrowRight, ArrowUpRight, Compass, Heart, Target } from "lucide-react"
import { useCallback } from "react"
import heroImage from "../assets/hero-sunset.jpg"
import { useContactMenu } from "../components/contact/ContactMenuProvider"
import { OpenToWorkPill } from "../components/OpenToWorkPill"
import { RotatingHeroText } from "../components/RotatingHeroText"
import { SectionLink } from "../components/SectionLink"
import { hero } from "../data/site"

const icons = {
  compass: Compass,
  heart: Heart,
  target: Target,
}

const washes = ["bg-peach", "bg-sage", "bg-lavender"]

export function Hero() {
  const { open, anchor, panelId, toggle, setAnchorNode } = useContactMenu()
  const expanded = open && anchor === "hero"
  const registerHero = useCallback(
    (node: HTMLButtonElement | null) => setAnchorNode("hero", node),
    [setAnchorNode],
  )

  return (
    <section id="home" className="hero-wash relative isolate overflow-hidden">
      <div className="hero-art">
        <img
          src={heroImage}
          width={1280}
          height={720}
          alt="Illustration of a woman with headphones working on a laptop beneath a tree at sunset, a cat asleep beside her, and a note that reads Good Products, Brighter Days."
        />
      </div>

      <div className="hero-copy relative z-10 mx-auto flex max-w-[1180px] flex-col justify-center px-5 pt-28 sm:px-8">
        <div className="hero-copy-column">
          <div className="hero-kicker load-in">
            <p className="eyebrow">{hero.eyebrow}</p>
            <OpenToWorkPill />
          </div>
          <h1 className="display hero-headline load-in mt-4 text-ink [animation-delay:80ms]">
            <span className="hero-headline-static">Building what's next,</span>
            <span className="hero-headline-accent">
              <RotatingHeroText />
            </span>
          </h1>
          <p className="hero-intro load-in mt-6 text-muted [animation-delay:180ms]">
            {hero.intro}
          </p>
          <div className="load-in mt-8 flex flex-wrap gap-3 [animation-delay:280ms]">
            <SectionLink id="work" className="btn btn-primary">
              Explore My Work <ArrowRight size={16} aria-hidden="true" />
            </SectionLink>
            <button
              ref={registerHero}
              type="button"
              className="btn btn-secondary cursor-pointer"
              aria-haspopup="dialog"
              aria-expanded={expanded}
              aria-controls={expanded ? panelId : undefined}
              onClick={() => toggle("hero")}
            >
              Let's Connect <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul className="hero-highlights load-in mt-10 [animation-delay:380ms]">
          {hero.capabilities.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <li key={item.title} className="flex items-center gap-3 text-sm text-ink">
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${washes[index]} text-ink`}
                >
                  <Icon size={16} aria-hidden="true" />
                </span>
                <span className="max-w-[10.5rem] leading-snug">{item.title}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
