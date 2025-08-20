"use client";
import { Zap, Server, Sprout } from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Ideas() {
    const { t } = useTranslation();
    
    const ideas = [
        {
            title: t('ideas.bioenergy.title'),
            icon: <Zap className="w-8 h-8 text-[#277A84]" />,
            description: t('ideas.bioenergy.description')
        },
        {
            title: t('ideas.greenit.title'),
            icon: <Server className="w-8 h-8 text-[#277A84]" />,
            description: t('ideas.greenit.description')
        },
        {
            title: t('ideas.agro.title'),
            icon: <Sprout className="w-8 h-8 text-[#277A84]" />,
            description: t('ideas.agro.description')
        }
    ];

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3">
                
                {/* Left Image */}
                <div className="relative lg:h-full flex items-center justify-center lg:col-span-1">
                    <Image
                        width={1024}
                        height={1024}
                        src="/Vision.png"
                        alt="Innovative Green Technologies"
                        className="w-[80%] lg:w-full lg:h-[60%] object-cover mt-12 lg:mt-0"
                    />
                    {/* Overlay for better contrast on small screens */}
                    {/* <div className="lg:hidden absolute inset-0 bg-black/30"></div> */}
                </div>

                {/* Right Content */}
                <div className="px-6 sm:px-10 pt-12 md:pt-16 lg:col-span-2">
                    {/* Section Heading */}
                    <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#277A84] text-center mt-5 lg:mt-0">
                        {t('ideas.title')} <span className="text-[#F9B233]">{t('ideas.subtitle')}</span>
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
