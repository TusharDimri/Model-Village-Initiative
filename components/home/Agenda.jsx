"use client";

export default function Agenda() {
    const agenda = [
        {
            day: "Day 1: Vision, Workshops & Collaboration",
            date: "November 28, 2025",
            description:
                "The inauguration ceremony will present our vision of Model Villages based on the Green Circular Economy, followed by keynote addresses from policy leaders and sustainable development experts. Investors and technology partners will be introduced, leading into hands-on workshops covering earthquake-proof construction, sustainable tourism models, and bio-energy solutions. Breakout sessions will facilitate collaborative opportunities, alongside technology showcases of IT and data-center solutions."
        },
        {
            day: "Day 2: Interactive Sessions & Commitment",
            date: "November 29, 2025",
            description:
                "Focused dialogues between village leaders, investors, and technology providers will aim to develop concrete implementation plans. Panel discussions will highlight successful rural transformation case studies from around the world. The conference will conclude with a plenary session on implementing the Green Circular Economy, a formal signing ceremony to onboard 50 villages and establish village-level limited companies, and finalization of investment commitments and technology partnership agreements."
        }
    ];

    return (
        <section className="bg-white pt-12 sm:pt-16 scroll-mt-12 sm:scroll-mt-16" id="conference">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Heading */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#277A84] leading-tight">
                        Conference Agenda:{" "}
                        <span className="text-[#F9B233] block sm:inline mt-2 sm:mt-0">
                            Two Days of Transformation
                        </span>
                    </h2>
                    <div className="mt-6 mx-auto h-1 w-20 sm:w-24 bg-[#F9B233] rounded"></div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line - Hidden on small screens, visible on larger screens */}
                    <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#F9B233]/40 h-full"></div>

                    <div className="space-y-8 sm:space-y-16">
                        {agenda.map((item, idx) => (
                            <div key={idx}>
                                {/* Mobile Layout */}
                                <div className="block sm:hidden">
                                    <div className="flex items-start gap-4">
                                        {/* Mobile Marker */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#F9B233] text-white font-playfair font-semibold text-base rounded-full shadow-lg border-3 border-white">
                                            {idx + 1}
                                        </div>
                                        
                                        {/* Mobile Content */}
                                        <div className="flex-1 bg-[#F9B233]/5 p-4 rounded-lg shadow-sm border border-[#F9B233]/30">
                                            <h3 className="font-playfair text-lg font-semibold text-[#277A84] leading-tight">
                                                {item.day}
                                            </h3>
                                            <p className="text-sm font-inter text-gray-500 mt-1 mb-3">
                                                {item.date}
                                            </p>
                                            <p className="font-inter text-sm text-gray-700 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop/Tablet Layout */}
                                <div className="hidden sm:block">
                                    <div
                                        className={`relative flex items-center gap-8 ${
                                            idx % 2 === 0 ? "flex-row-reverse" : ""
                                        }`}
                                    >
                                        {/* Desktop Marker */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-[#F9B233] text-white font-playfair font-semibold text-lg rounded-full shadow-lg border-4 border-white z-10">
                                            {idx + 1}
                                        </div>

                                        {/* Desktop Content */}
                                        <div className="bg-[#F9B233]/5 p-6 rounded-xl shadow-md border border-[#F9B233]/30 flex-1 max-w-[45%]">
                                            <h3 className="font-playfair text-xl md:text-2xl text-[#277A84] font-semibold leading-tight">
                                                {item.day}
                                            </h3>
                                            <p className="text-sm font-inter text-gray-500 mt-2">
                                                {item.date}
                                            </p>
                                            <p className="mt-4 font-inter text-gray-700 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}