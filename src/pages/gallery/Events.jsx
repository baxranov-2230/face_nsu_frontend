import { Navbar } from "@/components/Navbar";

const Events = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold mb-8 text-center text-gradient">Tadbirlar</h1>
                <div className="space-y-4">
                    {/* Placeholder for Events */}
                    <div className="p-6 bg-muted/50 rounded-xl border border-border hover:bg-muted/80 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">Tadbir nomi 1</h3>
                        <p className="text-muted-foreground">Qisqacha tavsif...</p>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border hover:bg-muted/80 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">Tadbir nomi 2</h3>
                        <p className="text-muted-foreground">Qisqacha tavsif...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
