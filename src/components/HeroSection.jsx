import { Button } from "@/components/ui/button";
import { ScanFace, Shield, Zap, Users } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-glow opacity-50" />
            <div
                className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div
                className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"
                style={{ animationDelay: "2s" }} />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur border border-border/50 shadow-soft mb-8 animate-fade-up">
                        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Xavfsiz va zamonaviy test platformasi
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up"
                        style={{ animationDelay: "0.1s" }}>


                        <span className="text-gradient">Pedagogik dasturiy vositalarni loyihalashga oid kompetentligini rivojlantirish</span>


                    </h1>



                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up"
                        style={{ animationDelay: "0.3s" }}>
                        <a href="https://api.test.pdv-loyiha.uz/login" target="_blank">
                            <Button variant="hero" size="xl">
                                <ScanFace className="w-5 h-5" />
                                Boshlash
                            </Button>
                        </a>


                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-up"
                        style={{ animationDelay: "0.4s" }}>
                        {[
                            { icon: Users, value: "1000+", label: "Foydalanuvchilar" },
                            { icon: Shield, value: "99.9%", label: "Xavfsizlik" },
                            { icon: Zap, value: "< 1s", label: "Tezlik" },
                            { icon: ScanFace, value: "100%", label: "Aniqlik" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="p-4 md:p-6 rounded-2xl bg-card/60 backdrop-blur border border-border/50 shadow-soft hover:shadow-card hover:scale-105 transition-all duration-300"
                            >
                                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/3 left-10 hidden lg:block animate-float">
                <div className="w-16 h-16 rounded-2xl bg-hero-gradient shadow-glow flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
            </div>
            <div className="absolute bottom-1/3 right-10 hidden lg:block animate-float" style={{ animationDelay: "3s" }}>
                <div className="w-16 h-16 rounded-2xl bg-secondary shadow-soft flex items-center justify-center">
                    <Zap className="w-8 h-8 text-secondary-foreground" />
                </div>
            </div>
        </section>
    );
};
