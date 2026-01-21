import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Play, Zap } from "lucide-react";
import video1 from "../../assets/videos/1.mp4";
import video2 from "../../assets/videos/2.mp4";
import video3 from "../../assets/videos/3.mp4";
import video4 from "../../assets/videos/4.mp4";
import video5 from "../../assets/videos/5.mp4";
import video6 from "../../assets/videos/6.mp4";






const VideoGallery = () => {
    const videos = [
        {
            id: 1,
            title: "Rasmni suniy intellekt orqali jonlantirish",
            studentName: "Valiyev Azamat",
            group: "210-19 guruh",
            thumbnail: video1,
            duration: "10:25"
        },
        {
            id: 2,
            title: "Rasmni suniy intellekt orqali jonlantirish",
            studentName: "Olimova Saida",
            group: "211-19 guruh",
            thumbnail: video2,
            duration: "15:40"
        },
        {
            id: 3,
            title: "Rasmni suniy intellekt orqali jonlantirish",
            studentName: "Karimov Davron",
            group: "212-20 guruh",
            thumbnail: video3,
            duration: "12:15"
        },

    ];
    const videos2 = [
        {
            id: 1,
            title: "Rasmni suniy intellekt orqali jonlantirish",
            studentName: "Valiyev Azamat",
            group: "210-19 guruh",
            thumbnail: video4,
            duration: "10:25"
        },
        {
            id: 2,
            title: "Rasmni suniy intellekt orqali jonlantirish",
            studentName: "Olimova Saida",
            group: "211-19 guruh",
            thumbnail: video5,
            duration: "15:40"
        },
        {
            id: 3,
            title: "Rasmni suniy intellekt orqali jonlantirish",
            studentName: "Karimov Davron",
            group: "212-20 guruh",
            thumbnail: video6,
            duration: "12:15"
        },

    ];


    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <Navbar />

            <div className="container mx-auto px-4 py-28">
                <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-sm font-medium">
                        <Zap className="w-4 h-4" />
                        <span>Video galeriya</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Video galeriya</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Talabalarimiz tomonidan suniy intellekt orqali tayyorlangan video materiallar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 animate-fade-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Video Thumbnail Wrapper */}
                            {/* Video Thumbnail Wrapper */}
                            <div className="relative aspect-video overflow-hidden bg-muted cursor-pointer group-hover:opacity-90 transition-opacity">
                                {typeof video.thumbnail === 'string' && video.thumbnail.endsWith('.mp4') ? (
                                    <video
                                        src={video.thumbnail}
                                        controls
                                        className="w-full h-full object-contain bg-black"
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                                <Play className="w-5 h-5 text-white fill-current ml-1" />
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-xs font-medium">
                                    {video.duration}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-3 line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
                                    {video.title}
                                </h3>

                                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-foreground">
                                            {video.studentName}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {video.group}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto px-4 ">
                <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Camtaziya dasturi orqali ishchi stolni yozish</span>
                    </h1>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos2.map((video, index) => (
                        <div
                            key={video.id}
                            className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 animate-fade-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Video Thumbnail Wrapper */}
                            {/* Video Thumbnail Wrapper */}
                            <div className="relative aspect-video overflow-hidden bg-muted cursor-pointer group-hover:opacity-90 transition-opacity">
                                {typeof video.thumbnail === 'string' && video.thumbnail.endsWith('.mp4') ? (
                                    <video
                                        src={video.thumbnail}
                                        controls
                                        className="w-full h-full object-contain bg-black"
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                                <Play className="w-5 h-5 text-white fill-current ml-1" />
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-xs font-medium">
                                    {video.duration}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-3 line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
                                    {video.title}
                                </h3>

                                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-foreground">
                                            {video.studentName}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {video.group}
                                        </span>
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

export default VideoGallery;
