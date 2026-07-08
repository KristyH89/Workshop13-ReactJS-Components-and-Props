import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Newsletter } from "./components/layout/Newsletter";
import { Footer } from "./components/layout/Footer";

import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>

            <Newsletter />
            <Footer />
        </BrowserRouter>
    );
}

export default App;