import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const skills = {
    Frontend: ["Next.js", "React", "Nuxt", "Tailwind CSS", "Vue"],
    Backend: ["Node.js", "Express.js", "PHP"],
    "Database & ORM": ["Prisma", "MongoDB", "MySQL"],
    "Tools & DevOps": ["Git", "Docker", "Jenkins", "Stripe", "Vercel", "Postman", "Robot Framework"],
}

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-50/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-700">Technical Skills</h2>
                    <p className="mt-4 text-slate-600 md:text-lg">
                        A comprehensive list of technologies I work with.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full hover:shadow-md transition-shadow border-slate-200/60 bg-white">
                                <CardHeader>
                                    <CardTitle className="text-lg text-slate-700">{category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((item) => (
                                            <Badge key={item} variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-100">
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
