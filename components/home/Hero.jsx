"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import heroMobile from "@/public/hero-mobile.png";
import heroTablet from "@/public/hero-tablet.png";
import heroLaptop from "@/public/hero-laptop.png";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full h-[100vh]">
            {/* Mobile (default) */}
            <div className="absolute inset-0">
                <Image
                    src={heroMobile}
                    alt="Hero"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority // preload LCP for mobile viewers
                />
            </div>

            {/* Tablet (shown from sm) */}
            <div className="hidden sm:block absolute inset-0">
                <Image
                    src={heroTablet}
                    alt="Hero"
                    fill
                    className="object-cover"
                    sizes="100vw"
                // Not priority by default - Next will lazy load unless you set priority
                />
            </div>

            {/* Laptop/Desktop (shown from lg) */}
            <div className="hidden lg:block absolute inset-0">
                <Image
                    src={heroLaptop}
                    alt="Hero"
                    fill
                    className="object-cover"
                    sizes="100vw"
                // You can also mark this one priority if desktop LCP matters.
                />
            </div>

            {/* overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />


            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
                {/* Main Heading */}
                <h1 className="font-playfair text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal tracking-wide leading-[1.35] max-w-6xl drop-shadow-lg text-shadow-lg antialiased">
                    {t('hero.title')}
                </h1>

                {/* Subtitle */}
                <div className="mt-8 max-w-4xl">
                    <p className="font-inter text-gray-100 text-lg sm:text-xl lg:text-2xl font-light leading-[1.45] tracking-[0.02em] drop-shadow-md antialiased">
                        {t('hero.subtitle')}
                    </p>
                </div>

                {/* Description */}
                <div className="mt-6 max-w-3xl">
                    <p className="font-inter text-gray-200 text-base sm:text-lg font-light leading-[1.45] tracking-[0.02em] drop-shadow-md antialiased">
                        {t('hero.description')}
                    </p>
                </div>

                {/* CTA Button */}
                <div className="mt-10">
                    <a
                        href="#register"
                        className="inline-block bg-[#F9B233] text-white font-inter text-base sm:text-lg font-semibold px-8 py-4 rounded-lg shadow-2xl hover:bg-[#E6A32B] hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out border border-[#F9B233] hover:border-[#E6A32B] backdrop-blur-sm"
                    >
                        {t('hero.cta')}
                    </a>
                </div>
            </div>

            {/* Keep existing text shadow styling */}
            <style jsx>{`
                .text-shadow-lg {
                    text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.8);
                }
            `}</style>
        </section>
    );
}
