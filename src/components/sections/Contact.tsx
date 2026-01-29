import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
    return (
        <footer className="py-12 border-t bg-background">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Suphakit Ranphol. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-4">
                    <a href="https://github.com/omega1234az" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="hover:text-primary">
                            <Github className="h-5 w-5" />
                        </Button>
                    </a>
                    {/* Add other links if available in future */}
                </div>
            </div>
        </footer>
    )
}
