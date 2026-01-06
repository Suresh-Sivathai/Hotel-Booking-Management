'use client';

import React, { useState } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'Admin' | 'Staff' | 'Manager';
    status: 'Active' | 'Inactive';
    joinDate: string;
    avatarColor: string;
}

export default function UsersPage() {
    // Mock data
    const [users, setUsers] = useState<User[]>([
        {
            id: '1',
            name: 'Sarah Wilson',
            email: 'sarah.w@hotel.com',
            role: 'Manager',
            status: 'Active',
            joinDate: '2023-01-15',
            avatarColor: 'bg-purple-500'
        },
        {
            id: '2',
            name: 'Generic Admin',
            email: 'admin@hotel.com',
            role: 'Admin',
            status: 'Active',
            joinDate: '2022-11-01',
            avatarColor: 'bg-blue-500'
        },
        {
            id: '3',
            name: 'Mike Brown',
            email: 'mike.b@hotel.com',
            role: 'Staff',
            status: 'Inactive',
            joinDate: '2023-03-10',
            avatarColor: 'bg-orange-500'
        },
        {
            id: '4',
            name: 'Emily Davis',
            email: 'emily.d@hotel.com',
            role: 'Staff',
            status: 'Active',
            joinDate: '2023-04-22',
            avatarColor: 'bg-green-500'
        },
        {
            id: '5',
            name: 'Robert Taylor',
            email: 'robert.t@hotel.com',
            role: 'Staff',
            status: 'Active',
            joinDate: '2023-05-30',
            avatarColor: 'bg-indigo-500'
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('All');
    const [filterStatus, setFilterStatus] = useState('All');
    const [sortBy, setSortBy] = useState('name');
    const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
    const [bulkInput, setBulkInput] = useState('');
    const [bulkError, setBulkError] = useState('');

    const handleBulkAdd = () => {
        try {
            setBulkError('');
            let newUsersData: Partial<User>[] = [];

            // Try parsing as JSON first
            if (bulkInput.trim().startsWith('[')) {
                newUsersData = JSON.parse(bulkInput);
            } else {
                // Parse as CSV (Name, Email, Role)
                newUsersData = bulkInput.split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                        const [name, email, role] = line.split(',').map(s => s.trim());
                        return { name, email, role: role as User['role'] };
                    });
            }

            if (!Array.isArray(newUsersData) || newUsersData.length === 0) {
                throw new Error('No valid data found');
            }

            const newUsers: User[] = newUsersData.map((u, index) => ({
                id: `new-${Date.now()}-${index}`,
                name: u.name || 'Unknown',
                email: u.email || 'unknown@example.com',
                role: (u.role && ['Admin', 'Staff', 'Manager'].includes(u.role)) ? u.role : 'Staff',
                status: 'Active',
                joinDate: new Date().toISOString().split('T')[0],
                avatarColor: ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-indigo-500'][Math.floor(Math.random() * 5)]
            }));

            setUsers(prev => [...prev, ...newUsers]);
            setIsBulkModalOpen(false);
            setBulkInput('');
            alert(`Successfully added ${newUsers.length} users`);
        } catch {
            setBulkError('Invalid format. Please use JSON array or CSV format (Name, Email, Role).');
        }
    };

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === 'All' || user.role === filterRole;
        const matchesStatus = filterStatus === 'All' || user.status === filterStatus;
        return matchesSearch && matchesRole && matchesStatus;
    }).sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'date') return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
        return 0;
    });

    return (

        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">User Management</h1>
                        <p className="text-slate-600 mt-1">Manage system users, roles, and permissions</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => setIsBulkModalOpen(true)}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            Bulk Import
                        </button>
                        <button type="button" className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 font-medium">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add New User
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search users by name or email..."
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-4">
                            <select
                                className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-600"
                                value={filterRole}
                                onChange={(e) => setFilterRole(e.target.value)}
                            >
                                <option value="All">All Roles</option>
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                                <option value="Staff">Staff</option>
                            </select>
                            <select
                                className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-600"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="All">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                            <select
                                className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-600"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="name">Sort by Name</option>
                                <option value="date">Sort by Date</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Join Date</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full ${user.avatarColor} flex items-center justify-center text-white font-semibold text-sm`}>
                                                    {user.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-slate-900">{user.name}</p>
                                                    <p className="text-sm text-slate-500">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'Active'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-slate-100 text-slate-800'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-slate-600">{user.role}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-slate-600">
                                                {new Date(user.joinDate).toLocaleDateString()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button type="button" className="text-slate-400 hover:text-indigo-600 transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination - Mock */}
                    <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
                        <p className="text-sm text-slate-500">
                            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredUsers.length}</span> of <span className="font-medium">{users.length}</span> results
                        </p>
                        <div className="flex gap-2">
                            <button type="button" disabled className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-400 cursor-not-allowed">Previous</button>
                            <button type="button" className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-600 hover:bg-slate-50">Next</button>
                        </div>
                    </div>
                </div>
                {/* Bulk Import Modal */}
                {
                    isBulkModalOpen && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in">
                                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                    <h3 className="text-xl font-bold text-slate-800">Bulk Import Users</h3>
                                    <button
                                        type="button"
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
                                        Paste user data below in CSV format (Name, Email, Role) or JSON format.
                                    </p>
                                    <p className="text-sm text-slate-500 mb-2 font-mono bg-slate-50 p-2 rounded">
                                        Example CSV:<br />
                                        John Doe, john@example.com, Manager<br />
                                        Jane Smith, jane@example.com, Staff
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
                                        type="button"
                                        onClick={() => setIsBulkModalOpen(false)}
                                        className="px-6 py-2.5 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors font-medium hover:text-slate-800"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleBulkAdd}
                                        className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg font-medium"
                                    >
                                        Import Users
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
