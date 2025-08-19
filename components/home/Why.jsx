"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Why() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full bg-white pt-16 sm:pt-20 scroll-mt-16 sm:scroll-mt-16" id="about">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <div>
                    <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#277A84] leading-snug text-center">
                        {t('why.title')} <span className="text-[#F9B233]">{t('why.highlight')}</span>
                    </h2>
                    <div className="mt-6 h-1 w-20 bg-[#F9B233] rounded block mx-auto"></div>
                    <p className="mt-8 font-inter text-gray-700 text-lg leading-relaxed">
                        {t('why.description1')}
                    </p>
                    <p className="mt-6 font-inter text-gray-700 text-lg leading-relaxed">
                        {t('why.description2')}
                    </p>
                </div>

                {/* Image */}
                <div className="relative w-full h-72 sm:h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                        width={2048}
                        height={2048}
                        src="/Palayan.png"
                        alt="Why Uttarakhand Needs Model Villages"
                        className="w-full h-full object-cover duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
