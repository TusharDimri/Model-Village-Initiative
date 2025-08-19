"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Stakeholders() {
    const { t } = useTranslation();
    
    const stakeholders = [
        {
            title: t('stakeholders.communities.title'),
            description: t('stakeholders.communities.description')
        },
        {
            title: t('stakeholders.investors.title'),
            description: t('stakeholders.investors.description')
        },
        {
            title: t('stakeholders.tech.title'),
            description: t('stakeholders.tech.description')
        }
    ];

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3">

                {/* Text Section - 2/3 */}
                <div className="lg:col-span-2 px-6 sm:px-10 pt-12 lg:pt-20 flex flex-col justify-center">
                    <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#277A84] text-center">
                        {t('stakeholders.title')}{" "}
                        <span className="text-[#F9B233]">{t('stakeholders.subtitle')}</span>
                        <div className="mt-4 h-1 w-24 bg-[#F9B233] rounded block mx-auto"></div>
                    </h2>

                    <div className="mt-10 space-y-6">
                        {stakeholders.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-[#F9B233]/5 rounded-xl shadow-md border border-[#F9B233]/30 p-6"
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

                {/* Image Section - 1/3 */}
                <div className="hidden  lg:flex relative lg:h-full w-auto flex items-center justify-center">
                    <Image
                        width={1024}
                        height={1536}
                        src="/Stakeholders.png"
                        alt="Key Stakeholders"
                        className="w-auto h-[80%] object-cover rounded-lg"
                    />
                </div>

            </div>
        </section>
    );
}
