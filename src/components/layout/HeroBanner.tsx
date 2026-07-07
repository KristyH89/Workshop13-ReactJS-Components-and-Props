import { Button } from "../ui/Button";

type HeroBannerProps = {
    title: string;
    description: string;
    buttonText: string;
    image: string;
};

export function HeroBanner({
                               title,
                               description,
                               buttonText,
                               image,
                           }: HeroBannerProps) {
    return (
        <section className="relative overflow-hidden rounded-2xl shadow-sm">
            {/* Hero image */}
            <img
                src={image}
                alt={title}
                className="h-[500px] w-full object-cover md:h-[600px] lg:h-[700px]"
            />

            {/* Dark overlay to improve text readability */}
            <div className="absolute inset-0 flex items-center bg-black/35">
                <div className="max-w-lg px-8 md:px-12 lg:px-16">
                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        {title}
                    </h2>

                    <p className="mt-4 leading-relaxed text-white/90 md:text-lg">
                        {description}
                    </p>

                    <Button className="mt-8 px-8 py-3">
                        {buttonText}
                    </Button>
                </div>
            </div>
        </section>
    );
}