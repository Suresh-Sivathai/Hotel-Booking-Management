'use client';

import { useState } from 'react';

export default function BookingPage() {
    const [location, setLocation] = useState('mumbai');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);
    const [roomType, setRoomType] = useState('standard');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ location, checkIn, checkOut, guests, roomType });
        alert('Booking submitted successfully! Check console for details.');
    };

    return (
        <div className="p-6">
            {/* Page Header */}
            <div className="mb-8 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800">New Booking</h1>
                <p className="text-gray-600 mt-2">Create a new room reservation</p>
            </div>

            {/* Booking Form */}
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Form Header */}
                    <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white">
                        <h2 className="text-2xl font-bold">Reservation Details</h2>
                        <p className="text-slate-300 mt-1">Fill in the booking information below</p>
                    </div>

                    {/* Form Content */}
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* Location */}
                        <div className="space-y-2">
                            <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Location
                                </div>
                            </label>
                            <select
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none cursor-pointer hover:border-gray-300"
                            >
                                <option value="mumbai">Mumbai, India</option>
                                <option value="delhi">New Delhi, India</option>
                                <option value="bangalore">Bangalore, India</option>
                                <option value="goa">Goa, India</option>
                                <option value="jaipur">Jaipur, India</option>
                                <option value="chennai">Chennai, India</option>
                                <option value="kolkata">Kolkata, India</option>
                                <option value="hyderabad">Hyderabad, India</option>
                            </select>
                        </div>

                        {/* Date Selection Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Check-in */}
                            <div className="space-y-2">
                                <label htmlFor="checkIn" className="block text-sm font-semibold text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Check-in Date
                                    </div>
                                </label>
                                <input
                                    type="date"
                                    id="checkIn"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none hover:border-gray-300"
                                />
                            </div>

                            {/* Check-out */}
                            <div className="space-y-2">
                                <label htmlFor="checkOut" className="block text-sm font-semibold text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Check-out Date
                                    </div>
                                </label>
                                <input
                                    type="date"
                                    id="checkOut"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 outline-none hover:border-gray-300"
                                />
                            </div>
                        </div>

                        {/* Guests and Room Type Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Guests */}
                            <div className="space-y-2">
                                <label htmlFor="guests" className="block text-sm font-semibold text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Number of Guests
                                    </div>
                                </label>
                                <select
                                    id="guests"
                                    value={guests}
                                    onChange={(e) => setGuests(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none cursor-pointer hover:border-gray-300"
                                >
                                    {[1, 2, 3, 4, 5, 6].map((num) => (
                                        <option key={num} value={num}>
                                            {num} {num === 1 ? 'Guest' : 'Guests'}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Room Type */}
                            <div className="space-y-2">
                                <label htmlFor="roomType" className="block text-sm font-semibold text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        Room Type
                                    </div>
                                </label>
                                <select
                                    id="roomType"
                                    value={roomType}
                                    onChange={(e) => setRoomType(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none cursor-pointer hover:border-gray-300"
                                >
                                    <option value="standard">Standard Room - ₹4,999/night</option>
                                    <option value="deluxe">Deluxe Room - ₹7,499/night</option>
                                    <option value="suite">Suite - ₹12,499/night</option>
                                    <option value="penthouse">Penthouse - ₹24,999/night</option>
                                </select>
                            </div>
                        </div>

                        {/* Amenities Section */}
                        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                Included Amenities
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { name: 'Free WiFi', icon: '📶' },
                                    { name: 'Breakfast', icon: '🍳' },
                                    { name: 'Pool Access', icon: '🏊' },
                                    { name: 'Gym', icon: '💪' },
                                    { name: 'Spa', icon: '💆' },
                                    { name: 'Room Service', icon: '🛎️' },
                                    { name: 'Parking', icon: '🅿️' },
                                    { name: 'Concierge', icon: '👔' },
                                ].map((amenity) => (
                                    <div key={amenity.name} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                                        <span className="text-xl">{amenity.icon}</span>
                                        <span className="text-sm font-medium text-gray-700">{amenity.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Confirm Booking
                                </div>
                            </button>
                            <button
                                type="button"
                                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
