import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Zap } from "lucide-react";
import img1 from "@/assets/images/1.jpg";
import img2 from "@/assets/images/2.jpg";
import img3 from "@/assets/images/3.jpg";



const ProjectWork = () => {
    const projects = [
        {
            id: 1,
            title: "O'yinlar",
            description: "Kahoot onlayin platformasida yaratilgan topshiriq",
            image: img1,
            category: "O'yinlar",
            color: "bg-blue-500/10 text-blue-500",
            studentName: "Abdullayev Behzod",
            group: "211-19 guruh"
        },
        {
            id: 2,
            title: "Matematik misollarni ishlash",
            description: "Matematik misollarni vizual tarzda o'rganish.",
            image: img2,
            category: "Matematika",
            color: "bg-purple-500/10 text-purple-500",
            studentName: "Karimova Ziyoda",
            group: "215-20 guruh"
        },
        {
            id: 3,
            title: "Baholash",
            description: "Kahoot dasturida baholarni nazorat qilish.",
            image: img3,
            category: "Baholash",
            color: "bg-green-500/10 text-green-500",
            studentName: "Usmonov Jamshid",
            group: "212-19 guruh"
        }
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <Navbar />

            <div className="container mx-auto px-4 py-28">
                <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-sm font-medium">
                        <Zap className="w-4 h-4" />
                        <span>Yangi loyihalar</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Loyiha ishlari</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Talabalarimiz tomonidan yaratilgan topshiriq javoblari.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative bg-card border border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 animate-fade-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${project.color} bg-white/90 dark:bg-black/90`}>
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 relative">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border/50">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                                            {project.studentName}
                                        </span>
                                        <span className="text-xs text-muted-foreground font-medium">
                                            {project.group}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectWork;
