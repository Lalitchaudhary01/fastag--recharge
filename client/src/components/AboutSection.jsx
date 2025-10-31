import React from "react";

function AboutSection() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Us
            </h2>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Welcome to{" "}
                <span className="font-semibold text-gray-900">Logiclead</span>,
                your trusted platform for FASTag recharge. We make it easy for
                vehicle owners to recharge their FASTag quickly and securely
                from anywhere.
              </p>

              <p>
                Our goal is to save your time at toll plazas by providing a
                smooth recharge experience with multiple payment options. With
                reliable service, exciting offers, and dedicated support, we are
                here to make your travel easier and more convenient.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://logiclead.in/assets/img/banking_logo/mactc8ig_fastag_625x300_17_February_25.jpg"
                alt="FASTag Card"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
