import Contact from "@/components/Contact"
import LandingComponent from "@/components/LandingComponent"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <div className="main-container">
      <section className="landing-page">
      <LandingComponent />
      </section>
      <section className="skills-page">
      <Skills />
      </section>
      <section className="projects-page">
        <Projects />
      </section>
      <section className="last-component">
        <Contact />
      </section>
    </div>
  )
}
