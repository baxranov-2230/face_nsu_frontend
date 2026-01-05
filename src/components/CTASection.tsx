import { Button } from "@/components/ui/button";
import { ScanFace, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 lg:p-16 rounded-3xl bg-card border border-border/50 shadow-elevated relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-hero-gradient shadow-glow flex items-center justify-center mx-auto mb-8 animate-float">
                <ScanFace className="w-10 h-10 text-primary-foreground" />
              </div>

              {/* Content */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Hoziroq <span className="text-gradient">boshlang</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Face ID texnologiyasi bilan xavfsiz test yechish tajribasini sinab ko'ring. Ro'yxatdan o'tish bepul!
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl">
                  <ScanFace className="w-5 h-5" />
                  Bepul ro'yxatdan o'tish
                </Button>
                <Button variant="glass" size="xl">
                  Demo ko'rish
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <p className="mt-8 text-sm text-muted-foreground">
                ✓ Kredit karta talab qilinmaydi &nbsp;&nbsp; ✓ 14 kunlik bepul sinov &nbsp;&nbsp; ✓ Istalgan vaqtda bekor qilish
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
