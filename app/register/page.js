"use client";
import { Mic, Users, DollarSign } from "lucide-react";

export default function Registration() {
    const registrationData = [
        {
            title: "Call for Speakers",
            icon: <Mic className="w-8 h-8 text-[#277A84]" />,
            description:
                "Submit your topic and presentation paper through our online portal. We're seeking innovative solutions in sustainable architecture, renewable energy, rural entrepreneurship, and digital connectivity for remote areas."
        },
        {
            title: "Technology Partners",
            icon: <Users className="w-8 h-8 text-[#277A84]" />,
            description:
                "Showcase your solutions that address Uttarakhand's unique challenges. Opportunities for demonstrations, exhibitions, and direct connections with village implementation teams and investors."
        },
        {
            title: "Investors & Financiers",
            icon: <DollarSign className="w-8 h-8 text-[#277A84]" />,
            description:
                "Discover high-impact investment opportunities with strong ESG credentials. Connect with pre-vetted projects and explore co-financing options with government schemes and development funds."
        }
    ];

    const whatsappMessage = encodeURIComponent(
        "Hello, I’m interested in joining your initiative and event. Please share more details."
    );

    return (
        <section className="bg-white py-16 px-6 sm:px-10 mt-[70px]">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#277A84]">
                    Registration & <span className="text-[#F9B233]">Participation</span>
                </h2>
                <div className="mt-4 h-1 w-24 bg-[#F9B233] rounded mx-auto"></div>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {registrationData.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#F9B233]/5 rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center"
                        >
                            <div className="bg-white p-4 rounded-full shadow-md mb-6">
                                {item.icon}
                            </div>
                            <h3 className="font-playfair text-xl font-semibold text-[#277A84]">
                                {item.title}
                            </h3>
                            <p className="mt-4 font-inter text-gray-700 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* WhatsApp Button */}
                <div className="mt-12">
                    <a
                        href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#F9B233] text-white text-lg font-medium px-8 py-4 rounded-lg shadow-md hover:bg-[#E6A32B] transition-all duration-300"
                    >
                        Join Us
                    </a>
                </div>
            </div>
        </section>
    );
}
