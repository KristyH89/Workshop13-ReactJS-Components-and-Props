import { Container } from "../ui/Container";

const shopLinks = [
    "New Arrival",
    "Best Sellers",
    "Men Collection",
    "Women Collection",
];

const supportLinks = [
    "Order Status",
    "Shipping Policy",
    "Returns & Exchanges",
    "FAQs",
];

const companyLinks = [
    "About Us",
    "Sustainability",
    "Careers",
    "Contact",
];

export function Footer() {
    return (
        <footer className="mt-20 border-t border-gray-200 bg-[var(--color-primary)]/15 p-6">

            <Container>


                {/* Footer content */}
                <section className="grid gap-12 py-16 md:grid-cols-4">

                    {/* Brand column */}
                    <div>

                        <h3 className="text-xl font-bold">
                            LITE.SHOP
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-gray-600">
                            Modern e-commerce experience built for speed and
                            elegance. Discover the latest trends in outerwear,
                            footwear and accessories.
                        </p>

                        {/* Social media icons */}
                        <div className="mt-6 flex gap-3">

                            {/* Twitter icon */}
                            <button
                                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-[var(--color-primary)] hover:text-white"
                                aria-label="Twitter"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                                </svg>
                            </button>

                            {/* Instagram icon */}
                            <button
                                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-[var(--color-primary)] hover:text-white"
                                aria-label="Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                </svg>
                            </button>

                        </div>

                    </div>

                    {/* Shop links */}
                    <div>
                        <h4 className="font-semibold">Shop</h4>

                        <ul className="mt-4 space-y-3">
                            {shopLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 transition-colors hover:text-[var(--color-primary)]"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support links */}
                    <div>
                        <h4 className="font-semibold">Support</h4>

                        <ul className="mt-4 space-y-3">
                            {supportLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 transition-colors hover:text-[var(--color-primary)]"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company links */}
                    <div>
                        <h4 className="font-semibold">Company</h4>

                        <ul className="mt-4 space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 transition-colors hover:text-[var(--color-primary)]"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </section>

                {/* Bottom section */}
                <section className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-6 text-sm text-gray-500 md:flex-row">

                    <p>© 2026 LITE.SHOP. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>

                </section>

            </Container>

        </footer>
    );
}
