export const HowItWorks = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
            <h2 className="text-3xl font-bold text-center mb-16">How Does It Work?</h2>
            <div className="grid md:grid-cols-3 gap-8 relative">
                {[
                    {
                        title: "Submit Referrals",
                        description: "Enter your friend's details through our referral portal",
                        icon: "📝",
                    },
                    {
                        title: "Friend Enrolls",
                        description: "When your friend enrolls in any program",
                        icon: "🎓",
                    },
                    {
                        title: "Earn Rewards",
                        description: "Get your reward within 30 days of enrollment",
                        icon: "💎",
                    },
                ].map((step, index) => (
                    <div
                        key={index}
                        className="relative p-6 rounded-2xl border bg-gradient-to-b from-white to-blue-50 hover:inset-shadow-blue-400 hover:shadow-md hover:inset-shadow-2xs transition-shadow duration-200 "
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                            <span className="text-2xl">{step.icon}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                        {index < 2 && (
                            <div className="hidden md:block absolute -right-4 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="bg-blue-100 w-8 h-2" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
