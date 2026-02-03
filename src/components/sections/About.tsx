import { motion } from "framer-motion"

export function About() {
    return (
        <section id="about" className="py-32 bg-background relative z-10 min-h-screen flex items-center">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-8 text-foreground">เกี่ยวกับผม</h2>
                        <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                            <p>
                                สวัสดีครับ ผม <strong className="text-foreground font-medium">ศุภกิตติ์ ราญพล (สอง)</strong> นิสิตชั้นปีที่ 3 สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยพะเยา
                            </p>
                            <p>
                                ผมมีความสนใจอย่างมากในด้าน <strong className="text-primary font-medium">Full-Stack Web Development</strong> และสนุกกับการเรียนรู้เทคโนโลยีใหม่ๆ เพื่อสร้างแอปพลิเคชันที่ใช้งานได้จริง
                                ปัจจุบันผมกำลังมองหา <strong className="text-foreground font-medium">โอกาสฝึกงาน</strong> ในตำแหน่ง Software Engineer เพื่อเก็บเกี่ยวประสบการณ์จริงและพัฒนาทักษะวิชาชีพ
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="h-px bg-foreground/10 flex-1" />

                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative max-w-sm mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse" />
                        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-black/50 border border-white/10 backdrop-blur-sm z-10 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20" />
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="object-cover w-full h-full rounded-3xl"
                            />

                            {/* Decorative lines */}
                            <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/20 rounded-tl-xl z-20" />
                            <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/20 rounded-br-xl z-20" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
