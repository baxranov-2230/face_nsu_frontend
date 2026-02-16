import {
    ClipboardCheck,
    MonitorPlay,
    Briefcase,
    FileText,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
    {
        id: "nazorat",
        icon: ClipboardCheck,
        title: "Nazariy vositalari",
        // description: "Testlar, viktorinalar va nazorat ishlarini yaratish va baholash vositalari",
        color: "primary",
        benefits: [
            "Maruza",
            "Taqdimot",
        ]
    },
    {
        id: "multimodal",
        icon: MonitorPlay,
        title: "Multimodal vositalar",
        // description: "Video, audio va interaktiv kontentlarni qo'llab-quvvatlovchi zamonaviy vositalar",
        color: "secondary",
        benefits: [
            "Video darsliklar",
            "Animatsiya",
            "Audio materiallar",
            "Rasmli materiallar",
        ]
    },
    {
        id: "amaliy",
        icon: Briefcase,
        title: "Amaliy loyihalar",
        // description: "Amaliy ko'nikmalarni rivojlantirish uchun real loyihalar va vazifalar",
        color: "accent",
        benefits: [
            "Testlar yaratish",
            "Taqdimotlar yaratish",
            "Grafik yaratish",
            "Virtual labaratoriyalar",
            "Mobil ilovalar yaratish",
            "Suniy intellekt",
        ]
    },
    {
        id: "topshiriq",
        icon: FileText,
        title: "Topshiriqlar",
        // description: "Mustaqil o'rganish uchun topshiriqlar va ularni tekshirish tizimi",
        color: "primary",
        benefits: [
            "Reproduktiv",
            "Produktiv",
            "Qisman o'zlashtirish",
            "Creativ",
        ]
    },
];

const pdfFiles = import.meta.glob("@/assets/pdf/*.pdf", { eager: true, as: "url" });
const multimediaFiles = import.meta.glob("@/assets/multimedia/*.mp4", { eager: true, as: "url" });
const graphicFiles = import.meta.glob("@/assets/grafik/*", { eager: true, as: "url" });
const crosswordFiles = import.meta.glob("@/assets/krasword/*", { eager: true, as: "url" });
const mobileFiles = import.meta.glob("@/assets/mobile/*", { eager: true, as: "url" });
const presentationFiles = import.meta.glob("@/assets/taqdimot/*", { eager: true, as: "url" });
const testFiles = import.meta.glob("@/assets/test/*", { eager: true, as: "url" });

const getPdfName = (path) => {
    return path.split('/').pop().replace('.pdf', '').replace(/%20/g, ' ');
};

const sortedPdfFiles = Object.entries(pdfFiles).sort((a, b) => {
    const nameA = getPdfName(a[0]);
    const nameB = getPdfName(b[0]);
    const numA = parseInt(nameA.match(/\d+/)?.[0] || "0", 10);
    const numB = parseInt(nameB.match(/\d+/)?.[0] || "0", 10);
    return numA - numB;
});

