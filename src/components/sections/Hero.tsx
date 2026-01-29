import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-indigo-50/20 via-background to-background">
            <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <div className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 border border-indigo-100">
                        Available for Internship
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-slate-700 via-indigo-600 to-slate-600 bg-clip-text text-transparent">
                        Suphakit Ranphol
                    </h1>
                    <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl leading-relaxed">
                        Software Engineer Intern • Full-Stack Developer
                        <br />
                        <span className="text-base text-slate-500">Building modern, scalable web applications with a focus on user experience.</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex space-x-4"
                >
                    <a href="https://github.com/omega1234az" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors">
                            <Github className="h-5 w-5" />
                        </Button>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Button className="h-12 px-8 text-lg rounded-full group bg-gradient-to-r from-indigo-500 to-slate-500 hover:from-indigo-600 hover:to-slate-600 shadow-md">
                        View Projects
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
