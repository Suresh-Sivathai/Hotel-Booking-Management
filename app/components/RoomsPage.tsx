'use client';

import React, { useState } from 'react';

interface Room {
    id: string;
    number: string;
    type: 'Standard' | 'Deluxe' | 'Suite' | 'Penthouse';
    price: number;
    status: 'Available' | 'Occupied' | 'Maintenance';
    floor: number;
    image: string;
}

export default function RoomsPage() {
    // Mock data
    const [rooms, setRooms] = useState<Room[]>([
        {
            id: '1',
            number: '101',
            type: 'Standard',
            price: 100,
            status: 'Available',
            floor: 1,
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: '2',
            number: '102',
            type: 'Standard',
            price: 100,
            status: 'Occupied',
            floor: 1,
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: '3',
            number: '201',
            type: 'Deluxe',
            price: 150,
            status: 'Available',
            floor: 2,
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: '4',
            number: '205',
            type: 'Deluxe',
            price: 150,
            status: 'Maintenance',
            floor: 2,
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: '5',
            number: '301',
            type: 'Suite',
            price: 250,
            status: 'Occupied',
            floor: 3,
            image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=600"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [filterType, setFilterType] = useState('All');
    const [sortBy, setSortBy] = useState('number');
    const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
    const [bulkInput, setBulkInput] = useState('');
    const [bulkError, setBulkError] = useState('');

    const handleBulkAdd = () => {
        try {
            setBulkError('');
            let newRoomsData: Partial<Room>[] = [];

            // Try parsing as JSON first
            if (bulkInput.trim().startsWith('[')) {
                newRoomsData = JSON.parse(bulkInput);
            } else {
                // Parse as CSV (Number, Type, Price, Status)
                newRoomsData = bulkInput.split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                        const [number, type, price, status] = line.split(',').map(s => s.trim());
                        return {
                            number,
                            type: type as Room['type'],
                            price: Number(price),
                            status: status as Room['status']
                        };
                    });
            }

            if (!Array.isArray(newRoomsData) || newRoomsData.length === 0) {
                throw new Error('No valid data found');
            }

            const newRooms: Room[] = newRoomsData.map((r, index) => ({
                id: `new-${Date.now()}-${index}`,
                number: r.number || '000',
                type: (r.type && ['Standard', 'Deluxe', 'Suite', 'Penthouse'].includes(r.type)) ? r.type : 'Standard',
                price: r.price || 100,
                status: (r.status && ['Available', 'Occupied', 'Maintenance'].includes(r.status)) ? r.status : 'Available',
                floor: r.number ? parseInt(r.number.toString()[0]) : 1,
                image: r.image || "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=600"
            }));

            setRooms(prev => [...prev, ...newRooms]);
            setIsBulkModalOpen(false);
            setBulkInput('');
            alert(`Successfully added ${newRooms.length} rooms`);
        } catch (e) {
            setBulkError('Invalid format. Please use JSON array or CSV format (Number, Type, Price, Status).');
        }
    };

    const filteredRooms = rooms.filter(room => {
        const matchesSearch = room.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
            room.type.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'All' || room.status === filterStatus;
        const matchesType = filterType === 'All' || room.type === filterType;
        return matchesSearch && matchesStatus && matchesType;
    }).sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'number') return a.number.localeCompare(b.number);
        else return 0;
    });

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">Room Management</h1>
                        <p className="text-slate-600 mt-1">Manage hotel rooms, pricing, and availability</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setIsBulkModalOpen(true)}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            Bulk Import
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 font-medium">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add New Room
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search by room number..."
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-4">
                            <select
                                className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-600"
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                            >
                                <option value="All">All Types</option>
                                <option value="Standard">Standard</option>
                                <option value="Deluxe">Deluxe</option>
                                <option value="Suite">Suite</option>
                                <option value="Penthouse">Penthouse</option>
                            </select>
                            <select
                                className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-600"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="All">All Status</option>
                                <option value="Available">Available</option>
                                <option value="Occupied">Occupied</option>
                                <option value="Maintenance">Maintenance</option>
                            </select>
                            <select
                                className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-600"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="number">Sort by Number</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Room Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRooms.map((room) => (
                        <div key={room.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100">
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={`Room ${room.number} - ${room.type}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-md ${room.status === 'Available' ? 'bg-green-500/90 text-white' :
                                        room.status === 'Occupied' ? 'bg-red-500/90 text-white' :
                                            'bg-amber-500/90 text-white'
                                        }`}>
                                        {room.status}
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white text-xl font-bold">Room {room.number}</h3>
                                    <p className="text-white/90 text-sm font-medium">{room.type}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Price per night</p>
                                        <p className="text-2xl font-bold text-slate-800">${room.price}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Floor</p>
                                        <p className="text-lg font-medium text-slate-800">{room.floor}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-4 border-t border-slate-100">
                                    <button className="flex-1 px-4 py-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors font-medium text-sm">
                                        Edit Details
                                    </button>
                                    <button className="flex-1 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors font-medium text-sm">
                                        View History
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bulk Import Modal */}
            {isBulkModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <h3 className="text-xl font-bold text-slate-800">Bulk Import Rooms</h3>
                            <button
                                onClick={() => setIsBulkModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6">
                            <p className="text-slate-600 mb-4">
                                Paste room data below in CSV format (Number, Type, Price, Status) or JSON format.
                            </p>
                            <p className="text-sm text-slate-500 mb-2 font-mono bg-slate-50 p-2 rounded">
                                Example CSV:<br />
                                105, Standard, 100, Available<br />
                                501, Suite, 300, Maintenance
                            </p>
                            <textarea
                                value={bulkInput}
                                onChange={(e) => setBulkInput(e.target.value)}
                                className="w-full h-64 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none font-mono text-sm resize-none"
                                placeholder="Paste your data here..."
                            />
                            {bulkError && (
                                <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {bulkError}
                                </p>
                            )}
                        </div>
                        <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
                            <button
                                onClick={() => setIsBulkModalOpen(false)}
                                className="px-6 py-2.5 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors font-medium hover:text-slate-800"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleBulkAdd}
                                className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg font-medium"
                            >
                                Import Rooms
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
