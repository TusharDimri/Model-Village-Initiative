"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Conference() {
    const { t } = useTranslation();
    
    const details = [
        {
            title: t('conference.venue.title'),
            description: t('conference.venue.description')
        },
        {
            title: t('conference.dates.title'),
            description: t('conference.dates.description')
        },
        {
            title: t('conference.accommodation.title'),
            description: t('conference.accommodation.description')
        }
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8 items-center">

                {/* Left Content */}
                <div className="lg:col-span-2">
                    <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#277A84] text-center">
                        {t('conference.details.title')} <span className="text-[#F9B233]">{t('conference.details.subtitle')}</span>
                    </h2>
                    <div className="mt-4 h-1 w-24 bg-[#F9B233] rounded mx-auto"></div>

                    <div className="mt-10 space-y-8">
                        {details.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-[#F9B233]/5 p-6 rounded-xl shadow-md border border-[#F9B233]/20"
                            >
                                <h3 className="font-playfair text-xl font-semibold text-[#277A84]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 font-inter text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image (Visible only on large screens) */}
                <div className="hidden lg:block">
                    <Image
                        width={1792}
                        height={2650}
                        src="/Conference.png"
                        alt="Conference"
                        className="w-full h-full object-cover rounded-xl shadow-lg border border-[#F9B233]/30"
                    />
                </div>
            </div>
        </section>
    );
}
