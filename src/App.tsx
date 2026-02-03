import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Education } from "@/components/sections/Education"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

import { useRef } from "react"

function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="h-screen w-full bg-background text-foreground font-sans antialiased selection:bg-primary/20 relative snap-y snap-mandatory overflow-y-auto scroll-smooth no-scrollbar"
    >
      {/* Noise Texture */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22 opacity=%221%22/%3E%3C/svg%3E")' }}></div>

      <Navbar scrollContainerRef={containerRef} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  )
}

export default App
