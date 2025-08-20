"use client";
import { Briefcase, HeartPulse, Home, TreePine } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Themes() {
    const { t } = useTranslation();
    
    const data = [
        {
            title: t('themes.migration.title'),
            icon: <Briefcase className="w-8 h-8 text-[#277A84]" />,
            description: t('themes.migration.description')
        },
        {
            title: t('themes.healthcare.title'),
            icon: <HeartPulse className="w-8 h-8 text-[#277A84]" />,
            description: t('themes.healthcare.description')
        },
        {
            title: t('themes.construction.title'),
            icon: <Home className="w-8 h-8 text-[#277A84]" />,
            description: t('themes.construction.description')
        },
        {
            title: t('themes.tourism.title'),
            icon: <TreePine className="w-8 h-8 text-[#004C54]" />,
            description: t('themes.tourism.description')
        }
    ];

    return (
        <section className="bg-white pt-3 md:pt-12 scroll-mt-3 sm:scroll-mt-12" id="initiatives">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#277A84]">
                    {t('themes.title')}{" "}
                    <span className="text-[#F9B233]">{t('themes.subtitle')}</span>
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
