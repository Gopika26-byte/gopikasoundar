import { useEffect } from "react"
import { About } from "../sections/About"
import { ExperienceEducationSection } from "../sections/ExperienceEducation"
import { FarewellSection } from "../sections/FarewellSection"
import { Hero } from "../sections/Hero"
import { MediumArticles } from "../sections/MediumArticles"
import { PrdShowcase } from "../sections/PrdShowcase"
import { ProductTeardowns } from "../sections/ProductTeardowns"
import { ToolsMarquee } from "../sections/ToolsMarquee"
import { Work } from "../sections/Work"

export function Home() {
  useEffect(() => {
    document.title = "Gopika — Product Manager"
  }, [])

  return (
    <>
      <Hero />
      <ToolsMarquee />
      <About />
      <Work />
      <PrdShowcase />
      <ProductTeardowns />
      <MediumArticles />
      <ExperienceEducationSection />
      <FarewellSection />
    </>
  )
}
