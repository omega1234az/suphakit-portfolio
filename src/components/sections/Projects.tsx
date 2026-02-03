import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
    {
        title: "taily-community",
        description: "เว็บไซต์ช่วยตามหาสัตว์เลี้ยง",
        tags: ["TypeScript", "NextJS", "TailwindCSS"],
        link: "https://github.com/omega1234az/taiy-community",
    },
    {
        title: "ITShop",
        description: "เว็บไซต์ขายสินค้า IT",
        tags: ["TypeScript", "NextJS", "Stripe"],
        link: "https://github.com/omega1234az/ITShop",
    },
    {
        title: "UPTalk-Frontend",
        description: "เว็บบอร์ดสำหรับนักศึกษา มหาวิทยาลัยพะเยา",
        tags: ["NuxtJS", "TailwindCSS"],
        link: "https://github.com/omega1234az/UPTalk-Frontend",
    },
    {
        title: "UPTalk-Backend",
        description: "เว็บบอร์ดสำหรับนักศึกษา มหาวิทยาลัยพะเยา",
        tags: ["ExpressJS", "Backend", "API"],
        link: "https://github.com/omega1234az/UPTalk-Backend",
    },
]

const tagIcons: Record<string, string> = {
    TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
    NextJS: "https://cdn.simpleicons.org/nextdotjs/white",
    Stripe: "https://cdn.simpleicons.org/stripe/635BFF",
    TailwindCSS: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    NuxtJS: "/nuxt-js-icon.svg",
    Frontend: "https://cdn.simpleicons.org/w3c/white", // Generic
    ExpressJS: "https://cdn.simpleicons.org/express/white",
    Backend: "https://cdn.simpleicons.org/nodedotjs/339933", // Generic backend often Node
    API: "https://cdn.simpleicons.org/postman/FF6C37",
}

export function Projects() {
    return (
        <section id="projects" className="py-32 bg-background relative overflow-hidden min-h-screen flex items-center">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-foreground">
                        ผลงาน
                    </h2>

                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="group relative h-full">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
                                <Card className="relative h-full flex flex-col bg-card/50 border-foreground/10 backdrop-blur-xl hover:bg-card/80 transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1 space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="outline" className="bg-foreground/5 border-foreground/10 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors flex items-center gap-1.5 pl-2 pr-3 py-1">
                                                    {tagIcons[tag] && (
                                                        <img src={tagIcons[tag]} alt={tag} className="w-3.5 h-3.5 object-contain opacity-70 group-hover:opacity-100" />
                                                    )}
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button className="w-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-foreground/10 backdrop-blur-sm transition-all" variant="outline">
                                                <Github className="mr-2 h-4 w-4" />
                                                ดูโค้ด
                                            </Button>
                                        </a>
                                    </CardFooter>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
