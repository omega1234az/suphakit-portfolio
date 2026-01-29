import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
    {
        title: "taiy-community",
        description: "A community platform built with modern web technologies.",
        tags: ["TypeScript", "Community", "Web"],
        link: "https://github.com/omega1234az/taiy-community",
    },
    {
        title: "ITShop",
        description: "E-commerce solution for IT products.",
        tags: ["TypeScript", "E-commerce"],
        link: "https://github.com/omega1234az/ITShop",
    },
    {
        title: "UPTalk-Frontend",
        description: "Frontend for UPTalk application, built with Vue.",
        tags: ["Vue", "Frontend"],
        link: "https://github.com/omega1234az/UPTalk-Frontend",
    },
    {
        title: "UPTalk-Backend",
        description: "Backend services for UPTalk application.",
        tags: ["JavaScript", "Backend", "API"],
        link: "https://github.com/omega1234az/UPTalk-Backend",
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-700">Featured Projects</h2>
                    <p className="mt-4 text-slate-600 md:text-lg">
                        Check out some of my recent work from GitHub.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full flex flex-col hover:border-indigo-200 hover:shadow-md transition-all duration-300 border-slate-200/60 bg-white">
                                <CardHeader>
                                    <CardTitle className="text-slate-700">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-slate-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="outline" className="border-slate-200 text-slate-600">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-2">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white" variant="default">
                                            <Github className="mr-2 h-4 w-4" />
                                            View Code
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
