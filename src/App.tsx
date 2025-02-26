import { Header } from "./components/header";
import { Hero } from "./sections/hero";
import { HowItWorks } from "./sections/how-it-works";
import { FAQ } from "./sections/faq";
import { Footer } from "./components/footer";
import { ModalProvider } from "./components/modal-context";

function App() {
    console.log("App render");

    return (
        <ModalProvider>
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                {/* Header */}
                <Header />

                {/* Hero */}
                <Hero />

                {/* How it Works */}
                <HowItWorks />

                {/* Benefits Table */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <h2 className="text-3xl font-bold text-center mb-16">Referral Benefits</h2>
                    <div className="overflow-x-auto rounded-lg border bg-white">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b bg-blue-50">
                                    <th className="px-6 py-4 text-left">Program</th>
                                    <th className="px-6 py-4 text-right">Referrer Bonus</th>
                                    <th className="px-6 py-4 text-right">Referee Bonus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        program: "Professional Certificate in Product Management",
                                        referrer: "₹7,000",
                                        referee: "₹5,000",
                                    },
                                    {
                                        program: "PG Certificate in Strategic Product Management",
                                        referrer: "₹9,000",
                                        referee: "₹11,000",
                                    },
                                    {
                                        program: "Advanced Program in Product Management",
                                        referrer: "₹10,000",
                                        referee: "₹10,000",
                                    },
                                ].map((row, index) => (
                                    <tr
                                        key={index}
                                        className="border-b last:border-0 hover:bg-blue-50/50"
                                    >
                                        <td className="px-6 py-4">{row.program}</td>
                                        <td className="px-6 py-4 text-right font-medium text-green-600">
                                            {row.referrer}
                                        </td>
                                        <td className="px-6 py-4 text-right font-medium text-blue-600">
                                            {row.referee}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FAQs */}
                <FAQ />

                {/* Footer */}
                <Footer />
            </div>
        </ModalProvider>
    );
}

export default App;
