'use client';

import { useState, useEffect } from 'react';
import { db } from '../firebaseconfig';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';

interface Booking {
    id: string;
    location: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    roomType: string;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    createdAt: any;
}

export default function BookingPage() {
    const [location, setLocation] = useState('mumbai');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);
    const [roomType, setRoomType] = useState('standard');
    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const [guestPhone, setGuestPhone] = useState('');

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    // Fetch bookings from Firebase
    const fetchBookings = async () => {
        try {
            const bookingsQuery = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(bookingsQuery);
            const bookingsData: Booking[] = [];
            querySnapshot.forEach((doc) => {
                bookingsData.push({ id: doc.id, ...doc.data() } as Booking);
            });
            setBookings(bookingsData);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!guestName || !guestEmail || !guestPhone || !checkIn || !checkOut) {
            setMessage({ text: 'Please fill in all required fields!', type: 'error' });
            setTimeout(() => setMessage({ text: '', type: '' }), 3000);
            return;
        }

        setLoading(true);

        try {
            // Add booking to Firebase
            await addDoc(collection(db, 'bookings'), {
                location,
                checkIn,
                checkOut,
                guests,
                roomType,
                guestName,
                guestEmail,
                guestPhone,
                createdAt: serverTimestamp()
            });

            setMessage({ text: '✅ Booking saved successfully!', type: 'success' });

            // Reset form
            setLocation('mumbai');
            setCheckIn('');
            setCheckOut('');
            setGuests(1);
            setRoomType('standard');
            setGuestName('');
            setGuestEmail('');
            setGuestPhone('');

            // Refresh bookings list
            fetchBookings();

            setTimeout(() => setMessage({ text: '', type: '' }), 3000);
        } catch (error) {
            console.error('Error saving booking:', error);
            setMessage({ text: '❌ Error saving booking. Please try again.', type: 'error' });
            setTimeout(() => setMessage({ text: '', type: '' }), 3000);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (bookingId: string) => {
        if (!confirm('Are you sure you want to delete this booking?')) return;

        try {
            await deleteDoc(doc(db, 'bookings', bookingId));
            setMessage({ text: '🗑️ Booking deleted successfully!', type: 'success' });
            fetchBookings();
            setTimeout(() => setMessage({ text: '', type: '' }), 3000);
        } catch (error) {
            console.error('Error deleting booking:', error);
            setMessage({ text: '❌ Error deleting booking.', type: 'error' });
            setTimeout(() => setMessage({ text: '', type: '' }), 3000);
        }
    };

    const getRoomPrice = (type: string) => {
        const prices: { [key: string]: string } = {
            standard: '₹4,999',
            deluxe: '₹7,499',
            suite: '₹12,499',
            penthouse: '₹24,999'
        };
        return prices[type] || '₹0';
    };

    return (
        <div className="p-6">
            {/* Message Alert */}
            {message.text && (
                <div className={`mb-6 max-w-5xl mx-auto p-4 rounded-xl shadow-lg ${message.type === 'success'
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}>
                    <p className="font-semibold text-center">{message.text}</p>
                </div>
            )}

            {/* Page Header */}
            <div className="mb-8 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800">New Booking</h1>
                <p className="text-gray-600 mt-2">Create a new room reservation</p>
            </div>

            {/* Booking Form */}
            <div className="max-w-5xl mx-auto mb-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Form Header */}
                    <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white">
                        <h2 className="text-2xl font-bold">Reservation Details</h2>
                        <p className="text-slate-300 mt-1">Fill in the booking information below</p>
                    </div>

                    {/* Form Content */}
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* Guest Information */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="guestName" className="block text-sm font-semibold text-gray-700">
                                    Guest Name *
                                </label>
                                <input
                                    type="text"
                                    id="guestName"
                                    value={guestName}
                                    onChange={(e) => setGuestName(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none hover:border-gray-300"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="guestEmail" className="block text-sm font-semibold text-gray-700">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="guestEmail"
                                    value={guestEmail}
                                    onChange={(e) => setGuestEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none hover:border-gray-300"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="guestPhone" className="block text-sm font-semibold text-gray-700">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="guestPhone"
                                    value={guestPhone}
                                    onChange={(e) => setGuestPhone(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none hover:border-gray-300"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                        </div>

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
                                    min={new Date().toISOString().split('T')[0]}
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
                                    min={checkIn || new Date().toISOString().split('T')[0]}
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

                        
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {loading ? 'Saving...' : 'Confirm Booking'}
                                </div>
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setLocation('mumbai');
                                    setCheckIn('');
                                    setCheckOut('');
                                    setGuests(1);
                                    setRoomType('standard');
                                    setGuestName('');
                                    setGuestEmail('');
                                    setGuestPhone('');
                                }}
                                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Bookings List */}
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white">
                        <h2 className="text-2xl font-bold">All Bookings ({bookings.length})</h2>
                        <p className="text-slate-300 mt-1">View and manage all reservations</p>
                    </div>

                    <div className="p-8">
                        {bookings.length === 0 ? (
                            <div className="text-center py-12 text-gray-500">
                                <p className="text-xl">📭 No bookings yet. Create your first booking!</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Guest</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Contact</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Check-in</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Check-out</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Room</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Guests</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {bookings.map((booking) => (
                                            <tr key={booking.id} className="hover:bg-gray-50 transition">
                                                <td className="px-4 py-4 text-sm text-gray-800 font-medium">{booking.guestName}</td>
                                                <td className="px-4 py-4 text-sm text-gray-600">
                                                    <div>{booking.guestEmail}</div>
                                                    <div className="text-xs text-gray-500">{booking.guestPhone}</div>
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-600 capitalize">{booking.location}</td>
                                                <td className="px-4 py-4 text-sm text-gray-600">{booking.checkIn}</td>
                                                <td className="px-4 py-4 text-sm text-gray-600">{booking.checkOut}</td>
                                                <td className="px-4 py-4 text-sm">
                                                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold capitalize">
                                                        {booking.roomType}
                                                    </span>
                                                    <div className="text-xs text-gray-500 mt-1">{getRoomPrice(booking.roomType)}/night</div>
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-600">{booking.guests}</td>
                                                <td className="px-4 py-4">
                                                    <button
                                                        onClick={() => handleDelete(booking.id)}
                                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition transform hover:scale-105"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}