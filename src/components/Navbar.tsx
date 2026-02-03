import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

interface NavbarProps {
    scrollContainerRef: React.RefObject<HTMLDivElement | null>
}

export function Navbar({ scrollContainerRef }: NavbarProps) {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                setIsScrolled(scrollContainerRef.current.scrollTop > 20)
            }
        }

        const container = scrollContainerRef.current
        if (container) {
            container.addEventListener("scroll", handleScroll)
            return () => container.removeEventListener("scroll", handleScroll)
        }
    }, [scrollContainerRef])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
                isScrolled ? "py-2" : "py-4"
            )}
        >
            <div className={cn(
                "mx-auto max-w-7xl rounded-2xl flex items-center justify-between px-6 transition-all duration-300 border border-transparent",
                isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-lg shadow-primary/5 h-16"
                    : "bg-transparent h-20"
            )}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-2xl font-bold font-heading tracking-tighter cursor-pointer text-foreground flex items-center gap-1"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    SR<span className="text-primary text-4xl leading-none">.</span>
                </motion.div>

                <nav className="hidden md:flex gap-8 items-center">
                    {[
                        { id: "about", label: "เกี่ยวกับ" },
                        { id: "skills", label: "ทักษะ" },
                        { id: "projects", label: "ผลงาน" },
                        { id: "contact", label: "ติดต่อ" }
                    ].map((item, i) => (
                        <motion.button
                            key={item.id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i + 0.5 }}
                            onClick={() => scrollToSection(item.id)}
                            className="text-base font-medium text-muted-foreground hover:text-primary transition-colors relative group overflow-hidden"
                        >
                            <span className="relative z-10">{item.label}</span>
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300" />
                        </motion.button>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-px h-6 bg-secondary mx-2 opacity-20" />
                        <ModeToggle />
                    </motion.div>
                </nav>

                {/* Mobile Actions */}
                <div className="md:hidden flex items-center gap-4">
                    <ModeToggle />
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground p-2">
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? "auto" : 0 }}
                className="md:hidden bg-background/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden"
            >
                <div className="flex flex-col p-6 gap-4">
                    {[
                        { id: "about", label: "เกี่ยวกับ" },
                        { id: "skills", label: "ทักษะ" },
                        { id: "projects", label: "ผลงาน" },
                        { id: "contact", label: "ติดต่อ" }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                scrollToSection(item.id)
                                setIsMobileMenuOpen(false)
                            }}
                            className="text-lg font-medium text-foreground py-2 border-b border-foreground/5 hover:text-primary text-left"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </motion.div>
        </motion.header>
    )
}
