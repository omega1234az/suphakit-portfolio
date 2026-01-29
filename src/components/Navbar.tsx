import * as React from "react"
import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b" : "bg-transparent"
            )}
        >
            <div className="container px-4 md:px-6 h-16 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    SR.
                </div>
                <nav className="hidden md:flex gap-6 items-center">
                    <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">
                        About
                    </button>
                    <button onClick={() => scrollToSection("skills")} className="text-sm font-medium hover:text-primary transition-colors">
                        Skills
                    </button>
                    <button onClick={() => scrollToSection("projects")} className="text-sm font-medium hover:text-primary transition-colors">
                        Projects
                    </button>
                    {/* <Button variant="default" size="sm" onClick={() => scrollToSection("contact")}>
            Contact
          </Button> */}
                </nav>
            </div>
        </header>
    )
}
