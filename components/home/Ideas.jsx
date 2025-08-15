"use client";
import { Zap, Server, Sprout } from "lucide-react";

export default function Ideas() {
    const ideas = [
        {
            title: "Bio-Energy & Fire Mitigation",
            icon: <Zap className="w-8 h-8 text-[#277A84]" />,
            description:
                "Projects focusing on compressed biogas (CBG), biodiesel, and bio-char offer tremendous potential. Research shows biochar improves soil fertility, reduces chemical fertilizer needs, and aids waste management while generating clean bioenergy."
        },
        {
            title: "Green IT Infrastructure",
            icon: <Server className="w-8 h-8 text-[#277A84]" />,
            description:
                "Data centers in Uttarakhand's cooler regions can utilize free cooling from mountain air, significantly cutting energy costs and emissions. Dehradun and nearby colder areas present ideal opportunities for sustainable digital infrastructure development."
        },
        {
            title: "Agro & Horticulture Value Addition",
            icon: <Sprout className="w-8 h-8 text-[#277A84]" />,
            description:
                "Uttarakhand's potential for exporting high-value Himalayan crops, flowers, grains, and spices remains largely untapped. We'll explore cold-chain infrastructure, processing facilities, and agri-tourism models that can dramatically boost rural incomes."
        }
    ];

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3">
                
                {/* Left Image */}
                <div className="relative lg:h-full flex items-center justify-center lg:col-span-1">
                    <img
                        src="/vision.png"
                        alt="Innovative Green Technologies"
                        className="h-[90%] lg:h-[60%] object-cover"
                    />
                    {/* Overlay for better contrast on small screens */}
                    {/* <div className="lg:hidden absolute inset-0 bg-black/30"></div> */}
                </div>

                {/* Right Content */}
                <div className="pt-16 px-6 sm:px-10 lg:pt-20 lg:col-span-2">
                    {/* Section Heading */}
                    <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#277A84] text-center mt-5 lg:mt-0">
                        Innovative <span className="text-[#F9B233]">Green Technologies</span>
                    </h2>
                    <div className="mt-4 h-1 w-24 bg-[#F9B233] rounded block mx-auto"></div>

                    {/* Ideas List */}
                    <div className="mt-12 space-y-10">
                        {ideas.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col sm:flex-row sm:items-start gap-6 bg-[#F9B233]/5 p-6  rounded-xl shadow-md border border-[#F9B233]/30"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 flex items-center justify-center bg-white p-3 rounded-full shadow-md">
                                    {item.icon}
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="font-playfair text-xl font-semibold text-[#277A84]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 font-inter text-gray-700 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
