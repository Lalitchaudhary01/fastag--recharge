import React, { useState } from "react";

function Home() {
  const [vehicleNumber, setVehicleNumber] = useState("");

  const handleProceed = () => {
    if (vehicleNumber.trim()) {
      alert(`Processing recharge for vehicle: ${vehicleNumber}`);
    } else {
      alert("Please enter a vehicle number");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              FASTag Recharge Online at Logiclead
            </h1>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">Multiple Payment Option</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">
                  Multiple Discounts & Offers for FASTag
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">24×7 Customer Support</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-teal-700 text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">FASTag Recharge</h2>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400 font-bold">Bharat</span>
                <span className="text-sm">Connect</span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Enter vehicle number"
                  value={vehicleNumber}
                  onChange={(e) =>
                    setVehicleNumber(e.target.value.toUpperCase())
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition text-gray-700"
                />
              </div>

              <button
                onClick={handleProceed}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
              >
                Proceed
              </button>

              <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                <span className="text-yellow-500">⚡</span>
                <span>Get the best deals on FASTag Recharge</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-64 mt-12 overflow-hidden relative">
        {/* Banner Image */}
        <img
          src="https://logiclead.in/assets/img/Website%20Banner%204.png"
          alt="Logiclead Banner"
          className="w-full h-full object-cover"
        />

        {/* Optional Overlay for slight dark blur */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>
    </div>
  );
}
export default Home;
