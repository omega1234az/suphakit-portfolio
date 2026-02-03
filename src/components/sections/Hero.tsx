import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-slow-spin mix-blend-screen" />
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-float delay-1000 mix-blend-screen" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >

                </motion.div>

                <div className="mt-8 space-y-4">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-4"
                    >
                        Hi All. I am
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl sm:text-6xl md:text-8xl font-bold font-heading tracking-tight text-foreground"
                    >
                        Suphakit <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-foreground">Ranphol</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading tracking-tight text-muted-foreground/80 mt-2"
                    >
                        Software Engineer
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-8 max-w-[600px] text-muted-foreground md:text-xl leading-relaxed font-light"
                >
                    Crafting digital experiences that <span className="text-foreground font-medium">wow</span> and <span className="text-foreground font-medium">perform</span>. Full-Stack Engineer focused on modern web technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
                >
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300 font-bold">
                        ดูผลงาน
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <a href="https://github.com/omega1234az" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="h-14 w-14 rounded-full border-foreground/20 bg-background/50 hover:bg-foreground/10 hover:border-foreground/40 transition-all p-0 flex items-center justify-center text-foreground">
                            <Github className="h-6 w-6" />
                        </Button>
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-xs text-muted-foreground uppercase tracking-widest"
                >
                    เลื่อนลง
                </motion.span>
                <motion.div
                    className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
                    initial={{ height: 0 }}
                    animate={{ height: 48 }}
                    transition={{ delay: 1.5, duration: 1 }}
                />
            </div>
        </section>
    )
}
