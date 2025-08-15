"use client";

export default function Why() {
    return (
        <section className="relative w-full bg-white pt-16 sm:pt-20 scroll-mt-16 sm:scroll-mt-16" id="about">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <div>
                    <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#277A84] leading-snug text-center">
                        Why Uttarakhand needs <span className="text-[#F9B233]">Model Villages?</span>
                    </h2>
                    <div className="mt-6 h-1 w-20 bg-[#F9B233] rounded block mx-auto"></div>
                    <p className="mt-8 font-inter text-gray-700 text-lg leading-relaxed">
                        Uttarakhand's villages face unprecedented challenges that demand innovative solutions. 
                        Out-migration has left <span className="font-semibold text-[#277A84]">734 villages virtually abandoned</span>, 
                        with more than 10% of settlements in Pauri, Tehri, and Almora districts experiencing 
                        exodus-level migration since 2011.
                    </p>
                    <p className="mt-6 font-inter text-gray-700 text-lg leading-relaxed">
                        Healthcare access remains critical — over <span className="font-semibold text-[#277A84]">
                        80% of rural settlements have fewer than 500 residents</span>, with medical facilities 
                        often unreachable due to landslides and poor infrastructure. Meanwhile, tourist numbers surged 
                        <span className="font-semibold text-[#277A84]"> 30% between 2019-2022</span>, putting immense 
                        pressure on fragile ecosystems.
                    </p>
                </div>

                {/* Image */}
                <div className="relative w-full h-72 sm:h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="/Palayan.png"
                        alt="Why Uttarakhand Needs Model Villages"
                        className="w-full h-full object-cover duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
