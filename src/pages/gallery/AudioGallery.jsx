import { Navbar } from "@/components/Navbar";

const AudioGallery = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold mb-8 text-center text-gradient">Audio galeriya</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder for Audio Items */}
                    <div className="h-32 bg-muted rounded-xl flex items-center justify-center border border-border">
                        <p className="text-muted-foreground">Audio 1</p>
                    </div>
                    <div className="h-32 bg-muted rounded-xl flex items-center justify-center border border-border">
                        <p className="text-muted-foreground">Audio 2</p>
                    </div>
                    <div className="h-32 bg-muted rounded-xl flex items-center justify-center border border-border">
                        <p className="text-muted-foreground">Audio 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioGallery;
