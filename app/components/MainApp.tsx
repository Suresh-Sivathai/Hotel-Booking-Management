'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import BookingPage from './BookingPage';
import StatCard from './StatCard';
import RoomStatusChart from './RoomStatusChart';
import RecentBookings from './RecentBookings';
import UsersPage from './UsersPage';
import RoomsPage from './RoomsPage';

// Mock data
const roomStatusData = [
    { label: 'Occupied', count: 18, color: '#6366f1', percentage: 65 },
    { label: 'Available', count: 6, color: '#22c55e', percentage: 25 },
    { label: 'Maintenance', count: 2, color: '#eab308', percentage: 10 },
];

const recentBookingsData = [
    {
        id: '1',
        guestName: 'William Turner',
        initials: 'WT',
        roomNumber: '304',
        checkIn: 'Oct 24',
        checkOut: 'Oct 28',
        amount: 340,
        status: 'confirmed' as const,
    },
    {
        id: '2',
        guestName: 'Emma Watson',
        initials: 'EW',
        roomNumber: '205',
        checkIn: 'Oct 23',
        checkOut: 'Oct 25',
        amount: 210,
        status: 'confirmed' as const,
    },
    {
        id: '3',
        guestName: 'James Rodriguez',
        initials: 'JR',
        roomNumber: '101',
        checkIn: 'Oct 25',
        checkOut: 'Oct 27',
        amount: 190,
        status: 'pending' as const,
    },
    {
        id: '4',
        guestName: 'Sophie Anderson',
        initials: 'SA',
        roomNumber: '402',
        checkIn: 'Oct 26',
        checkOut: 'Oct 30',
        amount: 450,
        status: 'confirmed' as const,
    },
];

export default function MainApp() {
    const [currentPage, setCurrentPage] = useState('dashboard');

    const handleNavigation = (pageId: string) => {
        setCurrentPage(pageId);
    };

    const renderDashboard = () => (
        <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total Bookings"
                    value="156"
                    trend="+12%"
                    trendText="vs last month"
                    bgColor="#EEF2FF"
                    icon={
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    }
                />
                <StatCard
                    title="Available Rooms"
                    value="24"
                    trend="-5%"
                    trendText="vs yesterday"
                    bgColor="#FEF3C7"
                    icon={
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    }
                />
                <StatCard
                    title="Total Guests"
                    value="342"
                    trend="+8%"
                    trendText="vs last week"
                    bgColor="#F0FDF4"
                    icon={
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    }
                />
                <StatCard
                    title="Revenue"
                    value="$45.2K"
                    trend="+18%"
                    trendText="vs last month"
                    bgColor="#F5F3FF"
                    icon={
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                />
            </div>

            {/* Charts and Recent Bookings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RoomStatusChart data={roomStatusData} />
                <RecentBookings bookings={recentBookingsData} />
            </div>
        </>
    );

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return renderDashboard();
            case 'bookings':
                return <BookingPage />;
            case 'rooms':
                return <RoomsPage />;

            case 'settings':
                return (
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h1 className="text-3xl font-bold text-slate-800 mb-4">Settings</h1>
                        <p className="text-slate-600">Configure your application settings</p>
                    </div>
                );
            case 'users':
                return <UsersPage />;
            default:
                return renderDashboard();
        }
    };

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar with navigation callback */}
            <Sidebar onNavigate={handleNavigation} />

            {/* Main Content */}
            <div className="flex-1 ml-64">
                <Header />
                <main className="p-8">
                    {renderPage()}
                </main>
            </div>
        </div>
    );
}
