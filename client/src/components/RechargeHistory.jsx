import React, { useState } from "react";
import { Search, Calendar } from "lucide-react";

function RechargeHistory() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data - Replace with actual API call
  const [rechargeData, setRechargeData] = useState([
    {
      srNo: 1,
      txnId: "TXN123456789",
      customerName: "Rahul Kumar",
      amount: 500,
      discount: 25,
      vehicleNo: "DL 01 AB 1234",
      createdAt: "2025-10-28 10:30 AM",
      status: "Success",
    },
    {
      srNo: 2,
      txnId: "TXN987654321",
      customerName: "Priya Sharma",
      amount: 1000,
      discount: 50,
      vehicleNo: "MH 12 CD 5678",
      createdAt: "2025-10-27 02:15 PM",
      status: "Success",
    },
    {
      srNo: 3,
      txnId: "TXN456789123",
      customerName: "Amit Singh",
      amount: 300,
      discount: 15,
      vehicleNo: "UP 16 EF 9012",
      createdAt: "2025-10-26 09:45 AM",
      status: "Pending",
    },
    {
      srNo: 4,
      txnId: "TXN789123456",
      customerName: "Sneha Patel",
      amount: 750,
      discount: 37.5,
      vehicleNo: "GJ 01 GH 3456",
      createdAt: "2025-10-25 05:20 PM",
      status: "Failed",
    },
  ]);

  const handleSearch = () => {
    console.log("Searching with:", { fromDate, toDate, searchQuery });
    // Add your search logic here
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "success":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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
            <div className="text-teal-700 text-3xl">↻</div>
            <h2 className="text-3xl font-bold text-gray-800">
              Recharge History
            </h2>
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
                    TxnID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Customer Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Discount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Vehicle No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Created At
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {rechargeData.length > 0 ? (
                  rechargeData.map((record) => (
                    <tr
                      key={record.srNo}
                      className="hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {record.srNo}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-mono">
                        {record.txnId}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {record.customerName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-semibold">
                        ₹{record.amount}
                      </td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                        ₹{record.discount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-mono">
                        {record.vehicleNo}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {record.createdAt}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            record.status
                          )}`}
                        >
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="8"
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
      </div>
    </div>
  );
}

export default RechargeHistory;
