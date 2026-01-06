'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import BookingPage from './components/BookingPage';
import RoomsPage from './components/RoomsPage';
import SettingsPage from './components/SettingsPage';

import GuestsPage from './components/GuestsPage';

export default function Dashboard() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'guests':
        return <GuestsPage />;
      case 'bookings':
        return <BookingPage />;
      case 'rooms':
        return <RoomsPage onNavigate={setActiveView} />;
      case 'settings':
        return <SettingsPage />;
      case 'dashboard':
      default:
        return (
          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                onClick={() => setActiveView('guests')}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <h2 className="text-gray-500">Guests</h2>
                <p className="text-3xl font-bold">1,250</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h2 className="text-gray-500">Rent</h2>
                <p className="text-3xl font-bold">$85</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h2 className="text-gray-500">Booked</h2>
                <p className="text-3xl font-bold">32</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h2 className="text-gray-500">Visits</h2>
                <p className="text-3xl font-bold">12K</p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white">
                <h2 className="text-xl font-bold text-gray-800">Recent Users</h2>
                <p className="text-sm text-gray-500 mt-1">Latest registered users in the system</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                            JD
                          </div>
                          <span className="ml-3 font-medium text-gray-900">John Doe</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">john@example.com</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold">
                            JS
                          </div>
                          <span className="ml-3 font-medium text-gray-900">Jane Smith</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">jane@example.com</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                          Booked
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold">
                            AB
                          </div>
                          <span className="ml-3 font-medium text-gray-900">Alex Brown</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">alex@example.com</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                          Vacated
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analytics Pie Chart Section */}
            <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-white">
                <h2 className="text-xl font-bold text-gray-800">Booking Analytics</h2>
                <p className="text-sm text-gray-500 mt-1">Distribution of booking statuses</p>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Pie Chart */}
                  <div className="flex justify-center">
                    <div className="relative w-64 h-64">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        {/* Confirmed - 45% (Blue) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="20"
                          strokeDasharray="113 283"
                          className="transition-all duration-300 hover:stroke-[22]"
                        />
                        {/* Pending - 30% (Yellow) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="20"
                          strokeDasharray="75.4 283"
                          strokeDashoffset="-113"
                          className="transition-all duration-300 hover:stroke-[22]"
                        />
                        {/* Cancelled - 25% (Red) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#EF4444"
                          strokeWidth="20"
                          strokeDasharray="62.8 283"
                          strokeDashoffset="-188.4"
                          className="transition-all duration-300 hover:stroke-[22]"
                        />
                        {/* Center circle for donut effect */}
                        <circle cx="50" cy="50" r="30" fill="white" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <p className="text-3xl font-bold text-gray-800">320</p>
                        <p className="text-sm text-gray-500">Total Bookings</p>
                      </div>
                    </div>
                  </div>

                  {/* Legend and Stats */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                        <div>
                          <p className="font-semibold text-gray-800">Confirmed</p>
                          <p className="text-sm text-gray-600">Active bookings</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">144</p>
                        <p className="text-sm text-gray-500">45%</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                        <div>
                          <p className="font-semibold text-gray-800">Pending</p>
                          <p className="text-sm text-gray-600">Awaiting confirmation</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-yellow-600">96</p>
                        <p className="text-sm text-gray-500">30%</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        <div>
                          <p className="font-semibold text-gray-800">Cancelled</p>
                          <p className="text-sm text-gray-600">Cancelled bookings</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-red-600">80</p>
                        <p className="text-sm text-gray-500">25%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem={activeView} onItemClick={setActiveView} />

      <div className="flex-1 ml-20 transition-all duration-300 ease-in-out">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent italic">LuxeStay</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors duration-200">
                <span className="text-gray-700 font-medium">Admin</span>
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold shadow-md">
                  A
                </div>
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 border-b border-gray-100">
                  <p className="font-semibold text-gray-800">Admin User</p>
                  <p className="text-sm text-gray-500">admin@hotel.com</p>
                </div>
                <div className="py-2">
                  <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-blue-50 transition-colors duration-150">
                    <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-700">Profile</span>
                  </a>
                  <button
                    onClick={() => setActiveView('settings')}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 transition-colors duration-150"
                  >
                    <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">Settings</span>
                  </button>
                  <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-blue-50 transition-colors duration-150">
                    <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Help</span>
                  </a>
                </div>
                <div className="border-t border-gray-100 py-2">
                  <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 transition-colors duration-150">
                    <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="text-red-600 font-medium">Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {renderContent()}
      </div>
    </div>
  );
}