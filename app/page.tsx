import DashboardLayout from './components/DashboardLayout';
import StatCard from './components/StatCard';
import RecentBookings from './components/RecentBookings';
import RoomStatusChart from './components/RoomStatusChart';

export default function Home() {
  // Mock data for demonstration
  const recentBookings = [
    {
      id: '1',
      guestName: 'John Anderson',
      initials: 'JA',
      roomNumber: '102',
      checkIn: 'Jan 15',
      checkOut: 'Jan 18',
      amount: 360,
      status: 'confirmed' as const,
    },
    {
      id: '2',
      guestName: 'Sarah Mitchell',
      initials: 'SM',
      roomNumber: '301',
      checkIn: 'Jan 14',
      checkOut: 'Jan 20',
      amount: 2100,
      status: 'confirmed' as const,
    },
    {
      id: '3',
      guestName: 'Michael Chen',
      initials: 'MC',
      roomNumber: '205',
      checkIn: 'Jan 16',
      checkOut: 'Jan 19',
      amount: 540,
      status: 'pending' as const,
    },
  ];

  const roomStatusData = [
    { label: 'Available', count: 3, color: '#10b981', percentage: 37.5 },
    { label: 'Occupied', count: 3, color: '#f59e0b', percentage: 37.5 },
    { label: 'Maintenance', count: 1, color: '#ef4444', percentage: 12.5 },
    { label: 'Reserved', count: 1, color: '#3b82f6', percentage: 12.5 },
  ];

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back to LuxeStay Management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Rooms"
          value="8"
          subtitle="3 available"
          icon={
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          }
          bgColor="#e0f2fe"
        />

        <StatCard
          title="Occupancy Rate"
          value="37.5%"
          trend="↑ 12%"
          trendText="vs last month"
          icon={
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
          bgColor="#ffedd5"
        />

        <StatCard
          title="Today's Check-ins"
          value="2"
          subtitle="Expected arrivals"
          icon={
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          }
          bgColor="#d1fae5"
        />

        <StatCard
          title="Monthly Revenue"
          value="$15,420"
          trend="↑ 8%"
          trendText="vs last month"
          icon={
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          bgColor="#fef3c7"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Occupied Rooms"
          value="3"
          icon={
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
          bgColor="#f3f4f6"
        />

        <StatCard
          title="Today's Check-outs"
          value="1"
          subtitle="Departures scheduled"
          icon={
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          }
          bgColor="#fed7aa"
        />

        <StatCard
          title="Under Maintenance"
          value="1"
          icon={
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          }
          bgColor="#e0f2fe"
        />
      </div>

      {/* Recent Bookings and Room Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentBookings bookings={recentBookings} />
        <RoomStatusChart data={roomStatusData} />
      </div>
    </DashboardLayout>
  );
}
