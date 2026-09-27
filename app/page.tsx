import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Ticker from "@/components/Ticker";
import Timeline from "@/components/Timeline";
import Writing from "@/components/Writing";
import { education, experience } from "@/content/portfolio";

export default function Page() {
  return (
    <>
      <Reveal />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Timeline
          id="experience"
          label="EXPERIENCE"
          entries={experience.map((e) => ({
            years: e.years,
            title: e.role,
            org: e.org,
          }))}
        />
        <Timeline
          id="education"
          label="EDUCATION"
          entries={education.map((e) => ({
            years: e.years,
            title: e.degree,
            org: e.school,
          }))}
        />
        <Certifications />
        {/* <Writing /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  );
}
