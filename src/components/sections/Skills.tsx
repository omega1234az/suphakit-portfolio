import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const skills = {
    "การพัฒนาส่วนหน้า (Frontend)": [
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Nuxt", icon: "https://cdn.simpleicons.org/nuxtdotjs/00DC82" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Vue", icon: "https://cdn.simpleicons.org/vue/4FC08D" }
    ],
    "การพัฒนาส่วนหลัง (Backend)": [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Express.js", icon: "https://cdn.simpleicons.org/express/white" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" }
    ],
    "ฐานข้อมูล (Database & ORM)": [
        { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/white" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" }
    ],
    "เครื่องมือ (Tools & DevOps)": [
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
        { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
        { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
        { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
        { name: "Robot", icon: "https://cdn.simpleicons.org/robotframework/white" } // Shortened for cleaner UI, official icon is robotframework
    ],
}

export function Skills() {
    return (
        <section id="skills" className="py-32 bg-gradient-to-b from-background via-muted/20 to-background border-y border-foreground/5 relative min-h-screen flex items-center">
            <div className="container px-4 md:px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-foreground mb-6">คลังแสงเทคโนโลยี</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full bg-background/5 border-foreground/10 hover:border-primary/50 transition-colors duration-500 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-foreground/90">{category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((item) => (
                                            <Badge
                                                key={item.name}
                                                variant="secondary"
                                                className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-primary/20 flex items-center gap-2 pl-2 pr-3 py-1.5"
                                            >
                                                <img src={item.icon} alt={item.name} className="w-4 h-4 object-contain" />
                                                {item.name}
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
