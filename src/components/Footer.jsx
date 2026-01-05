import { ScanFace } from "lucide-react";

const footerLinks = {
  platform: {
    title: "Platforma",
    links: [
      { name: "Nazorat vositalari", href: "#nazorat" },
      { name: "Multimodal vositalar", href: "#multimodal" },
      { name: "Amaliy loyihalar", href: "#amaliy" },
      { name: "Topshiriqlar", href: "#topshiriq" },
    ],
  },
  company: {
    title: "Kompaniya",
    links: [
      { name: "Biz haqimizda", href: "#" },
      { name: "Narxlar", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Yordam", href: "#" },
    ],
  },
  legal: {
    title: "Huquqiy",
    links: [
      { name: "Maxfiylik siyosati", href: "#" },
      { name: "Foydalanish shartlari", href: "#" },
      { name: "Cookie siyosati", href: "#" },
    ],
  },
};

export const Footer = () => {
  return (
    <footer className="py-16 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center shadow-glow">
                <ScanFace className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Face<span className="text-gradient">Test</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-xs mb-6">
              Face ID texnologiyasi bilan xavfsiz test yechish platformasi. Ta'limni zamonaviy usulda olib boring.
            </p>
            <div className="flex gap-4">
              {["telegram", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FaceTest. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-sm text-muted-foreground">
            O'zbekistonda ❤️ bilan yaratilgan
          </p>
        </div>
      </div>
    </footer>
  );
};
