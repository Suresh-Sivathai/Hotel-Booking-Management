'use client';

import React, { useState } from 'react';

// Reuse Room interface for consistency, though ideally shared
interface Room {
    id: string;
    number: string;
    type: 'Standard' | 'Deluxe' | 'Suite' | 'Penthouse';
    price: number;
    status: 'Available' | 'Occupied' | 'Maintenance';
    image: string;
    description: string;
    amenities: string[];
}

export default function UserPanel() {
    // Extended mock data for user view
    const [rooms] = useState<Room[]>([
        {
            id: '1',
            number: '101',
            type: 'Standard',
            price: 100,
            status: 'Available',
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
            description: "Cozy standard room with city view, perfect for solo travelers or couples.",
            amenities: ["Free Wi-Fi", "TV", "Air Conditioning"]
        },
        {
            id: '3',
            number: '201',
            type: 'Deluxe',
            price: 150,
            status: 'Available',
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
            description: "Spacious deluxe room featuring a king-size bed and modern workspace.",
            amenities: ["Free Wi-Fi", "TV", "AC", "Mini Bar", "Work Desk"]
        },
        {
            id: '4',
            number: '205',
            type: 'Deluxe',
            price: 150,
            status: 'Available',
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
            description: "Elegant room with balcony and premium bedding for a restful stay.",
            amenities: ["Free Wi-Fi", "TV", "AC", "Balcony"]
        },
        {
            id: '5',
            number: '301',
            type: 'Suite',
            price: 250,
            status: 'Available',
            image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
            description: "Luxury suite with separate living area, kitchenette, and panoramic views.",
            amenities: ["Free Wi-Fi", "Smart TV", "AC", "Kitchenette", "Living Area", "Bathtub"]
        }
    ]);

    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const [bookingStep, setBookingStep] = useState<'details' | 'confirm'>('details');
    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const handleBookClick = (room: Room) => {
        setSelectedRoom(room);
        setBookingStep('details');
    };

    const handleConfirmBooking = (e: React.FormEvent) => {
        e.preventDefault();
        setBookingStep('confirm');
        // efficient mock booking process
        setTimeout(() => {
            alert(`Booking Confirmed for ${guestName}!\nRoom: ${selectedRoom?.type} (${selectedRoom?.number})\nDates: ${checkIn} to ${checkOut}`);
            setSelectedRoom(null);
            setGuestName('');
            setGuestEmail('');
            setCheckIn('');
            setCheckOut('');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600")' }}
                ></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 md:py-32">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Experience Luxury <br /> Like Never Before
                    </h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                        Discover our handpicked selection of premium rooms and suites. Book your perfect stay today.
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white p-4 rounded-lg shadow-xl max-w-4xl flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Check In</label>
                            <input type="date" className="w-full p-2 border border-slate-200 rounded text-slate-800 focus:outline-indigo-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Check Out</label>
                            <input type="date" className="w-full p-2 border border-slate-200 rounded text-slate-800 focus:outline-indigo-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Guests</label>
                            <select className="w-full p-2 border border-slate-200 rounded text-slate-800 focus:outline-indigo-500 bg-white">
                                <option>1 Guest</option>
                                <option>2 Guests</option>
                                <option>3 Guests</option>
                                <option>4+ Guests</option>
                            </select>
                        </div>
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Rooms */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Available Rooms</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room) => (
                        <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-64 overflow-hidden relative group">
                                <img
                                    src={room.image}
                                    alt={room.type}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-indigo-900 font-bold text-sm">
                                    ${room.price}/night
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-slate-900">{room.type}</h3>
                                    <span className="text-slate-500 text-sm">{room.status}</span>
                                </div>
                                <p className="text-slate-600 mb-4 text-sm line-clamp-2">{room.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {room.amenities.map((amenity, idx) => (
                                        <span key={idx} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md">
                                            {amenity}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => handleBookClick(room)}
                                    className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-200"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Booking Modal */}
            {selectedRoom && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
                        <div className="relative h-32">
                            <img src={selectedRoom.image} className="w-full h-full object-cover" alt="header" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-xl">{selectedRoom.type} Suite</h3>
                                    <p className="text-white/80 text-sm">${selectedRoom.price} / night</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedRoom(null)}
                                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-1 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-6">
                            {bookingStep === 'details' ? (
                                <form onSubmit={handleConfirmBooking} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={guestName}
                                            onChange={(e) => setGuestName(e.target.value)}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            value={guestEmail}
                                            onChange={(e) => setGuestEmail(e.target.value)}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Check In</label>
                                            <input
                                                required
                                                type="date"
                                                value={checkIn}
                                                onChange={(e) => setCheckIn(e.target.value)}
                                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Check Out</label>
                                            <input
                                                required
                                                type="date"
                                                value={checkOut}
                                                onChange={(e) => setCheckOut(e.target.value)}
                                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 mt-2"
                                    >
                                        Confirm Booking
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">Processing Payment...</h4>
                                    <p className="text-slate-500">Please wait while we secure your room.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
