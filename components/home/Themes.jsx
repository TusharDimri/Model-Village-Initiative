"use client";
import { Briefcase, HeartPulse, Home, TreePine } from "lucide-react";

export default function Themes() {
    const data = [
        {
            title: "Migration & Employment",
            icon: <Briefcase className="w-8 h-8 text-[#277A84]" />,
            description:
                "Unemployment drives more than half of Uttarakhand's rural exodus. We'll explore innovative policies to create local jobs in green sectors, strengthening village economies and reversing the migration trend through sustainable enterprise models."
        },
        {
            title: "Healthcare Access",
            icon: <HeartPulse className="w-8 h-8 text-[#277A84]" />,
            description:
                "Remote villages often lack basic medical services. Our conference presents public–private partnership models bringing healthcare closer to isolated communities through telemedicine hubs, mobile clinics, and training local health workers."
        },
        {
            title: "Earthquake-Resilient Construction",
            icon: <Home className="w-8 h-8 text-[#277A84]" />,
            description:
                "Traditional Koti Banal and Kath-Khuni architectures feature raised platforms and wooden beams that provide superior stability during earthquakes. We'll showcase how these ancient techniques can be integrated with modern materials."
        },
        {
            title: "Sustainable Tourism",
            icon: <TreePine className="w-8 h-8 text-[#004C54]" />,
            description:
                "By distributing visitors across new destinations, we can reduce overcrowding while improving revenues. Discover strategies for marketing authentic homestays, cultural experiences, and eco-tourism opportunities that benefit local communities."
        }
    ];

    return (
        <section className="bg-white pt-3 sm:pt-20 scroll-mt-3 sm:scroll-mt-16" id="initiatives">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#277A84]">
                    Conference Themes:{" "}
                    <span className="text-[#F9B233]">Building Sustainable Solutions</span>
                </h2>
                <div className="mt-4 h-1 w-24 bg-[#F9B233] mx-auto rounded"></div>

                {/* Grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {data.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                        >
                            {/* Icon & Title */}
                            <div className="flex flex-col items-center text-center px-6 py-6 bg-[#F9B233]/5 border-b border-gray-200 rounded-t-xl">
                                <div className="bg-white p-3 rounded-full shadow-md">{item.icon}</div>
                                <h3 className="mt-4 font-playfair text-lg font-semibold text-[#277A84]">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="px-6 py-6 flex-1">
                                <p className="font-inter text-gray-700 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
