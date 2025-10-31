import React, { useState } from "react";
import { Wallet, Menu, X, User } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="bg-teal-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img
                src="https://logiclead.in/assets/img/banking_logo/logic_img2.png"
                alt="logo"
                className="h-10 w-auto"
              />
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-teal-600 hover:bg-teal-800 rounded-lg transition">
                <Wallet className="w-5 h-5" />
              </button>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg hover:bg-teal-600 transition"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>

              <div className="hidden md:flex">
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition"
                >
                  <User className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-teal-800 border-t border-teal-600">
            <div className="px-4 py-3 space-y-3">
              <button
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition"
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {isLoginOpen && (
        <div
          onClick={() => setIsLoginOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-xl w-96 max-w-[90%] p-6 relative"
          >
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

            <label className="block text-sm mb-1 text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2 rounded-lg font-medium transition">
              Login
            </button>

            <div className="mt-4 flex items-center space-x-2">
              <input
                type="checkbox"
                id="offers"
                className="w-4 h-4 text-teal-600"
              />
              <label htmlFor="offers" className="text-sm text-gray-700">
                Keep me posted about sales and offers
              </label>
            </div>

            <p className="text-xs text-gray-500 mt-3 text-center">
              By proceeding, I accept the{" "}
              <a href="#" className="text-teal-700 hover:underline">
                T&C
              </a>{" "}
              and{" "}
              <a href="#" className="text-teal-700 hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            <p className="text-xs text-gray-400 text-center mt-2">
              🔒 Secured by Logiclead
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
