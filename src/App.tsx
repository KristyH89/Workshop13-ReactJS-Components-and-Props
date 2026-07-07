import { Header } from "./components/layout/Header";
import { HeroBanner } from "./components/layout/HeroBanner";

import summerSales from "./assets/summersales3.jpg";

function App() {
    return (
        <>
            <Header />

            <main className="mx-auto mt-8 max-w-7xl px-6">
                <HeroBanner
                    title="Summer Sale"
                    description="Get up to 50% off on all summer collections. Limited time offer!"
                    buttonText="Shop Now"
                    image={summerSales}
                />
            </main>
        </>
    );
}

export default App;