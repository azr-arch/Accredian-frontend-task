export const FAQ = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
                {[
                    {
                        question: "How does the referral program work?",
                        answer: "Our referral program is simple! Share your unique referral link with friends. When they enroll in any of our programs, both you and your friend receive rewards.",
                    },
                    {
                        question: "When will I receive my referral bonus?",
                        answer: "The referral bonus is processed within 30 days after your referred friend completes their enrollment and makes the full payment.",
                    },
                    {
                        question: "Is there a limit to how many people I can refer?",
                        answer: "No, there's no limit! You can refer as many friends as you'd like and earn rewards for each successful referral.",
                    },
                ].map((faq, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                        <button
                            className="flex justify-between items-center w-full text-left font-semibold p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={(e) => {
                                const content = e.currentTarget.nextElementSibling;
                                if (content) {
                                    content.classList.toggle("hidden");
                                }
                            }}
                        >
                            {faq.question}
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <div className="hidden mt-2 p-4 bg-white rounded-lg">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
