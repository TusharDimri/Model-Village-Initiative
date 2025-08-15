// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & About */}
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                        <Link href="/">
                            <img src="/Logo.png" alt="Model Villages Logo" className="h-10 w-auto" />
                        </Link>
                    </div>
                    <p className="mt-4 text-gray-600 text-sm">
                        Transforming Uttarakhand&apos;s rural landscape through sustainable
                        development and green circular economy initiatives.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex justify-center text-center">
                    <div>
                        <h3 className="text-lg font-semibold text-[#277A84]">Quick Links</h3>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>
                                <Link href="/#about" className="hover:text-[#F9B233]">About Us</Link>
                            </li>
                            <li>
                                <Link href="/#conference" className="hover:text-[#F9B233]">Conference</Link>
                            </li>
                            <li>
                                <Link href="/#initiatives" className="hover:text-[#F9B233]">Initiatives</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#F9B233]">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contact */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-[#277A84]">Contact</h3>
                    <p className="mt-4 text-gray-700 text-sm">
                        Email: info@uttarakhandmodelvillage.org<br />
                        Phone: +91-135-2555000<br />
                        Address: Conference Secretariat, Dehradun, Uttarakhand
                    </p>
                </div>

                {/* Join Us */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-[#277A84]">Join Us</h3>
                    <p className="mt-4 text-gray-700 text-sm">
                        Join us in shaping our initiative in a way that will transform Uttarakhand&apos;s rural landscape.
                    </p>

                    <Link
                        href="/register"
                        className="bg-[#F9B233] text-white px-2 py-2 rounded-lg hover:bg-[#E6A32B] transition block mx-auto w-[80px] text-center mt-4 cursor-pointer"
                    >
                        Register
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Model Villages Initiative. All rights reserved.</p>
                    {/* Uncomment if needed */}
                    {/* <div className="flex gap-4 mt-2 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-[#004C54]">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#004C54]">Terms of Service</Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
