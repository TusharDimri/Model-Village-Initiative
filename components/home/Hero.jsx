"use client";

export default function Hero() {
    return (
        <section className="relative w-full h-[100vh]">
            {/* Background Images */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/hero-mobile.png')`,
                }}
            ></div>
            <div
                className="hidden sm:block absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/hero-tablet.png')`,
                }}
            ></div>
            <div
                className="hidden lg:block absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/hero-laptop.png')`,
                }}
            ></div>

            {/* Softer gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50"></div>

            {/* Softer side vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
                {/* Main Heading */}
                <h1 className="font-playfair text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal tracking-wide leading-[1.35] max-w-6xl drop-shadow-lg text-shadow-lg antialiased">
                    Join us on{" "}
                    {/* <span className="text-[#004C54] font-semibold drop-shadow-sm"> */}
                    <span className="text-[#F9B233] font-semibold drop-shadow-sm">
                        28-29 November 2025
                    </span>{" "}
                    in Dehradun as we unite investors, technology partners, and village
                    leaders to create sustainable model villages based on a{" "}
                    <span className="text-[#F9B233] font-semibold">
                        Green Circular Economy
                    </span>
                </h1>

                {/* Subtitle */}
                <div className="mt-8 max-w-4xl">
                    <p className="font-inter text-gray-100 text-lg sm:text-xl lg:text-2xl font-light leading-[1.45] tracking-[0.02em] drop-shadow-md antialiased">
                        <span className="text-[#F9B233] font-medium drop-shadow-sm">
                            Together We Can and We Will
                        </span>{" "}
                        transform Uttarakhand's rural landscape
                    </p>
                </div>

                {/* CTA Button */}
                {/* <div className="mt-10">
                    <a
                        href="#register"
                        className="inline-block bg-[#F9B233] text-white font-inter text-base sm:text-lg font-semibold px-8 py-4 rounded-lg shadow-2xl hover:bg-[#E6A32B] hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out border border-[#F9B233] hover:border-[#E6A32B] backdrop-blur-sm"
                    >
                        Register Now
                    </a>
                </div> */}
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
