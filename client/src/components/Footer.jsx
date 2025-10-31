import React from "react";
import { Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-teal-700 text-white">
      {/* Banner Section */}
      <div className="relative w-full h-[70vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <img
          src="https://logiclead.in/assets/img/banking_logo/rechargeicon_20240803130432465829.jpg"
          alt="FASTag Recharge Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      </div>

      {/* Footer Content */}
      <div className="bg-teal-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Logo + Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src="https://logiclead.in/assets/img/banking_logo/logic_img2.png"
                  alt="Logiclead Logo"
                  className="w-36 h-auto object-contain"
                />
              </div>
              <p className="text-teal-100 leading-relaxed text-sm">
                Your trusted platform for quick and secure FASTag recharge.
                Making highway travel hassle-free for millions of users across
                India.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {["About Us", "Services", "FAQs", "Contact Support"].map(
                  (item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-teal-100 hover:text-white transition-colors flex items-center group"
                      >
                        <span className="mr-2 group-hover:mr-3 transition-all">
                          →
                        </span>
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <a
                      href="mailto:ops@logiclead.in"
                      className="text-teal-100 hover:text-white block"
                    >
                      ops@logiclead.in
                    </a>
                    <a
                      href="mailto:tech@logiclead.in"
                      className="text-teal-100 hover:text-white block mt-1"
                    >
                      tech@logiclead.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-teal-100 leading-relaxed">
                    Office No 15, Ground Floor, D-29, Sector 3, Noida, Gautam
                    Buddha Nagar, Uttar Pradesh, 201301.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-teal-600">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-teal-100 text-sm">
                © 2025 Logiclead. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="text-teal-100 hover:text-white text-sm font-medium"
                >
                  Terms & Conditions
                </a>
                <span className="text-teal-500">|</span>
                <a
                  href="#"
                  className="text-teal-100 hover:text-white text-sm font-medium"
                >
                  Privacy Policy
                </a>
                <span className="text-teal-500">|</span>
                <a
                  href="#"
                  className="text-teal-100 hover:text-white text-sm font-medium"
                >
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
