import React, { useState } from "react";
import { Search, Wallet } from "lucide-react";

function WalletHistory() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Sample data - Replace with actual API call
  const [walletData, setWalletData] = useState([
    {
      srNo: 1,
      service: "FASTag Recharge",
      transactionId: "WAL123456789",
      amount: -500,
      createdDtTm: "2025-10-28 10:30 AM",
    },
    {
      srNo: 2,
      service: "Add Money",
      transactionId: "WAL987654321",
      amount: 1000,
      createdDtTm: "2025-10-27 02:15 PM",
    },
    {
      srNo: 3,
      service: "FASTag Recharge",
      transactionId: "WAL456789123",
      amount: -300,
      createdDtTm: "2025-10-26 09:45 AM",
    },
    {
      srNo: 4,
      service: "Add Money",
      transactionId: "WAL789123456",
      amount: 2000,
      createdDtTm: "2025-10-25 05:20 PM",
    },
    {
      srNo: 5,
      service: "FASTag Recharge",
      transactionId: "WAL321654987",
      amount: -750,
      createdDtTm: "2025-10-24 11:00 AM",
    },
    {
      srNo: 6,
      service: "Refund",
      transactionId: "WAL654987321",
      amount: 500,
      createdDtTm: "2025-10-23 03:45 PM",
    },
  ]);

  const handleSearch = () => {
    console.log("Searching with:", { fromDate, toDate });
    // Add your search logic here
  };

  const getAmountColor = (amount) => {
    return amount < 0 ? "text-red-600" : "text-green-600";
  };

  const formatAmount = (amount) => {
    const sign = amount < 0 ? "-" : "+";
    return `${sign} ₹${Math.abs(amount)}`;
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
        {/* Header with Bharat Connect */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="text-teal-700 text-3xl">💰</div>
            <h2 className="text-3xl font-bold text-gray-800">Wallet History</h2>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-blue-600 text-xl font-bold">▶</div>
            <div>
              <span className="text-orange-500 text-xl font-bold">Bharat</span>
              <span className="text-blue-600 text-xl font-bold">Connect</span>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* From Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  placeholder="Select From Date"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition"
                />
              </div>
            </div>

            {/* To Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  placeholder="Select To Date"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Sr.No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Service
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Transaction ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    CreatedDtTm
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {walletData.length > 0 ? (
                  walletData.map((record) => (
                    <tr
                      key={record.srNo}
                      className="hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {record.srNo}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <div className="flex items-center space-x-2">
                          <Wallet className="w-4 h-4 text-teal-600" />
                          <span>{record.service}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-mono">
                        {record.transactionId}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm font-bold ${getAmountColor(
                          record.amount
                        )}`}
                      >
                        {formatAmount(record.amount)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {record.createdDtTm}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Card */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Credit</p>
                <p className="text-2xl font-bold text-green-600">
                  + ₹
                  {walletData
                    .filter((t) => t.amount > 0)
                    .reduce((sum, t) => sum + t.amount, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">↑</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Debit</p>
                <p className="text-2xl font-bold text-red-600">
                  - ₹
                  {Math.abs(
                    walletData
                      .filter((t) => t.amount < 0)
                      .reduce((sum, t) => sum + t.amount, 0)
                  )}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">↓</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Net Balance</p>
                <p className="text-2xl font-bold text-teal-600">
                  ₹{walletData.reduce((sum, t) => sum + t.amount, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Wallet className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletHistory;
