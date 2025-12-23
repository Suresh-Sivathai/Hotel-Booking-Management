import React from 'react';

interface Booking {
    id: string;
    guestName: string;
    initials: string;
    roomNumber: string;
    checkIn: string;
    checkOut: string;
    amount: number;
    status: 'confirmed' | 'pending';
}

interface RecentBookingsProps {
    bookings: Booking[];
}

export default function RecentBookings({ bookings }: RecentBookingsProps) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Recent Bookings</h2>

            <div className="space-y-3">
                {bookings.map((booking) => (
                    <div
                        key={booking.id}
                        className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 transition-colors border border-slate-100"
                    >
                        <div className="flex items-center gap-4 flex-1">
                            {/* Avatar */}
                            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-semibold text-sm flex-shrink-0">
                                {booking.initials}
                            </div>

                            {/* Guest Info */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-slate-900 text-sm">{booking.guestName}</h3>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    Room {booking.roomNumber} • {booking.checkIn} - {booking.checkOut}
                                </p>
                            </div>
                        </div>

                        {/* Amount and Status */}
                        <div className="flex items-center gap-4 ml-4">
                            <span className="font-bold text-slate-900 text-sm">${booking.amount}</span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${booking.status === 'confirmed'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-amber-100 text-amber-700'
                                    }`}
                            >
                                {booking.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
