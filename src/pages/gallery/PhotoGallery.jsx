import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PhotoGallery = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold mb-8 text-center text-gradient">Foto galeriya</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder for Photo Items */}
                    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-border">
                        <p className="text-muted-foreground">Foto 1</p>
                    </div>
                    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-border">
                        <p className="text-muted-foreground">Foto 2</p>
                    </div>
                    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-border">
                        <p className="text-muted-foreground">Foto 3</p>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default PhotoGallery;
