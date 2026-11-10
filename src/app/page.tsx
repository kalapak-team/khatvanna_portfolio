import { SmoothScroll } from "@/components/kv/smooth-scroll";
import { Preloader } from "@/components/kv/preloader";
import { Cursor } from "@/components/kv/cursor";
import { ScrollProgress } from "@/components/kv/scroll-progress";
import { Nav } from "@/components/kv/nav";
import { Hero } from "@/components/kv/hero";
import { Intro, About } from "@/components/kv/about";
import { Experience } from "@/components/kv/experience";
import { Projects } from "@/components/kv/projects";
import { Marquee, Skills, Toolbox } from "@/components/kv/skills";
import { Terminal } from "@/components/kv/terminal";
import { Education, Leadership } from "@/components/kv/story";
import { Contact, Footer } from "@/components/kv/contact";

export default function HomePage() {
  return (
    <SmoothScroll>
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Marquee />
        <Terminal />
        <Toolbox />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
