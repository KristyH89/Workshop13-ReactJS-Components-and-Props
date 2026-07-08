import { HomeSidebar } from "../components/layout/HomeSidebar";
import { HeroBanner } from "../components/layout/HeroBanner";
import { Container } from "../components/ui/Container";

import summerSales from "../assets/summersales3.jpg";

export function Home() {
    return (
        <main className="py-8">
            <Container>
                <div className="flex items-start gap-8">

                    <HomeSidebar />

                    <div className="flex-1">
                        <HeroBanner
                            title="Summer Sale"
                            description="Get up to 50% off on all summer collections. Limited time offer!"
                            buttonText="Shop Now"
                            image={summerSales}
                            imageAlt={"Summer Sale"}
                        />
                    </div>

                </div>
            </Container>
        </main>
    );
}