export const FeaturesSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-muted/30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Xususiyatlar
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Barcha kerakli vositalar
                        <br />
                        <span className="text-gradient">bir joyda</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Ta'lim jarayonini samarali boshqarish uchun zarur bo'lgan barcha vositalar
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            id={feature.id}
                            className="group p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-col h-full">
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`w-7 h-7 text-${feature.color}`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    {feature.description}
                                </p>

                                {/* Benefits */}
                                <ul className="space-y-2 mb-6 flex-grow">
                                    {feature.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                {/* Link */}
                                {feature.id === "nazorat" ? (
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="ghost" className="self-start group/btn">
                                                Batafsil
                                                <ArrowRight
                                                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-2xl">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl font-bold mb-4">
                                                    Nazariy materiallar
                                                </DialogTitle>
                                            </DialogHeader>
                                            <ScrollArea className="h-[60vh] pr-4">
                                                <div className="grid gap-3">
                                                    {sortedPdfFiles.map(([path, url], i) => (
                                                        <a
                                                            key={i}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors group"
                                                        >
                                                            <div
                                                                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                                                                <FileText className="w-5 h-5 text-primary" />
                                                            </div>
                                                            <span className="font-medium flex-1">
                                                                {getPdfName(path)}
                                                            </span>
                                                            <ArrowRight
                                                                className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                        </a>
                                                    ))}
                                                </div>
                                            </ScrollArea>
                                        </DialogContent>
                                    </Dialog>
                                ) : feature.id === "multimodal" ? (
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="ghost" className="self-start group/btn">
                                                Batafsil
                                                <ArrowRight
                                                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl font-bold mb-4">
                                                    Multimodal materiallar
                                                </DialogTitle>
                                            </DialogHeader>
                                            <Tabs defaultValue="video" className="w-full">
                                                <TabsList className="grid w-full grid-cols-4">
                                                    <TabsTrigger value="video">Video darsliklar</TabsTrigger>
                                                    <TabsTrigger value="animation">Animatsiya</TabsTrigger>
                                                    <TabsTrigger value="audio">Audio materiallar</TabsTrigger>
                                                    <TabsTrigger value="image">Rasmli materiallar</TabsTrigger>
                                                </TabsList>
                                                {["video", "animation", "audio", "image"].map((type) => {
                                                    const filteredFiles = Object.entries(multimediaFiles).filter(([path]) => {
                                                        const name = path.split('/').pop().toLowerCase();
                                                        if (type === "video") return name.startsWith("video");
                                                        if (type === "animation") return name.startsWith("animation");
                                                        if (type === "audio") return name.startsWith("ovoz");
                                                        if (type === "image") return name.startsWith("rasmli");
                                                        return false;
                                                    });

                                                    return (
                                                        <TabsContent key={type} value={type} className="mt-4">
                                                            <ScrollArea className="h-[50vh] pr-4">
                                                                <div className="grid gap-3">
                                                                    {filteredFiles.length > 0 ? (
                                                                        filteredFiles.map(([path, url], i) => (
                                                                            <a
                                                                                key={i}
                                                                                href={url}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="flex items-center p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors group"
                                                                            >
                                                                                <div
                                                                                    className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors">
                                                                                    {type === "video" && <MonitorPlay className="w-5 h-5 text-secondary" />}
                                                                                    {type === "animation" && <MonitorPlay className="w-5 h-5 text-accent" />}
                                                                                    {type === "audio" && <MonitorPlay className="w-5 h-5 text-primary" />}
                                                                                    {type === "image" && <FileText className="w-5 h-5 text-muted-foreground" />}
                                                                                </div>
                                                                                <span className="font-medium flex-1">
                                                                                    {path.split('/').pop()}
                                                                                </span>
                                                                                <ArrowRight
                                                                                    className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                                            </a>
                                                                        ))
                                                                    ) : (
                                                                        <div className="text-center py-8 text-muted-foreground">
                                                                            Ushbu bo'limda materiallar mavjud emas
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </ScrollArea>
                                                        </TabsContent>
                                                    );
                                                })}
                                            </Tabs>
                                        </DialogContent>
                                    </Dialog>
                                ) : feature.id === "amaliy" ? (
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="ghost" className="self-start group/btn">
                                                Batafsil
                                                <ArrowRight
                                                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl font-bold mb-4">
                                                    Amaliy loyihalar vositalari
                                                </DialogTitle>
                                            </DialogHeader>
                                            <Tabs defaultValue="grafik" className="w-full">
                                                <TabsList className="grid w-full grid-cols-5 mb-4">
                                                    <TabsTrigger value="grafik">Grafik yaratish</TabsTrigger>
                                                    <TabsTrigger value="krossvord">Krossvord yaratish</TabsTrigger>
                                                    <TabsTrigger value="mobile">Mobil ilovalar</TabsTrigger>
                                                    <TabsTrigger value="taqdimot">Taqdimotlar</TabsTrigger>
                                                    <TabsTrigger value="test">Test yaratish</TabsTrigger>
                                                </TabsList>
                                                <TabsContent value="grafik">
                                                    <ScrollArea className="h-[60vh] pr-4">
                                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                                            {[
                                                                {
                                                                    name: "Adobe Illustrator",
                                                                    link: "https://www.adobe.com/products/illustrator.html",
                                                                    image: graphicFiles[Object.keys(graphicFiles).find(path => path.includes("Adobe Illustrator"))]
                                                                },
                                                                {
                                                                    name: "Yandex Games",
                                                                    link: "https://yandex.uz/games/app/313607",
                                                                    image: graphicFiles[Object.keys(graphicFiles).find(path => path.includes("yandex"))]
                                                                },
                                                                {
                                                                    name: "Pinterest",
                                                                    link: "https://www.pinterest.com/collage-creation-tool",
                                                                    image: graphicFiles[Object.keys(graphicFiles).find(path => path.includes("pinterest"))]
                                                                },
                                                                {
                                                                    name: "Image Editor AI",
                                                                    link: "https://imageeditor.ai/create/?lang=uz#create-form",
                                                                    image: graphicFiles[Object.keys(graphicFiles).find(path => path.includes("pintires"))]
                                                                },
                                                                {
                                                                    name: "Playhop",
                                                                    link: "https://playhop.com/uz/app/283605",
                                                                    image: graphicFiles[Object.keys(graphicFiles).find(path => path.includes("playhop"))]
                                                                },
                                                                {
                                                                    name: "Sketchbook",
                                                                    link: "https://github.com/Sketchbook-Pro-Free-for-PC",
                                                                    image: graphicFiles[Object.keys(graphicFiles).find(path => path.includes("github"))]
                                                                },
                                                            ].map((item, i) => (
                                                                <a
                                                                    key={i}
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                                                >
                                                                    <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                                                                        {item.image ? (
                                                                            <img
                                                                                src={item.image}
                                                                                alt={item.name}
                                                                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                                                            />
                                                                        ) : (
                                                                            <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                                                                                <span className="text-2xl font-bold text-muted-foreground">{item.name[0]}</span>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <h4 className="text-lg font-semibold text-center group-hover:text-primary transition-colors">
                                                                        {item.name}
                                                                    </h4>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </ScrollArea>
                                                </TabsContent>
                                                <TabsContent value="krossvord">
                                                    <ScrollArea className="h-[60vh] pr-4">
                                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                                            {[
                                                                {
                                                                    name: "Puzzle Maker",
                                                                    link: "https://puzzlemaker.discoveryeducation.com/",
                                                                    image: crosswordFiles[Object.keys(crosswordFiles).find(path => path.includes("puzzlemaker"))]
                                                                },
                                                                {
                                                                    name: "Bio Uroki",
                                                                    link: "https://biouroki.ru/workshop/crossgen.html",
                                                                    image: crosswordFiles[Object.keys(crosswordFiles).find(path => path.includes("biouroki"))]
                                                                },
                                                                {
                                                                    name: "Aspose Crossword",
                                                                    link: "https://products.aspose.ai/words/ru/crosswordmaker/#google_vignette",
                                                                    image: crosswordFiles[Object.keys(crosswordFiles).find(path => path.includes("aspose"))]
                                                                },
                                                                {
                                                                    name: "Crossword Spin",
                                                                    link: "https://crosswordspin.com/create",
                                                                    image: crosswordFiles[Object.keys(crosswordFiles).find(path => path.includes("crosswordspin"))]
                                                                },
                                                            ].map((item, i) => (
                                                                <a
                                                                    key={i}
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                                                >
                                                                    <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                                                                        {item.image ? (
                                                                            <img
                                                                                src={item.image}
                                                                                alt={item.name}
                                                                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                                                            />
                                                                        ) : (
                                                                            <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                                                                                <span className="text-2xl font-bold text-muted-foreground">{item.name[0]}</span>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <h4 className="text-lg font-semibold text-center group-hover:text-primary transition-colors">
                                                                        {item.name}
                                                                    </h4>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </ScrollArea>
                                                </TabsContent>
                                                <TabsContent value="mobile">
                                                    <ScrollArea className="h-[60vh] pr-4">
                                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                                            {[
                                                                {
                                                                    name: "DartPad",
                                                                    link: "https://dartpad.dev/",
                                                                    image: mobileFiles[Object.keys(mobileFiles).find(path => path.includes("dartpad"))]
                                                                },
                                                                {
                                                                    name: "Flutter",
                                                                    link: "https://flutter.dev/",
                                                                    image: mobileFiles[Object.keys(mobileFiles).find(path => path.includes("flutter"))]
                                                                },
                                                                {
                                                                    name: "Sketchware",
                                                                    link: "https://play.google.com/store/apps/dev?id=4781469509290200915&hl=uz",
                                                                    image: mobileFiles[Object.keys(mobileFiles).find(path => path.includes("sketchware"))]
                                                                },
                                                                {
                                                                    name: "Android Studio",
                                                                    link: "https://developer.android.com/studio?hl=ru",
                                                                    image: mobileFiles[Object.keys(mobileFiles).find(path => path.includes("appinventor"))]
                                                                },
                                                            ].map((item, i) => (
                                                                <a
                                                                    key={i}
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                                                >
                                                                    <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                                                                        {item.image ? (
                                                                            <img
                                                                                src={item.image}
                                                                                alt={item.name}
                                                                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                                                            />
                                                                        ) : (
                                                                            <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                                                                                <span className="text-2xl font-bold text-muted-foreground">{item.name[0]}</span>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <h4 className="text-lg font-semibold text-center group-hover:text-primary transition-colors">
                                                                        {item.name}
                                                                    </h4>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </ScrollArea>
                                                </TabsContent>
                                                <TabsContent value="taqdimot">
                                                    <ScrollArea className="h-[60vh] pr-4">
                                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                                            {[
                                                                {
                                                                    name: "AhaSlides",
                                                                    link: "https://ahaslides.com/uz/blog/online-presentation-maker/",
                                                                    image: presentationFiles[Object.keys(presentationFiles).find(path => path.includes("ahaslides"))]
                                                                },
                                                                {
                                                                    name: "Visme",
                                                                    link: "https://www.visme.co/",
                                                                    image: presentationFiles[Object.keys(presentationFiles).find(path => path.includes("visme"))]
                                                                },
                                                                {
                                                                    name: "Prezi",
                                                                    link: "https://prezi.com/",
                                                                    image: presentationFiles[Object.keys(presentationFiles).find(path => path.includes("prezi"))]
                                                                },
                                                                {
                                                                    name: "PowerPoint",
                                                                    link: "https://powerpoint.cloud.microsoft/ru-ru/",
                                                                    image: presentationFiles[Object.keys(presentationFiles).find(path => path.includes("PowerPoint"))]
                                                                },
                                                                {
                                                                    name: "Canva",
                                                                    link: "https://www.canva.com/templates",
                                                                    image: null // No image provided for Canva, will use placeholder
                                                                },
                                                                {
                                                                    name: "Focusky",
                                                                    link: "https://focusky.com/",
                                                                    image: presentationFiles[Object.keys(presentationFiles).find(path => path.includes("focusky"))]
                                                                },
                                                                {
                                                                    name: "FlowVella",
                                                                    link: "https://flowvella.com/",
                                                                    image: presentationFiles[Object.keys(presentationFiles).find(path => path.includes("flowvella"))]
                                                                },
                                                                {
                                                                    name: "Ludus",
                                                                    link: "https://ludus.com/product_create.php",
                                                                    image: presentationFiles[Object.keys(presentationFiles).find(path => path.includes("ludus"))]
                                                                },
                                                            ].map((item, i) => (
                                                                <a
                                                                    key={i}
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                                                >
                                                                    <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                                                                        {item.image ? (
                                                                            <img
                                                                                src={item.image}
                                                                                alt={item.name}
                                                                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                                                            />
                                                                        ) : (
                                                                            <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                                                                                <span className="text-2xl font-bold text-muted-foreground">{item.name[0]}</span>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <h4 className="text-lg font-semibold text-center group-hover:text-primary transition-colors">
                                                                        {item.name}
                                                                    </h4>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </ScrollArea>
                                                </TabsContent>
                                                <TabsContent value="test">
                                                    <ScrollArea className="h-[60vh] pr-4">
                                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                                            {[
                                                                {
                                                                    name: "Wordwall",
                                                                    link: "https://wordwall.net/",
                                                                    image: testFiles[Object.keys(testFiles).find(path => path.includes("wordwall"))]
                                                                },
                                                                {
                                                                    name: "LearningApps",
                                                                    link: "https://learningapps.org/",
                                                                    image: testFiles[Object.keys(testFiles).find(path => path.includes("learningapps"))]
                                                                },
                                                                {
                                                                    name: "Kahoot",
                                                                    link: "https://kahoot.com/go/",
                                                                    image: testFiles[Object.keys(testFiles).find(path => path.includes("kahoot"))]
                                                                },
                                                                {
                                                                    name: "Quiz",
                                                                    link: "https://quiz.com/",
                                                                    image: testFiles[Object.keys(testFiles).find(path => path.includes("quiz"))]
                                                                },
                                                                {
                                                                    name: "iSpring",
                                                                    link: "https://www.ispring.ru/quizmaker",
                                                                    image: testFiles[Object.keys(testFiles).find(path => path.includes("ispring"))]
                                                                },
                                                                {
                                                                    name: "Online Test Pad",
                                                                    link: "https://onlinetestpad.com/",
                                                                    image: testFiles[Object.keys(testFiles).find(path => path.includes("onlinetestpad"))]
                                                                },
                                                            ].map((item, i) => (
                                                                <a
                                                                    key={i}
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                                                >
                                                                    <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                                                                        {item.image ? (
                                                                            <img
                                                                                src={item.image}
                                                                                alt={item.name}
                                                                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                                                            />
                                                                        ) : (
                                                                            <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                                                                                <span className="text-2xl font-bold text-muted-foreground">{item.name[0]}</span>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <h4 className="text-lg font-semibold text-center group-hover:text-primary transition-colors">
                                                                        {item.name}
                                                                    </h4>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </ScrollArea>
                                                </TabsContent>
                                            </Tabs>
                                        </DialogContent>
                                    </Dialog>
                                ) : (
                                    <Button variant="ghost" className="self-start group/btn">
                                        Batafsil
                                        <ArrowRight
                                            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
