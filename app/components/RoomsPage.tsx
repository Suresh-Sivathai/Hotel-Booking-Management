'use client';

import { useState } from 'react';

interface RoomsPageProps {
    onNavigate?: (view: string) => void;
}

export default function RoomsPage({ onNavigate }: RoomsPageProps) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

    const [rooms, setRooms] = useState([
        {
            id: 1,
            name: 'Presidential Ocean Suite',
            type: 'Ultra Luxury',
            category: 'Premium',
            price: 45999,
            status: 'Available',
            capacity: 4,
            size: '1200 sq ft',
            rating: 4.9,
            reviews: 128,
            amenities: ['Ocean View', 'Private Balcony', 'Jacuzzi', 'Butler Service', 'Mini Bar', 'Smart TV'],
            images: [
                'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
                'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80'
            ],
            available: 2,
            total: 3,
            features: ['Panoramic Windows', 'Marble Bathroom', 'Crystal Chandelier'],
            badge: 'Most Popular',
            badgeColor: 'from-pink-500 to-rose-500'
        },
        {
            id: 2,
            name: 'Royal European Suite',
            type: 'Classic Luxury',
            category: 'Premium',
            price: 38999,
            status: 'Available',
            capacity: 3,
            size: '950 sq ft',
            rating: 4.8,
            reviews: 96,
            amenities: ['Gold Accents', 'Canopy Bed', 'Antique Furniture', 'Premium Linens', 'Wine Cellar'],
            images: [
                'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80'
            ],
            available: 3,
            total: 5,
            features: ['Baroque Design', 'Velvet Upholstery', 'Palace Style'],
            badge: 'Luxury',
            badgeColor: 'from-amber-500 to-yellow-500'
        },
        {
            id: 3,
            name: 'Zen Harmony Suite',
            type: 'Japanese Inspired',
            category: 'Boutique',
            price: 32999,
            status: 'Available',
            capacity: 2,
            size: '800 sq ft',
            rating: 4.7,
            reviews: 84,
            amenities: ['Zen Garden', 'Tatami Platform', 'Tea Ceremony Set', 'Natural Wood', 'Meditation Space'],
            images: [
                'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
                'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'
            ],
            available: 4,
            total: 6,
            features: ['Minimalist Design', 'Shoji Screens', 'Serene Atmosphere'],
            badge: 'Peaceful',
            badgeColor: 'from-green-500 to-emerald-500'
        },
        {
            id: 4,
            name: 'Futuristic Sky Loft',
            type: 'Ultra Modern',
            category: 'Premium',
            price: 42999,
            status: 'Limited',
            capacity: 4,
            size: '1100 sq ft',
            rating: 4.9,
            reviews: 112,
            amenities: ['Smart Home', 'LED Lighting', 'City View', 'Automated Controls', 'Premium Sound'],
            images: [
                'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
                'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
            ],
            available: 1,
            total: 4,
            features: ['Floor-to-Ceiling Glass', 'Holographic Display', 'Voice Control'],
            badge: 'Tech-Enabled',
            badgeColor: 'from-blue-500 to-cyan-500'
        },
        {
            id: 5,
            name: 'Tropical Paradise Villa',
            type: 'Island Resort',
            category: 'Premium',
            price: 52999,
            status: 'Limited',
            capacity: 6,
            size: '1500 sq ft',
            rating: 5.0,
            reviews: 145,
            amenities: ['Private Pool', 'Ocean Access', 'Outdoor Shower', 'Teak Furniture', 'Beach Service'],
            images: [
                'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
                'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80'
            ],
            available: 1,
            total: 3,
            features: ['Open-Air Design', 'Infinity Pool', 'Tropical Garden'],
            badge: 'Exclusive',
            badgeColor: 'from-purple-500 to-indigo-500'
        },
        {
            id: 6,
            name: 'Art Deco Glamour Suite',
            type: 'Vintage Luxury',
            category: 'Boutique',
            price: 35999,
            status: 'Available',
            capacity: 3,
            size: '850 sq ft',
            rating: 4.6,
            reviews: 78,
            amenities: ['Brass Accents', 'Velvet Furniture', 'Geometric Patterns', 'Marble Bath', 'Vintage Bar'],
            images: [
                'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
                'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80'
            ],
            available: 5,
            total: 8,
            features: ['1920s Glamour', 'Emerald Green Decor', 'Statement Lighting'],
            badge: 'Vintage',
            badgeColor: 'from-orange-500 to-red-500'
        },
        {
            id: 7,
            name: 'Nordic Hygge Retreat',
            type: 'Scandinavian',
            category: 'Standard',
            price: 29999,
            status: 'Available',
            capacity: 2,
            size: '700 sq ft',
            rating: 4.7,
            reviews: 92,
            amenities: ['Fireplace', 'Mountain View', 'Natural Light', 'Cozy Textiles', 'Coffee Station'],
            images: [
                'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
                'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80'
            ],
            available: 7,
            total: 10,
            features: ['Blonde Wood', 'Minimalist Nordic', 'Hygge Design'],
            badge: 'Cozy',
            badgeColor: 'from-teal-500 to-cyan-500'
        },
        {
            id: 8,
            name: 'Mediterranean Coastal Suite',
            type: 'Bohemian Chic',
            category: 'Boutique',
            price: 31999,
            status: 'Available',
            capacity: 4,
            size: '900 sq ft',
            rating: 4.8,
            reviews: 104,
            amenities: ['Sea View Balcony', 'Terracotta Tiles', 'Arched Doorways', 'Outdoor Dining', 'Beach Access'],
            images: [
                'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80',
                'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80'
            ],
            available: 6,
            total: 9,
            features: ['Blue & White Theme', 'Rustic Elegance', 'Coastal Luxury'],
            badge: 'Beachfront',
            badgeColor: 'from-sky-500 to-blue-500'
        },
        {
            id: 9,
            name: 'Industrial Urban Loft',
            type: 'Modern Chic',
            category: 'Standard',
            price: 27999,
            status: 'Available',
            capacity: 3,
            size: '750 sq ft',
            rating: 4.5,
            reviews: 67,
            amenities: ['Exposed Brick', 'High Ceilings', 'City Views', 'Vintage Leather', 'Modern Art'],
            images: [
                'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
                'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80'
            ],
            available: 8,
            total: 12,
            features: ['Steel Beams', 'Edison Lighting', 'Urban Sophistication'],
            badge: 'Trendy',
            badgeColor: 'from-gray-500 to-slate-600'
        },
        {
            id: 10,
            name: 'Romantic Honeymoon Suite',
            type: 'Couples Retreat',
            category: 'Premium',
            price: 39999,
            status: 'Available',
            capacity: 2,
            size: '850 sq ft',
            rating: 4.9,
            reviews: 156,
            amenities: ['Heart Jacuzzi', 'Rose Gold Accents', 'Champagne Service', 'Four-Poster Bed', 'Spa Bath'],
            images: [
                'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
                'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=800&q=80'
            ],
            available: 3,
            total: 5,
            features: ['Romantic Lighting', 'Blush Pink Decor', 'Intimate Atmosphere'],
            badge: 'Romantic',
            badgeColor: 'from-rose-500 to-pink-500'
        }
    ]);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newRoom, setNewRoom] = useState({
        name: '',
        type: '',
        category: 'Standard',
        price: '',
        capacity: '',
        size: '',
        image1: '',
        image2: ''
    });

    const handleAddRoom = (e: React.FormEvent) => {
        e.preventDefault();
        const roomToAdd = {
            id: rooms.length + 1,
            name: newRoom.name,
            type: newRoom.type,
            category: newRoom.category,
            price: Number(newRoom.price),
            status: 'Available',
            capacity: Number(newRoom.capacity),
            size: newRoom.size + ' sq ft',
            rating: 5.0,
            reviews: 0,
            amenities: ['WiFi', 'TV', 'AC', 'Mini Bar'], // Default amenities
            images: [
                newRoom.image1 || 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
                newRoom.image2 || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
            ],
            available: 1,
            total: 1,
            features: ['New Addition', 'Modern Design'],
            badge: 'New',
            badgeColor: 'from-purple-500 to-indigo-500'
        };

        setRooms([...rooms, roomToAdd]);
        setIsAddModalOpen(false);
        setNewRoom({ name: '', type: '', category: 'Standard', price: '', capacity: '', size: '', image1: '', image2: '' });
    };

    const categories = ['All', 'Premium', 'Boutique', 'Standard'];

    const filteredRooms = selectedCategory === 'All'
        ? rooms
        : rooms.filter(room => room.category === selectedCategory);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Available':
                return 'bg-green-100 text-green-800 border border-green-200';
            case 'Limited':
                return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
            case 'Occupied':
                return 'bg-red-100 text-red-800 border border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border border-gray-200';
        }
    };

    return (
        <div className="p-6 bg-slate-50 min-h-screen">

            <div className="relative z-10">
                {/* Page Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                Luxury Rooms Collection
                            </h1>
                            <p className="text-gray-600 text-lg">Discover our exquisite selection of premium accommodations</p>
                        </div>

                        <div className="flex gap-4 items-center">
                            {/* Add Room Button */}
                            <button
                                onClick={() => setIsAddModalOpen(true)}
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add New Room
                            </button>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`px-4 py-2 rounded-lg transition-all duration-300 ${viewMode === 'grid'
                                    ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`px-4 py-2 rounded-lg transition-all duration-300 ${viewMode === 'list'
                                    ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Category Filter Pills */}
                <div className="mb-8 flex gap-3 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                                ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-xl'
                                : 'bg-white text-gray-700 hover:shadow-lg border border-gray-200'
                                }`}
                        >
                            {category}
                            {category !== 'All' && (
                                <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                                    {rooms.filter(r => r.category === category).length}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-blue-100 text-sm font-medium">Total Rooms</p>
                                    <p className="text-4xl font-bold mt-2">65</p>
                                    <p className="text-blue-200 text-xs mt-1">Across all categories</p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-green-100 text-sm font-medium">Available</p>
                                    <p className="text-4xl font-bold mt-2">40</p>
                                    <p className="text-green-200 text-xs mt-1">Ready to book</p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-amber-100 text-sm font-medium">Occupied</p>
                                    <p className="text-4xl font-bold mt-2">20</p>
                                    <p className="text-amber-200 text-xs mt-1">Currently booked</p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-purple-100 text-sm font-medium">Avg Rating</p>
                                    <p className="text-4xl font-bold mt-2">4.8</p>
                                    <p className="text-purple-200 text-xs mt-1">Guest satisfaction</p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Room Cards Grid */}
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                    {filteredRooms.map((room, index) => (
                        <div
                            key={room.id}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Glassmorphism Card */}
                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border border-white/20">
                                {/* Animated Gradient Border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>

                                {/* Room Image Carousel with Overlay */}
                                <div className="relative h-72 overflow-hidden group/carousel">
                                    {/* Image Display */}
                                    {room.images.map((image, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={image}
                                            alt={`${room.name} - View ${imgIndex + 1}`}
                                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${(currentImageIndex[room.id] || 0) === imgIndex
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-0 scale-110'
                                                }`}
                                        />
                                    ))}

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                                    {/* Navigation Arrows */}
                                    <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIndex(prev => ({
                                                    ...prev,
                                                    [room.id]: ((prev[room.id] || 0) - 1 + room.images.length) % room.images.length
                                                }));
                                            }}
                                            className="bg-white/90 hover:bg-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                                        >
                                            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIndex(prev => ({
                                                    ...prev,
                                                    [room.id]: ((prev[room.id] || 0) + 1) % room.images.length
                                                }));
                                            }}
                                            className="bg-white/90 hover:bg-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                                        >
                                            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Image Counter Badge */}
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {(currentImageIndex[room.id] || 0) + 1}/{room.images.length}
                                    </div>

                                    {/* Top Right Badges */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                                        {/* Category Badge */}
                                        <div className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md bg-gradient-to-r ${room.badgeColor} text-white shadow-lg transform hover:scale-110 transition-transform`}>
                                            {room.badge}
                                        </div>

                                        {/* Status Badge */}
                                        <span className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md ${getStatusColor(room.status)} shadow-lg`}>
                                            {room.status}
                                        </span>
                                    </div>

                                    {/* Rating Badge */}
                                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="font-bold text-gray-800">{room.rating}</span>
                                        <span className="text-gray-500 text-xs">({room.reviews})</span>
                                    </div>

                                    {/* Thumbnail Preview Strip */}
                                    <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 px-6 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                                        {room.images.map((image, imgIndex) => (
                                            <button
                                                key={imgIndex}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(prev => ({
                                                        ...prev,
                                                        [room.id]: imgIndex
                                                    }));
                                                }}
                                                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${(currentImageIndex[room.id] || 0) === imgIndex
                                                    ? 'border-white scale-110 shadow-2xl'
                                                    : 'border-white/50 hover:border-white/80 scale-100'
                                                    }`}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`Thumbnail ${imgIndex + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                                {(currentImageIndex[room.id] || 0) === imgIndex && (
                                                    <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Dot Indicators */}
                                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                                        {room.images.map((_, imgIndex) => (
                                            <button
                                                key={imgIndex}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(prev => ({
                                                        ...prev,
                                                        [room.id]: imgIndex
                                                    }));
                                                }}
                                                className={`transition-all duration-300 rounded-full ${(currentImageIndex[room.id] || 0) === imgIndex
                                                    ? 'w-8 h-2 bg-white'
                                                    : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Bottom Info Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex items-end justify-between">
                                            {/* Price Tag */}
                                            <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-2xl">

                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
                                                        ₹{room.price.toLocaleString()}
                                                    </span>
                                                    <span className="text-gray-600 text-sm font-medium">/night</span>
                                                </div>
                                            </div>

                                            {/* Quick Action Buttons */}
                                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg hover:bg-white transition-all hover:scale-110">
                                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </button>
                                                <button className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg hover:bg-white transition-all hover:scale-110">
                                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Room Details */}
                                <div className="p-6">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors">
                                            {room.name}
                                        </h3>
                                        <p className="text-sm text-amber-600 font-semibold uppercase tracking-wide flex items-center gap-2">
                                            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                                            {room.type}
                                        </p>
                                    </div>

                                    {/* Room Info Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-5">
                                        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-3 rounded-xl border border-blue-100">
                                            <div className="bg-blue-500 p-2 rounded-lg">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium">Capacity</p>
                                                <p className="text-sm font-bold text-gray-800">{room.capacity} Guests</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-3 rounded-xl border border-purple-100">
                                            <div className="bg-purple-500 p-2 rounded-lg">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium">Size</p>
                                                <p className="text-sm font-bold text-gray-800">{room.size}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features with Icons */}
                                    <div className="mb-5">
                                        <p className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                            Key Features
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {room.features.map((feature, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-xl text-xs font-semibold border border-amber-200 hover:shadow-md transition-shadow"
                                                >
                                                    ✨ {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Amenities */}
                                    <div className="mb-5">
                                        <p className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Amenities
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {room.amenities.slice(0, 4).map((amenity, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors"
                                                >
                                                    {amenity}
                                                </span>
                                            ))}
                                            {room.amenities.length > 4 && (
                                                <span className="px-3 py-1.5 bg-gradient-to-r from-slate-200 to-gray-200 text-slate-700 rounded-lg text-xs font-bold hover:from-slate-300 hover:to-gray-300 transition-all">
                                                    +{room.amenities.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Availability Progress Bar */}
                                    <div className="mb-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-4 border border-gray-200">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                                Availability
                                            </span>
                                            <span className="text-sm font-bold text-gray-700 bg-white px-3 py-1 rounded-full shadow-sm">
                                                {room.available}/{room.total} rooms
                                            </span>
                                        </div>
                                        <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                                            <div
                                                className={`h-3 rounded-full transition-all duration-500 relative overflow-hidden ${(room.available / room.total) > 0.5
                                                    ? 'bg-gradient-to-r from-green-400 via-green-500 to-emerald-500'
                                                    : (room.available / room.total) > 0.2
                                                        ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500'
                                                        : 'bg-gradient-to-r from-red-400 via-red-500 to-rose-500'
                                                    }`}
                                                style={{ width: `${(room.available / room.total) * 100}%` }}
                                            >
                                                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => onNavigate?.('bookings')}
                                            className="flex-1 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-900 hover:to-black text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
                                        >
                                            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Book Now
                                        </button>
                                        <button className="px-5 py-4 border-2 border-slate-300 text-slate-700 rounded-2xl hover:bg-gradient-to-r hover:from-slate-50 hover:to-gray-50 hover:border-slate-400 transition-all duration-300 group">
                                            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results Message */}
                {filteredRooms.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-block p-8 bg-white rounded-3xl shadow-xl">
                            <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">No rooms found</h3>
                            <p className="text-gray-600">Try selecting a different category</p>
                        </div>
                    </div>
                )}
                {/* Add Room Modal - Future Design */}
                {isAddModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop with advanced blur */}
                        <div
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
                            onClick={() => setIsAddModalOpen(false)}
                        ></div>

                        {/* Modal Content */}
                        <div className="relative bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden border border-white/40 flex flex-col animate-scale-in">
                            {/* Header */}
                            <div className="px-10 py-8 border-b border-gray-100 flex justify-between items-center bg-white/50">
                                <div>
                                    <h2 className="text-4xl font-black bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        Design New Suite
                                    </h2>
                                    <p className="text-gray-500 font-medium mt-1">Create a new masterpiece for the collection</p>
                                </div>
                                <button
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full transition-all duration-300 hover:rotate-90 group"
                                >
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Scrollable Form Area */}
                            <div className="overflow-y-auto p-10 custom-scrollbar">
                                <form onSubmit={handleAddRoom} className="space-y-10">

                                    {/* Section 1: Core Identity */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">Core Identity</h3>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="group">
                                                <label className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-purple-600 transition-colors">Room Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={newRoom.name}
                                                    onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
                                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 transition-all font-semibold text-gray-800 outline-none placeholder-gray-300"
                                                    placeholder="e.g. Royal Ocean Suite"
                                                />
                                            </div>
                                            <div className="group">
                                                <label className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-purple-600 transition-colors">Category</label>
                                                <div className="relative">
                                                    <select
                                                        value={newRoom.category}
                                                        onChange={(e) => setNewRoom({ ...newRoom, category: e.target.value })}
                                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 transition-all font-semibold text-gray-800 outline-none appearance-none cursor-pointer"
                                                    >
                                                        {categories.filter(c => c !== 'All').map(c => (
                                                            <option key={c} value={c}>{c}</option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="border-gray-100" />

                                    {/* Section 2: Specifications */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">Specifications</h3>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            <div className="group">
                                                <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Type</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={newRoom.type}
                                                    onChange={(e) => setNewRoom({ ...newRoom, type: e.target.value })}
                                                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium"
                                                    placeholder="Ultra Luxury"
                                                />
                                            </div>
                                            <div className="group">
                                                <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Price (₹)</label>
                                                <input
                                                    type="number"
                                                    required
                                                    value={newRoom.price}
                                                    onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
                                                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-green-200 focus:ring-4 focus:ring-green-50 transition-all outline-none font-medium"
                                                    placeholder="45000"
                                                />
                                            </div>
                                            <div className="group">
                                                <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Guests</label>
                                                <input
                                                    type="number"
                                                    required
                                                    value={newRoom.capacity}
                                                    onChange={(e) => setNewRoom({ ...newRoom, capacity: e.target.value })}
                                                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-orange-200 focus:ring-4 focus:ring-orange-50 transition-all outline-none font-medium"
                                                    placeholder="4"
                                                />
                                            </div>
                                            <div className="group">
                                                <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Size (sq ft)</label>
                                                <input
                                                    type="number"
                                                    required
                                                    value={newRoom.size}
                                                    onChange={(e) => setNewRoom({ ...newRoom, size: e.target.value })}
                                                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-teal-200 focus:ring-4 focus:ring-teal-50 transition-all outline-none font-medium"
                                                    placeholder="1200"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="border-gray-100" />

                                    {/* Section 3: Visual Experience */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">Visual Experience</h3>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Image 1 Input & Preview */}
                                            <div className="space-y-4">
                                                <input
                                                    type="url"
                                                    required
                                                    value={newRoom.image1}
                                                    onChange={(e) => setNewRoom({ ...newRoom, image1: e.target.value })}
                                                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-pink-200 focus:ring-4 focus:ring-pink-50 transition-all outline-none font-medium text-sm"
                                                    placeholder="Primary Image URL"
                                                />
                                                <div className="aspect-video rounded-2xl bg-slate-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative group">
                                                    {newRoom.image1 ? (
                                                        <>
                                                            <img src={newRoom.image1} alt="Preview 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <span className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-lg">Primary View</span>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="text-center p-4">
                                                            <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                            <span className="text-gray-400 text-sm">No image selected</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Image 2 Input & Preview */}
                                            <div className="space-y-4">
                                                <input
                                                    type="url"
                                                    required
                                                    value={newRoom.image2}
                                                    onChange={(e) => setNewRoom({ ...newRoom, image2: e.target.value })}
                                                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-pink-200 focus:ring-4 focus:ring-pink-50 transition-all outline-none font-medium text-sm"
                                                    placeholder="Secondary Image URL"
                                                />
                                                <div className="aspect-video rounded-2xl bg-slate-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative group">
                                                    {newRoom.image2 ? (
                                                        <>
                                                            <img src={newRoom.image2} alt="Preview 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <span className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-lg">Secondary View</span>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="text-center p-4">
                                                            <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                            <span className="text-gray-400 text-sm">No image selected</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Footer */}
                                    <div className="pt-6 flex gap-4 sticky bottom-0 bg-white/95 backdrop-blur-xl p-6 -mx-10 -mb-10 border-t border-gray-100">
                                        <button
                                            type="button"
                                            onClick={() => setIsAddModalOpen(false)}
                                            className="px-8 py-4 rounded-xl font-bold text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-all duration-300"
                                        >
                                            Discard
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white font-bold py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 group"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform">Launch Room</span>
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}


                <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
            </div>
        </div>
    );
}
