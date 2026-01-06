'use client';

import React, { useState } from 'react';

interface MenuItem {
    id: string;
    label: string;
    icon: React.ReactNode;
}

interface SidebarProps {
    onNavigate?: (pageId: string) => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
    const [activeItem, setActiveItem] = useState('dashboard');

    const handleNavigation = (itemId: string) => {
        setActiveItem(itemId);
        if (onNavigate) {
            onNavigate(itemId);
        }
    };

    const mainMenuItems: MenuItem[] = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            ),
        },
        {
            id: 'rooms',
            label: 'Rooms',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
        },
        {
            id: 'users',
            label: 'Users',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        {
            id: 'bookings',
            label: 'Bookings',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    const systemItems: MenuItem[] = [

        {
            id: 'settings',
            label: 'Settings',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="w-64 h-screen bg-slate-800 text-white flex flex-col fixed left-0 top-0">
            {/* Logo */}
            <div className="p-6 border-b border-slate-700">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">LuxeStay</h1>
                        <p className="text-xs text-slate-400">Hotel Management</p>
                    </div>
                </div>
            </div>

            {/* Main Menu */}
            <div className="flex-1 py-6">
                <div className="px-4 mb-4">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Main Menu</p>
                </div>
                <nav className="space-y-1 px-3">
                    {mainMenuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavigation(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeItem === item.id
                                ? 'bg-slate-700 text-white shadow-lg'
                                : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                }`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* System Menu */}
            <div className="py-6 border-t border-slate-700">
                <div className="px-4 mb-4">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">System</p>
                </div>
                <nav className="space-y-1 px-3">
                    {systemItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavigation(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeItem === item.id
                                ? 'bg-slate-700 text-white shadow-lg'
                                : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                }`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-700">
                <p className="text-xs text-slate-500 text-center">© 2024 LuxeStay</p>
            </div>
        </div>
    );
}
