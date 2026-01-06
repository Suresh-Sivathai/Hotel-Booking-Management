import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
    children: React.ReactNode;
    activeItem: string;
    onItemClick: (itemId: string) => void;
}

export default function DashboardLayout({ children, activeItem, onItemClick }: DashboardLayoutProps) {
    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <Sidebar activeItem={activeItem} onItemClick={onItemClick} />

            {/* Main Content */}
            <div className="flex-1 ml-20 transition-all duration-300 ease-in-out">
                <Header />
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
