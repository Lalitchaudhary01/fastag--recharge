import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is FASTag?",
      answer:
        "FASTag is an electronic toll collection system in India, operated by the National Highway Authority of India (NHAI). It uses Radio Frequency Identification (RFID) technology for making toll payments directly from the prepaid or savings account linked to it.",
    },
    {
      question: "How can I recharge my FASTag on Logiclead?",
      answer:
        "You can easily recharge your FASTag on Logiclead by entering your vehicle number, selecting your FASTag provider, choosing the recharge amount, and completing the payment using your preferred payment method. The process is quick and secure.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept multiple payment methods including Credit Cards, Debit Cards, Net Banking, UPI, and popular digital wallets like Paytm, PhonePe, and Google Pay. All transactions are secured with bank-level encryption.",
    },
    {
      question: "Is there any minimum recharge amount?",
      answer:
        "The minimum recharge amount varies by FASTag provider, but typically ranges from ₹100 to ₹200. You can check the specific minimum amount for your provider during the recharge process.",
    },
    {
      question: "How long does it take for the recharge to reflect?",
      answer:
        "FASTag recharges are usually reflected instantly or within 2-3 hours. In rare cases, it may take up to 24 hours. If your recharge doesn't reflect within this time, please contact our customer support.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-teal-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-teal-600" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
              FASTAG RECHARGE THROUGH LOGICLEAD
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
