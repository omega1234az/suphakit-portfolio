import { Github, Mail, Facebook, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
    return (
        <footer id="contact" className="py-24 bg-background border-t border-foreground/10 relative overflow-hidden min-h-[50vh] flex items-center justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none opacity-50" />

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">

                <div className="flex flex-col gap-6 mb-16 items-center">
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="mailto:supakit0920@gmail.com">
                            <Button variant="outline" size="lg" className="rounded-full h-12 px-6 bg-background/50 backdrop-blur-sm border-foreground/10 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300">
                                <Mail className="mr-2 h-4 w-4" />
                                supakit0920@gmail.com
                            </Button>
                        </a>
                        <a href="tel:0956798405">
                            <Button variant="outline" size="lg" className="rounded-full h-12 px-6 bg-background/50 backdrop-blur-sm border-foreground/10 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300">
                                <Phone className="mr-2 h-4 w-4" />
                                ++ 095-679-8405 ++
                            </Button>
                        </a>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <a href="https://github.com/omega1234az" target="_blank" rel="noopener noreferrer">
                            <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300">
                                <Github className="h-5 w-5" />
                            </Button>
                        </a>

                        <a href="https://www.facebook.com/Song2546" target="_blank" rel="noopener noreferrer">
                            <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300">
                                <Facebook className="h-5 w-5" />
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="w-full h-px bg-foreground/10 mb-8 max-w-4xl" />

                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl text-sm text-muted-foreground">
                    <p className="mx-auto">© {new Date().getFullYear()} Suphakit Ranphol.</p>
                </div>
            </div>
        </footer>
    )
}
