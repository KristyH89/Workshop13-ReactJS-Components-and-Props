import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { HeroBanner } from "./components/layout/HeroBanner";
import { Container } from "./components/ui/Container";

import summerSales from "./assets/summersales3.jpg";

function App() {
    return (
        <>
            <Header />

            {/* Main page layout */}
            <main className="py-8">
                <Container>
                    <div className="flex items-start gap-8">
                        {/* Left column */}
                        <Sidebar />

                        {/* Right column */}
                        <div className="flex-1">
                            <HeroBanner
                                title="Summer Sale"
                                description="Get up to 50% off on all summer collections. Limited time offer!"
                                buttonText="Shop Now"
                                image={summerSales}
                            />
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
}

export default App;