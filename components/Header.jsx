"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { t } = useTranslation();

    const isHome = pathname === "/";

    useEffect(() => {
        if (!isHome) {
            setScrolled(true);
            return;
        }

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight - 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white border-b border-gray-200 text-gray-800"
                    : "bg-transparent border-b border-transparent text-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-[70px]">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <img src="/Logo.png" alt="Model Villages Logo" className="h-[50px] w-auto" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <Link href="/" className="hover:text-[#F9B233] transition">{t('nav.home')}</Link>
                    <Link href="/#about" className="hover:text-[#F9B233] transition">{t('nav.about')}</Link>
                    <Link href="/#initiatives" className="hover:text-[#F9B233] transition">{t('nav.initiatives')}</Link>
                    <Link href="/#conference" className="hover:text-[#F9B233] transition">{t('nav.conference')}</Link>
                    <Link href="/contact" className="hover:text-[#F9B233] transition">{t('nav.contact')}</Link>
                </nav>

                {/* CTA + Language Toggle + Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <LanguageToggle scrolled={scrolled} />
                    <Link
                        href="/register"
                        className="hidden md:inline-block bg-[#F9B233] text-white px-4 py-2 rounded-lg hover:bg-[#E6A32B] transition"
                    >
                        {t('nav.register')}
                    </Link>
                    <button
                        className="md:hidden p-2 rounded-lg transition hover:bg-white/10"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Fullscreen Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between px-6 h-[70px] border-b border-gray-200">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                            <img src="/Logo.png" alt="Model Villages Logo" className="h-[50px] w-auto" />
                        </Link>
                        <button
                            className="p-2 rounded-lg hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={28} className="text-gray-800" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex flex-col items-center justify-center flex-1 gap-6 text-lg font-medium text-gray-800">
                        <Link href="/" className="hover:text-[#F9B233]" onClick={() => setMobileMenuOpen(false)}>{t('nav.home')}</Link>
                        <Link href="/#about" className="hover:text-[#F9B233]" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</Link>
                        <Link href="/#initiatives" className="hover:text-[#F9B233]" onClick={() => setMobileMenuOpen(false)}>{t('nav.initiatives')}</Link>
                        <Link href="/#conference" className="hover:text-[#F9B233]" onClick={() => setMobileMenuOpen(false)}>{t('nav.conference')}</Link>
                        <Link href="/contact" className="hover:text-[#F9B233]" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact')}</Link>
                        <Link
                            href="/register"
                            className="bg-[#F9B233] text-white px-6 py-3 rounded-lg hover:bg-[#E6A32B] transition"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t('nav.register')}
                        </Link>
                        {/* Mobile Language Toggle */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <div className="text-center mb-3">
                                <p className="text-sm font-medium text-gray-700">Language / भाषा</p>
                            </div>
                            <LanguageToggle scrolled={true} />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
