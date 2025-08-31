"use client";
import { useState } from "react";
import { Mic, Users, DollarSign, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";

export default function Registration() {
    const { t } = useTranslation();

    const registrationData = [
        {
            title: t("register.speakers.title"),
            icon: <Mic className="w-8 h-8 text-[#277A84]" />,
            description: t("register.speakers.description"),
        },
        {
            title: t("register.partners.title"),
            icon: <Users className="w-8 h-8 text-[#277A84]" />,
            description: t("register.partners.description"),
        },
        {
            title: t("register.investors.title"),
            icon: <DollarSign className="w-8 h-8 text-[#277A84]" />,
            description: t("register.investors.description"),
        },
    ];

    const whatsappMessage = encodeURIComponent(t("register.whatsappMessage"));

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        village: "",
        email: "",
        phone: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.village || !formData.email || !formData.phone) {
            toast.error("Please fill in all fields.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(
                "https://api.sheety.co/24921b6a05cd1a8d9a41360acd3a9af3/modelVillageInitiative/sheet1", 
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        sheet1: {   
                            name: formData.name,
                            village: formData.village,
                            email: formData.email,
                            phone: formData.phone,
                        },
                    }),
                }
            );

            if (res.ok) {
                toast.success("Registration submitted for approval!");
                setFormData({ name: "", village: "", email: "", phone: "" });
                setShowModal(false);
            } else {
                toast.error("Something went wrong. Try again later.");
            }
        } catch {
            toast.error("Error submitting registration.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <section className="bg-white py-12 md:py-16 px-6 sm:px-10 mt-[70px]">
            <Toaster position="top-right" />
            <div className="max-w-7xl mx-auto text-center">
                {/* ORIGINAL CONTENT */}
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#277A84]">
                    {t("register.title")} &{" "}
                    <span className="text-[#F9B233]">{t("register.participation")}</span>
                </h2>
                <div className="mt-4 h-1 w-24 bg-[#F9B233] rounded mx-auto"></div>

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

                {/* EXTRA INFO + BUTTONS */}
                <p className="mt-12 text-gray-700 max-w-2xl mx-auto font-inter">
                    {t('register.pradhanNote')}

                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* Pradhan Registration */}
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#277A84] text-white px-8 py-4 rounded-lg shadow-md hover:bg-[#1f5f65] transition-all duration-300 w-full sm:w-auto cursor-pointer"
                    >
                        {t('register.pradhanButton')}
                    </button>

                    {/* Normal Registration */}
                    <a
                        href={`https://wa.me/919811431604?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F9B233] text-white text-lg font-medium px-8 py-4 rounded-lg shadow-md hover:bg-[#E6A32B] transition-all duration-300 w-full sm:w-auto text-center cusror-pointer"
                    >
                          {t('register.normalButton')}
                    </a>
                </div>
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <h3 className="text-xl font-semibold text-[#277A84] font-playfair mb-4 text-center">
                            Village Pradhan Registration
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9B233] outline-none"
                            />
                            <input
                                type="text"
                                name="village"
                                placeholder="Village / Address"
                                value={formData.village}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9B233] outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9B233] outline-none"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9B233] outline-none"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#277A84] text-white py-3 rounded-lg font-medium hover:bg-[#1f5f65] transition cursor-pointer"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
