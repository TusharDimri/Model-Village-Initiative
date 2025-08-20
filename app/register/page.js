"use client";
import { Mic, Users, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Registration() {
    const { t } = useTranslation();
    
    const registrationData = [
        {
            title: t('register.speakers.title'),
            icon: <Mic className="w-8 h-8 text-[#277A84]" />,
            description: t('register.speakers.description')
        },
        {
            title: t('register.partners.title'),
            icon: <Users className="w-8 h-8 text-[#277A84]" />,
            description: t('register.partners.description')
        },
        {
            title: t('register.investors.title'),
            icon: <DollarSign className="w-8 h-8 text-[#277A84]" />,
            description: t('register.investors.description')
        }
    ];

    const whatsappMessage = encodeURIComponent(t('register.whatsappMessage'));

    return (
        <section className="bg-white py-12 md:py-16 px-6 sm:px-10 mt-[70px]">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#277A84]">
                    {t('register.title')} & <span className="text-[#F9B233]">{t('register.participation')}</span>
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
                        href={`https://wa.me/919811431604?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#F9B233] text-white text-lg font-medium px-8 py-4 rounded-lg shadow-md hover:bg-[#E6A32B] transition-all duration-300"
                    >
                        {t('register.joinUs')}
                    </a>
                </div>
            </div>
        </section>
    );
}
