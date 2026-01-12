import {ScanFace, UserCheck, FileQuestion, Trophy} from "lucide-react";

const steps = [
    {
        icon: ScanFace,
        step: "01",
        title: "Yuzni ro'yxatdan o'tkazish",
        description: "Kameradan foydalanib yuzingizni ro'yxatdan o'tkazing. Bu bir martalik jarayon."
    },
    {
        icon: UserCheck,
        step: "02",
        title: "Face ID bilan kirish",
        description: "Har safar tizimga kirishda yuzingiz avtomatik taniladi va tasdiqlanadi."
    },
    {
        icon: FileQuestion,
        step: "03",
        title: "Test yechish",
        description: "Xavfsiz muhitda testlarni yeching. Tizim aldashga qarshi himoyalangan."
    },
    {
        icon: Trophy,
        step: "04",
        title: "Natijalarni olish",
        description: "Test yakunlangach natijalarni darhol ko'ring va tahlil qiling."
    }
];

export const HowItWorksSection = () => {
    return (
        <div>
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
          <span
              className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Qanday ishlaydi
          </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            4 oddiy qadam bilan
                            <br/>
                            <span className="text-gradient">testni boshlang</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Face ID texnologiyasi orqali xavfsiz va qulay test yechish jarayoni
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="relative">
                        {/* Connection Line */}
                        <div
                            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2"/>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                >
                                    {/* Card */}
                                    <div
                                        className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 text-center">
                                        {/* Step Number */}
                                        <div
                                            className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-hero-gradient text-primary-foreground text-xs font-bold">
                                            {step.step}
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mt-4 mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                                            <step.icon className="w-8 h-8 text-primary"/>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-lg font-bold mb-2 text-foreground">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Arrow for lg screens */}
                                    {index < steps.length - 1 && (
                                        <div
                                            className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                            <div
                                                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center">
                                                <div
                                                    className="w-2 h-2 border-t-2 border-r-2 border-primary rotate-45"/>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex items-center gap-2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gradient">Loyiha ishlari</span>
                    </h2>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gradient">Rasm</span>
                    </h2>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gradient">video </span>
                    </h2>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gradient">matn </span>
                    </h2>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gradient">pdf </span>
                    </h2>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gradient">Krasword </span>
                    </h2>
                </div>
            </section>
        </div>
    );
};
