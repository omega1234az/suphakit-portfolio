import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16">
            <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <div className="inline-block rounded-lg bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
                        Available for Internship
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Suphakit Ranphol
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Software Engineer Intern • Full-Stack Developer
                        <br />
                        Building modern, scalable web applications with a focus on user experience.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex space-x-4"
                >
                    <a href="https://github.com/omega1234az" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                            <Github className="h-5 w-5" />
                        </Button>
                    </a>
                    <Button variant="outline" size="icon">
                        <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <Mail className="h-5 w-5" />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Button className="h-12 px-8 text-lg rounded-full group">
                        View Projects
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
