import React from "react";

// FASTag Provider Component
function FastagProvider() {
  const providers = [
    {
      id: 1,
      name: "Indian Highways Management Company Limited",
      displayName: "Indian Highways...",
      logo: "https://logiclead.in/assets/img/banking_logo/IHMCL-Logo.jpeg",
      color: "bg-blue-50",
    },
    {
      id: 2,
      name: "IndusInd Bank",
      displayName: "IndusInd Bank",
      logo: "https://logiclead.in/assets/img/banking_logo/7fb9c4ae317ff5a843b86d86042f6597.jpg",
      color: "bg-red-50",
    },
    {
      id: 3,
      name: "Bank of Baroda",
      displayName: "Bank of Baroda",
      logo: "https://logiclead.in/assets/img/banking_logo/eb55d100ee42369d2e984e3cb4758c76.jpg",
      color: "bg-orange-50",
    },
    {
      id: 4,
      name: "Axis Bank",
      displayName: "Axis Bank",
      logo: "https://logiclead.in/assets/img/banking_logo/76aabd7ec028d2927d5af281e82d9394.jpg",
      color: "bg-pink-50",
    },
    {
      id: 5,
      name: "IDFC FIRST Bank",
      displayName: "IDFC FIRST Bank",
      logo: "https://logiclead.in/assets/img/banking_logo/2dad745c5f2fdd1f341fd31ef4937a50.jpg",
      color: "bg-red-50",
    },
    {
      id: 6,
      name: "HDFC Bank",
      displayName: "HDFC Bank",
      logo: "https://logiclead.in/assets/img/banking_logo/3d0764bf519e0ae62a43f818f832ca11.jpg",
      color: "bg-blue-50",
    },
    {
      id: 7,
      name: "Kotak Mahindra Bank",
      displayName: "Kotak Mahindra...",
      logo: "https://logiclead.in/assets/img/banking_logo/3adb17ad584e31a26d7f1119beb26c86.jpg",
      color: "bg-red-50",
    },
    {
      id: 8,
      name: "Equitas Small Finance Bank",
      displayName: "Equitas",
      logo: "https://logiclead.in/assets/img/banking_logo/51c53153e4a1ab4b735c213e62d7733f.jpg",
      color: "bg-blue-50",
    },
    {
      id: 9,
      name: "IDBI Bank",
      displayName: "IDBI Bank",
      logo: "https://logiclead.in/assets/img/banking_logo/6efb93f54538ebaf6c5251bc7a42713c.jpg",
      color: "bg-green-50",
    },
    {
      id: 10,
      name: "Indian Overseas Bank",
      displayName: "IOB",
      logo: "https://logiclead.in/assets/img/banking_logo/97a2e9a37d151bf1729b96678a88e292.jpg",
      color: "bg-blue-50",
    },
    {
      id: 11,
      name: "Jammu and Kashmir Bank",
      displayName: "Jammu and Kashm...",
      logo: "https://logiclead.in/assets/img/banking_logo/55ba49c0871bbcfa6729799e4cdb466d.jpg",
      color: "bg-gray-50",
    },
    {
      id: 12,
      name: "Karnataka Bank",
      displayName: "Karnataka Bank",
      logo: "https://logiclead.in/assets/img/banking_logo/15.webp",
      color: "bg-purple-50",
    },
    {
      id: 13,
      name: "Paytm Payments Bank",
      displayName: "Paytm Payments...",
      logo: "https://logiclead.in/assets/img/banking_logo/8c6219ff367beac5f2730160a41aa897.jpg",
      color: "bg-blue-50",
    },
    {
      id: 14,
      name: "State Bank of India",
      displayName: "State Bank of I...",
      logo: "https://logiclead.in/assets/img/banking_logo/0986338cc1bd9659da9133bb4fc783a6.jpg",
      color: "bg-blue-50",
    },
    {
      id: 15,
      name: "Federal Bank",
      displayName: "Federal Bank",
      logo: "https://logiclead.in/assets/img/banking_logo/2a4242814a0f7cc956fc2d14c1c4af2c.jpg",
      color: "bg-orange-50",
    },
    {
      id: 16,
      name: "ICICI Bank",
      displayName: "ICICI Bank",
      logo: "https://logiclead.in/assets/img/banking_logo/13102943-icici-b9b38f77-216e-45f2-891b-edf7a7643433.webp",
      color: "bg-orange-50",
    },
    {
      id: 17,
      name: "UCO Bank",
      displayName: "UCO Bank",
      logo: "https://logiclead.in/assets/img/banking_logo/672b816d9405e17417c090fbb406ea6e.jpg",
      color: "bg-yellow-50",
    },
    {
      id: 18,
      name: "Airtel Payments Bank",
      displayName: "Airtel Payments...",
      logo: "https://logiclead.in/assets/img/banking_logo/1.webp",
      color: "bg-red-50",
    },
  ];

  const handleProviderClick = (provider) => {
    alert(`Selected: ${provider.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            FASTag Provider
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {providers.map((provider) => (
            <div
              key={provider.id}
              onClick={() => handleProviderClick(provider)}
              className="bg-white rounded-lg border-2 border-gray-200 hover:border-teal-500 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <div
                className={`${provider.color} p-4 flex items-center justify-center h-32 group-hover:scale-105 transition-transform duration-300`}
              >
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/120x80/e5e7eb/6b7280?text=${encodeURIComponent(
                      provider.displayName
                    )}`;
                  }}
                />
              </div>
              <div className="p-3 bg-white border-t border-gray-200">
                <p className="text-sm text-gray-700 text-center font-medium truncate">
                  {provider.displayName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FastagProvider;
