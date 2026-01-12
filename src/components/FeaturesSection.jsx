import {
    ClipboardCheck,
    MonitorPlay,
    Briefcase,
    FileText,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import {Button} from "@/components/ui/button";

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

export const FeaturesSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-muted/30"/>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow opacity-30"/>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Xususiyatlar
          </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Barcha kerakli vositalar
                        <br/>
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
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <div className="flex flex-col h-full">
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`w-7 h-7 text-${feature.color}`}/>
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
                                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0"/>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                {/* Link */}
                                <Button variant="ghost" className="self-start group/btn">
                                    Batafsil
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"/>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
