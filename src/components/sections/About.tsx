import { motion } from "framer-motion"

export function About() {
    return (
        <section id="about" className="py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">About Me</h2>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                I'm <strong>Suphakit Ranphol (Song)</strong>, a third-year student in Software Engineering at the University of Phayao.
                            </p>
                            <p>
                                I have a strong interest in <strong>Full-Stack Web Development</strong> and I enjoy learning new technologies to build practical applications.
                                Currently, I am looking for <strong>Internship Opportunities</strong> as a Software Engineer to gain real-world experience and further develop my professional skills.
                            </p>
                            <p>
                                Based in <strong>Bangkok, Thailand</strong>.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative aspect-square md:aspect-auto md:h-[400px] rounded-2xl overflow-hidden bg-muted"
                    >
                        {/* Placeholder for profile image - using a generic gradient or the user's avatar if I had it as a file but I will use a nice gradient div for now to be safe */}
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <span className="text-4xl font-bold text-muted-foreground/20">Profile Image</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
