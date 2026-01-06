'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import BookingPage from './BookingPage';
import UsersPage from './UsersPage';
import RoomsPage from './RoomsPage';

/**
 * Example component showing how to integrate the Sidebar with BookingPage
 * 
 * Usage:
 * 1. Import this component in your main page
 * 2. The sidebar will handle navigation between different pages
 * 3. Click on "Bookings" in the sidebar to view the booking form
 */
export default function AppWithBooking() {
    const [currentPage, setCurrentPage] = useState('dashboard');

    const handleNavigation = (pageId: string) => {
        setCurrentPage(pageId);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'bookings':
                return <BookingPage />;
            case 'dashboard':
                return (
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
                        <p className="text-slate-600 mt-2">Welcome to the hotel management dashboard</p>
                    </div>
                );
            case 'rooms':
                return <RoomsPage />;

            case 'settings':
                return (
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-slate-800">Settings</h1>
                        <p className="text-slate-600 mt-2">Configure your application settings</p>
                    </div>
                );
            case 'users':
                return <UsersPage />;
            default:
                return (
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-slate-800">Page Not Found</h1>
                    </div>
                );
        }
    };

    return (
        <div className="flex min-h-screen bg-slate-50">
            <Sidebar onNavigate={handleNavigation} />
            <div className="ml-64 flex-1">
                {renderPage()}
            </div>
        </div>
    );
}
