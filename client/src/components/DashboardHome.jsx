import React, { useState } from "react";
import { Search, Wallet } from "lucide-react";

// Dashboard Home Page Component (After Login)
function DashboardHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvider, setSelectedProvider] = useState(null);

  const providers = [
    {
      id: 1,
      name: "Indian Highways Management",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/ihmcl.svg",
    },
    {
      id: 2,
      name: "IndusInd Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/indusind.svg",
    },
    {
      id: 3,
      name: "Bank of Baroda",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/bob.svg",
    },
    {
      id: 4,
      name: "Axis Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/axis.svg",
    },
    {
      id: 5,
      name: "IDFC FIRST Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/idfc.svg",
    },
    {
      id: 6,
      name: "HDFC Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/hdfc.svg",
    },
    {
      id: 7,
      name: "Kotak Mahindra Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/kotak.svg",
    },
    {
      id: 8,
      name: "Equitas",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/equitas.svg",
    },
    {
      id: 9,
      name: "IDBI Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/idbi.svg",
    },
    {
      id: 10,
      name: "IOB",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/iob.svg",
    },
    {
      id: 11,
      name: "Jammu and Kashmir Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/jkb.svg",
    },
    {
      id: 12,
      name: "Karnataka Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/kbl.svg",
    },
    {
      id: 13,
      name: "Paytm Payments Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/paytm.svg",
    },
    {
      id: 14,
      name: "State Bank of India",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/sbi.svg",
    },
    {
      id: 15,
      name: "Federal Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/federal.svg",
    },
    {
      id: 16,
      name: "ICICI Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/icici.svg",
    },
  ];

  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
    alert(`Selected: ${provider.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-cyan-400 to-cyan-300 px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">🏷️</div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              FASTag Recharge & Get Exciting Offers on Every Recharge!
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow">
              <Wallet className="w-5 h-5 text-gray-700" />
              <span className="font-semibold text-gray-800">₹0.00</span>
            </div>
            <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-lg font-semibold transition shadow-md">
              Add Money
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Bharat Connect Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="text-blue-600 text-2xl font-bold">▶</div>
            <div>
              <span className="text-orange-500 text-2xl font-bold">Bharat</span>
              <span className="text-blue-600 text-2xl font-bold">Connect</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Select your FasTag Providers
          </h2>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search Providers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 pr-12 border-2 border-gray-300 rounded-full focus:outline-none focus:border-teal-500 transition text-gray-700"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Provider Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredProviders.map((provider) => (
            <button
              key={provider.id}
              onClick={() => handleProviderClick(provider)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border-2 border-transparent hover:border-teal-500"
            >
              <div className="p-6 flex flex-col items-center justify-center space-y-3">
                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/80x80/e5e7eb/6b7280?text=${encodeURIComponent(
                        provider.name.slice(0, 2)
                      )}`;
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center line-clamp-2">
                  {provider.name}
                </p>
              </div>
            </button>
          ))}
        </div>

        {filteredProviders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No providers found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardHome;
