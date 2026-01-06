'use client';

import { useState } from 'react';

export default function SettingsPage() {
    const [hotelName, setHotelName] = useState('LuxeStay');
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');
    const [currency, setCurrency] = useState('INR');

    return (
        <div className="p-6">
            <div className="max-w-5xl mx-auto space-y-6">
                {/* Hotel Settings */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white">
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <h2 className="text-xl font-bold">Hotel Settings</h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-6">
                        <div>
                            <label htmlFor="hotelName" className="block text-sm font-semibold text-gray-700 mb-2">
                                Hotel Name
                            </label>
                            <input
                                type="text"
                                id="hotelName"
                                value={hotelName}
                                onChange={(e) => setHotelName(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-slate-500 focus:ring-4 focus:ring-slate-100 transition-all duration-300 outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="currency" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Currency
                                </label>
                                <select
                                    id="currency"
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-slate-500 focus:ring-4 focus:ring-slate-100 transition-all duration-300 outline-none cursor-pointer"
                                >
                                    <option value="INR">Indian Rupee (₹)</option>
                                    <option value="USD">US Dollar ($)</option>
                                    <option value="EUR">Euro (€)</option>
                                    <option value="GBP">British Pound (£)</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="language" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Language
                                </label>
                                <select
                                    id="language"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-slate-500 focus:ring-4 focus:ring-slate-100 transition-all duration-300 outline-none cursor-pointer"
                                >
                                    <option value="en">English</option>
                                    <option value="hi">Hindi</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <h2 className="text-xl font-bold">Notifications</h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Email Notifications</p>
                                    <p className="text-sm text-gray-500">Receive booking updates via email</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setEmailNotifications(!emailNotifications)}
                                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${emailNotifications ? 'bg-blue-600' : 'bg-gray-300'}`}
                            >
                                <span
                                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${emailNotifications ? 'translate-x-7' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">SMS Notifications</p>
                                    <p className="text-sm text-gray-500">Receive booking alerts via SMS</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSmsNotifications(!smsNotifications)}
                                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${smsNotifications ? 'bg-green-600' : 'bg-gray-300'}`}
                            >
                                <span
                                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${smsNotifications ? 'translate-x-7' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Appearance Settings */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                            <h2 className="text-xl font-bold">Appearance</h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                            <div className="flex items-center gap-4">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Dark Mode</p>
                                    <p className="text-sm text-gray-500">Enable dark theme</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${darkMode ? 'bg-purple-600' : 'bg-gray-300'}`}
                            >
                                <span
                                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${darkMode ? 'translate-x-7' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Security Settings */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <h2 className="text-xl font-bold">Security</h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group">
                            <div className="flex items-center gap-4">
                                <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors duration-200">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-gray-800">Change Password</p>
                                    <p className="text-sm text-gray-500">Update your account password</p>
                                </div>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors duration-200">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-gray-800">Two-Factor Authentication</p>
                                    <p className="text-sm text-gray-500">Add extra security to your account</p>
                                </div>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                        <div className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Save Changes
                        </div>
                    </button>
                    <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
