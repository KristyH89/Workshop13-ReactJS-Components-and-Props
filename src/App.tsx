import { SectionTitle } from "./components/ui/SectionTitle";

function App() {
    return (
        <main className="space-y-8 p-10">
            <SectionTitle>Categories</SectionTitle>

            <SectionTitle>Price Range</SectionTitle>

            <SectionTitle>Availability</SectionTitle>

            <SectionTitle>Recommended for you</SectionTitle>

            <h2 className="text-2xl font-semibold">
                Join the <span className="text-[var(--color-primary)]">LITE.CLUB</span>
            </h2>
        </main>
    );
}

export default App;