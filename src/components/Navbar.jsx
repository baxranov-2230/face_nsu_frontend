import {Button} from "@/components/ui/button";
import {ScanFace, Menu, X} from "lucide-react";
import {useState} from "react";

const navLinks = [
    {name: "Nazariy vositalari", href: "#nazorat"},
    {name: "Multimodal vositalar", href: "#multimodal"},
    {name: "Amaliy loyihalar", href: "#amaliy"},
    {name: "Topshiriqlar", href: "#topshiriq"},
    {name: "Galeriya", href: "#topshiriq"},
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 group">
                        <div
                            className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                            <ScanFace className="w-5 h-5 text-primary-foreground"/>
                        </div>
                        <span className="text-xl font-bold text-foreground">
              <span className="text-gradient">Pedagogik dasturiy vositalar</span>
            </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button variant="ghost" size="sm">
                            Kirish
                        </Button>
                        <Button variant="hero" size="default">
                            <ScanFace className="w-4 h-4"/>
                            Face ID bilan boshlash
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-border/50 animate-fade-up">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 flex flex-col gap-2">
                                <a href="https://test.pdv-loyiha.uz" target="_blank">
                                    {/*<Button variant="ghost" className="justify-start">*/}
                                        Kirish
                                    {/*</Button>*/}
                                </a>
                                <Button variant="hero">
                                    <ScanFace className="w-4 h-4"/>
                                    Face ID bilan boshlash
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
