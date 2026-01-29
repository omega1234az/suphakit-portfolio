import { motion } from "framer-motion"

export function About() {
    return (
        <section id="about" className="py-24 bg-slate-50/30">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-slate-700">About Me</h2>
                        <div className="space-y-4 text-lg text-slate-600">
                            <p>
                                I'm <strong className="text-slate-700">Suphakit Ranphol (Song)</strong>, a third-year student in Software Engineering at the University of Phayao.
                            </p>
                            <p>
                                I have a strong interest in <strong className="text-slate-700">Full-Stack Web Development</strong> and I enjoy learning new technologies to build practical applications.
                                Currently, I am looking for <strong className="text-slate-700">Internship Opportunities</strong> as a Software Engineer to gain real-world experience and further develop my professional skills.
                            </p>
                            <p>
                                Based in <strong className="text-slate-700">Bangkok, Thailand</strong>.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative aspect-square md:aspect-auto md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-indigo-50 border border-slate-200/60"
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-4xl font-bold text-slate-300">Profile Image</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
