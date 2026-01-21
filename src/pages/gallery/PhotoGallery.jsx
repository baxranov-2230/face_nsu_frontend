import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Zap, Image as ImageIcon } from "lucide-react";
import img1 from "@/assets/images/photos/1.jpg";
import img2 from "@/assets/images/photos/2.jpg";
import img3 from "@/assets/images/photos/3.jpg";
import img4 from "@/assets/images/photos/4.jpg";
import img5 from "@/assets/images/photos/5.jpg";
import img6 from "@/assets/images/photos/6.jpg";

const PhotoGallery = () => {
    const photos = [
        {
            id: 1,
            title: "Rasmlarni qayta ishlash",
            studentName: "Rahimov Botir",
            group: "210-21 guruh",
            image: img1,
        },
        {
            id: 2,
            title: "3X4 rasmlarni shakllantirish",
            studentName: "Azizova Nigora",
            group: "211-21 guruh",
            image: img2,
        },
        {
            id: 3,
            title: "3X4 rasmlarni shakllantirish",
            studentName: "Qodirov Sarvar",
            group: "212-21 guruh",
            image: img3,
        },
        {
            id: 4,
            title: "Rasmlarni qayta ishlash",
            studentName: "Saidov Alisher",
            group: "213-21 guruh",
            image: img4,
        },
        {
            id: 5,
            title: "Rasmlarni qayta ishlash",
            studentName: "Tursunova Malika",
            group: "214-21 guruh",
            image: img5,
        },
        {
            id: 6,
            title: "Rasmlarni qayta ishlash",
            studentName: "Ismoilov Jasur",
            group: "215-21 guruh",
            image: img6,
        }
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <Navbar />

            <div className="container mx-auto px-4 py-28">
                <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-sm font-medium">
                        <ImageIcon className="w-4 h-4" />
                        <span>Foto hisobotlar</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Foto galeriya</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Talabalarimizning amaliy mashg'ulotlari va loyiha ishlaridan lavhalar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((photo, index) => (
                        <div
                            key={photo.id}
                            className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 animate-fade-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image Wrapper */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer">
                                <img
                                    src={photo.image}
                                    alt={photo.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-3 line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
                                    {photo.title}
                                </h3>

                                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-foreground">
                                            {photo.studentName}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {photo.group}
                                        </span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Zap className="w-4 h-4 text-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PhotoGallery;
