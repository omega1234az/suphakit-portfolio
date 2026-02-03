import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export function Education() {
    return (
        <section id="education" className="py-24 bg-background relative flex items-center">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-foreground mb-4">ประวัติการศึกษา</h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative pl-8 border-l-2 border-primary/20 space-y-12"
                    >
                        {/* Timeline Item 1 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-6 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                            <div className="space-y-2">
                                <div className="flex items-center gap-4 text-primary font-bold text-xl">
                                    <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center overflow-hidden shrink-0 border border-primary/20">
                                        <img
                                            src="/Logo_of_University_of_Phayao.png"
                                            alt="UP Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3>มหาวิทยาลัยพะเยา (University of Phayao)</h3>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground text-sm pl-[4.5rem] -mt-2">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-4 w-4" />
                                        <span>2021 - Present (กำลังศึกษาชั้นปีที่ 3)</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4" />
                                        <span>Phayao, Thailand</span>
                                    </div>
                                </div>
                                <div className="pl-[4.5rem]">
                                    <p className="text-foreground/80 mt-2 font-medium">
                                        สาขาวิศวกรรมซอฟต์แวร์ (Software Engineering) | GPAX: 3.35
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-6 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground" />
                            <div className="space-y-2">
                                <div className="flex items-center gap-4 text-foreground/80 font-bold text-xl">
                                    <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center overflow-hidden shrink-0 border border-foreground/10">
                                        <img
                                            src="/Kamphaengphet Technical College.png"
                                            alt="KPTC Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3>วิทยาลัยเทคนิคกำแพงเพชร (Kamphaeng Phet Technical College)</h3>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground text-sm pl-[4.5rem] -mt-2">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-4 w-4" />
                                        <span>2018 - 2021 (ปวช.)</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4" />
                                        <span>Kamphaeng Phet, Thailand</span>
                                    </div>
                                </div>
                                <div className="pl-[4.5rem]">
                                    <p className="text-foreground/80 mt-2 font-medium">
                                        สาขาวิชาเทคโนโลยีสารสนเทศ (Information Technology) | GPA: 3.71
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
