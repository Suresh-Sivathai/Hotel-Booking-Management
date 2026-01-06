'use client';

import { useState } from 'react';

interface Guest {
    id: number;
    name: string;
    email: string;
    status: 'Active' | 'Inactive' | 'VIP';
    spent: number;
    lastVisit: string;
    avatar: string;
    membership: 'Gold' | 'Platinum' | 'Silver';
}

export default function GuestsPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

    const [guests] = useState<Guest[]>([
        {
            id: 1,
            name: 'Sarah Anderson',
            email: 'sarah.anderson@example.com',
            status: 'VIP',
            spent: 12500,
            lastVisit: '2024-12-15',
            avatar: 'SA',
            membership: 'Platinum'
        },
        {
            id: 2,
            name: 'Michael Chen',
            email: 'michael.c@example.com',
            status: 'Active',
            spent: 4200,
            lastVisit: '2024-11-28',
            avatar: 'MC',
            membership: 'Gold'
        },
        {
            id: 3,
            name: 'Emma Wilson',
            email: 'emma.w@example.com',
            status: 'Active',
            spent: 1800,
            lastVisit: '2024-12-20',
            avatar: 'EW',
            membership: 'Silver'
        },
        {
            id: 4,
            name: 'James Rodriguez',
            email: 'james.r@example.com',
            status: 'Inactive',
            spent: 850,
            lastVisit: '2024-09-10',
            avatar: 'JR',
            membership: 'Silver'
        }
    ]);

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'VIP': return 'bg-gradient-to-r from-amber-200 to-yellow-400 text-amber-900 border-amber-200';
            case 'Active': return 'bg-green-100 text-green-700 border-green-200';
            default: return 'bg-gray-100 text-gray-600 border-gray-200';
        }
    };

    const getMembershipColor = (level: string) => {
        switch (level) {
            case 'Platinum': return 'from-slate-700 via-slate-800 to-black text-white';
            case 'Gold': return 'from-yellow-400 via-amber-500 to-amber-600 text-white';
            case 'Silver': return 'from-gray-300 via-gray-400 to-gray-500 text-white';
            default: return 'bg-gray-200';
        }
    };

    return (
        <div className="p-6 min-h-screen bg-slate-50">
            {/* Header Section */}
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        Guest Management
                    </h1>
                    <p className="text-gray-500">Manage your VIPs and daily visitors with style</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="group relative px-8 py-4 bg-gray-900 rounded-2xl text-white font-bold shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Add New Guest
                    </span>
                </button>
            </div>

            {/* Guests Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {guests.map((guest) => (
                    <div
                        key={guest.id}
                        className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer overflow-hidden"
                        onClick={() => setSelectedGuest(guest)}
                    >
                        {/* Decorative Background Element */}
                        <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-br ${getMembershipColor(guest.membership)} opacity-10`}></div>

                        <div className="relative flex justify-between items-start mb-6">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold bg-gradient-to-br ${getMembershipColor(guest.membership)} shadow-lg`}>
                                {guest.avatar}
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusStyle(guest.status)}`}>
                                {guest.status}
                            </span>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{guest.name}</h3>
                            <p className="text-sm text-gray-400">{guest.email}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100 mb-4">
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Spent</p>
                                <p className="text-lg font-bold text-gray-800">${guest.spent.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Last Visit</p>
                                <p className="text-sm font-semibold text-gray-800">{guest.lastVisit}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${getMembershipColor(guest.membership)}`}></span>
                            <span className="text-xs font-medium text-gray-500">{guest.membership} Member</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* UNIQUE ADVANCE MODEL (MODAL) */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Unique Blur Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-300"
                        onClick={() => setIsAddModalOpen(false)}
                    ></div>

                    {/* 3D-style Modal Container */}
                    <div className="relative w-full max-w-2xl transform transition-all duration-500 animate-slide-up perspective-1000">
                        <div className="relative bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/50 overflow-hidden">

                            {/* Decorative Header */}
                            <div className="relative h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 shadow-lg ring-4 ring-white/10">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-black text-white tracking-tight">Onboard New Guest</h2>
                                </div>
                                <button
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Form Content */}
                            <div className="p-8 md:p-10">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2 group">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full bg-gray-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 rounded-xl px-4 py-3 font-semibold text-gray-700 transition-all duration-300 shadow-inner"
                                                placeholder="e.g. John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-purple-600 transition-colors">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                className="w-full bg-gray-50 border-transparent focus:border-purple-500 focus:bg-white focus:ring-0 rounded-xl px-4 py-3 font-semibold text-gray-700 transition-all duration-300 shadow-inner"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 group">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-pink-600 transition-colors">
                                            Select Membership Tier
                                        </label>
                                        <div className="grid grid-cols-3 gap-4">
                                            {['Silver', 'Gold', 'Platinum'].map((tier) => (
                                                <label key={tier} className="relative cursor-pointer group/tier">
                                                    <input type="radio" name="tier" className="peer sr-only" />
                                                    <div className="p-4 rounded-xl border-2 border-gray-100 text-center peer-checked:border-transparent peer-checked:shadow-lg transition-all duration-300 bg-white">
                                                        <div className={`w-3 h-3 rounded-full mx-auto mb-2 bg-gradient-to-r ${getMembershipColor(tier).split(' ').slice(0, 3).join(' ')}`}></div>
                                                        <span className="text-sm font-bold text-gray-600 peer-checked:text-gray-900">{tier}</span>
                                                    </div>
                                                    <div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-pink-500 peer-checked:scale-105 transition-all duration-300 pointer-events-none"></div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <button className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Create Guest Profile
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
