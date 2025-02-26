import { useModal } from "../components/modal-context";

export const Hero = () => {
    const { onOpen } = useModal();

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 pb-32">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center rounded-full border bg-white px-4 py-1.5 text-sm font-medium">
                        🎉 New Referral Program
                        <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
                            Beta
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
                        Let's Learn <br />& Earn Together
                    </h1>
                    <p className="text-xl text-gray-600">
                        Refer your friends and earn up to
                        <span className="font-bold text-blue-600"> ₹15,000 </span>
                        in rewards. Plus, they get a special discount!
                    </p>
                    <button
                        onClick={() => onOpen()}
                        className="px-6 py-3 text-lg font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                        Refer Now
                    </button>
                </div>
                <div className="relative max-w-md mx-auto lg:max-w-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20" />
                    <div className="relative animate-float">
                        <img
                            src="/hero-1.png"
                            alt="Education Illustration"
                            width={400}
                            height={800}
                            className="mx-auto  object-cover rounded-lg shadow-xl"
                        />
                        {/* Floating Money Icons */}
                        <div className="absolute -top-8 -left-8 animate-float-delay-1">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-2xl">💸</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 animate-float-delay-2">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-2xl">💰</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
