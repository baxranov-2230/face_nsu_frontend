import { Button } from "@/components/ui/button";
import { ScanFace, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
    { name: "Nazariy vositalari", href: "/#nazorat" },
    { name: "Multimodal vositalar", href: "/#multimodal" },
    { name: "Amaliy loyihalar", href: "/#amaliy" },
    { name: "Topshiriqlar", href: "/#topshiriq" },
    {
        name: "Galeriya",
        href: "#galeriya",
        children: [
            { name: "Foto galeriya", href: "/gallery/photo" },
            { name: "Video galeriya", href: "/gallery/video" },
            { name: "Audio galeriya", href: "/gallery/audio" },
            { name: "Loyiha ishi", href: "/gallery/project-work" },
        ]
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 group">
                        <div
                            className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                            <ScanFace className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold text-foreground">
                            <span className="text-gradient">Pedagogik dasturiy vositalar</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            link.children ? (
                                <DropdownMenu key={link.name}>
                                    <DropdownMenuTrigger
                                        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 focus:outline-none">
                                        {link.name}
                                        <ChevronDown className="w-4 h-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        {link.children.map((child) => (
                                            <DropdownMenuItem key={child.name} asChild>
                                                <Link to={child.href} className="cursor-pointer">
                                                    {child.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-3">

                        <a href="https://api.test.pdv-loyiha.uz/login" target="_blank">
                            <Button variant="hero" size="default">
                                <ScanFace className="w-4 h-4" />
                                Face ID bilan boshlash
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-border/50 animate-fade-up">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link, index) => (
                                <div key={link.name}>
                                    {link.children ? (
                                        <div className="flex flex-col">
                                            <button
                                                onClick={() => toggleSubmenu(index)}
                                                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors w-full text-left"
                                            >
                                                {link.name}
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`} />
                                            </button>
                                            {openSubmenu === index && (
                                                <div className="pl-6 flex flex-col gap-1">
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            to={child.href}
                                                            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 flex flex-col gap-2">
                                <a href="https://test.pdv-loyiha.uz" target="_blank">
                                    <Button variant="ghost" className="justify-start w-full">
                                        Kirish
                                    </Button>
                                </a>
                                <a href="https://api.test.pdv-loyiha.uz/login" target="_blank">
                                    <Button variant="hero" className="w-full">
                                        <ScanFace className="w-4 h-4" />
                                        Face ID bilan boshlash
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
