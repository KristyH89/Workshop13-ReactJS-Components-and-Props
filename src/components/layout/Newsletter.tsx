import { Container } from "../ui/Container";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export function Newsletter() {
    return (
        <section className="py-20 px-6 lg:px-10">

            <div
                className="
            w-full
            relative overflow-hidden
            rounded-3xl
            bg-gradient-to-br
            from-[var(--color-primary)]
            via-[var(--color-primary)]
            to-[#255a54]
            px-12 py-16
            shadow-2xl
        "
            >
                {/* Decorative background */}
                <div className="absolute inset-0">
                    <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />
                </div>

                <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

                    {/* Text */}
                    <div className="max-w-xl text-white">
                        <h2 className="text-4xl font-black tracking-tight">
                            Join the LITE.CLUB
                        </h2>

                        <p className="mt-5 text-lg leading-relaxed text-white/90">
                            Subscribe today and receive{" "}
                            <span className="font-bold text-amber-300">
                        15% OFF
                    </span>{" "}
                            your first order. Be the first to discover new
                            arrivals, exclusive collections and members-only
                            offers.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="w-full max-w-lg lg:ml-auto">
                        <div className="flex flex-col gap-4 sm:flex-row">

                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="
                            flex-1
                            border-white/30
                            bg-white/20
                            text-white
                            placeholder:text-white/70
                            focus:bg-white
                            focus:text-slate-900
                        "
                            />

                            <Button
                                className="
                            whitespace-nowrap
                            bg-amber-300
                            text-slate-900
                            font-semibold
                            px-8 py-4
                            hover:bg-amber-400
                            shadow-lg shadow-amber-200/40
                        "
                            >
                                Subscribe
                            </Button>
                        </div>

                        <p className="mt-4 text-xs text-white/70">
                            By subscribing, you agree to our Privacy Policy
                            and Terms of Service.
                        </p>
                    </form>

                </div>

            </div>

        </section>

    );
}