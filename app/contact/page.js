// app/contact/page.jsx
"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    const phoneNumber = "+911352555000";
    const whatsappNumber = "911352555000"; // WhatsApp format without '+'

    return (
        <section className="bg-white py-16 mt-[70px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Heading */}
                <div className="text-center mb-6 lg:mb-12">
                    <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#277A84]">
                        Contact<span className="text-[#F9B233]"> & Support</span> 
                    </h2>
                    <div className="mt-4 mx-auto h-1 w-20 sm:w-24 bg-[#F9B233] rounded"></div>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                    {/* Left Content */}
                    <div>
                        <h3 className="font-playfair text-xl font-semibold text-[#277A84] mb-4 t">
                            Get in Touch
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Have questions about the conference or how to get involved? Our
                            team is ready to assist you:
                        </p>

                        <ul className="space-y-4 text-gray-700 inline-block mx-auto lg:inline">
                            <li className="flex items-center justify-start gap-3">
                                <MapPin className="text-[#F9B233]" size={20} />
                                <span>
                                    Conference Secretariat, Dehradun, Uttarakhand
                                </span>
                            </li>
                            <li className="flex items-center justify-start gap-3">
                                <Mail className="text-[#F9B233]" size={20} />
                                <span>info@uttarakhandmodelvillage.org</span>
                            </li>
                            <li className="flex items-center justify-start gap-3">
                                <Phone className="text-[#F9B233]" size={20} />
                                <span>+91-135-2555000</span>
                            </li>
                        </ul>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Link
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg hover:bg-[#1ebe5d] transition"
                            >
                                <FaWhatsapp size={20} /> WhatsApp
                            </Link>
                            <Link
                                href={`tel:${phoneNumber}`}
                                className="flex items-center gap-2 bg-[#277A84] text-white px-5 py-3 rounded-lg hover:bg-[#1f5f67] transition"
                            >
                                <Phone size={20} /> Call Now
                            </Link>
                        </div>

                        {/* Quote */}
                        <blockquote className="mt-10 italic text-gray-600 border-l-4 border-[#F9B233] pl-4">
                            Our villages aren't just places on a map – they're the heart of
                            Uttarakhand's identity. This conference represents our commitment
                            to preserving that heart while giving it the strength to thrive in
                            the modern world.
                            <footer className="mt-2 text-sm text-gray-500">
                                – Village Pradhan, Pauri Garhwal
                            </footer>
                        </blockquote>
                    </div>

                    {/* Right Image (only on large screens) */}
                    <div className="hidden lg:block">
                        <Image
                            src="/Contact.png" // Replace with actual image path
                            alt="Contact"
                            width={600}
                            height={500}
                            className="rounded-xl shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
