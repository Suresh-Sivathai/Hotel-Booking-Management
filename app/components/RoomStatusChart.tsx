'use client';

import React from 'react';

interface RoomStatus {
    label: string;
    count: number;
    color: string;
    percentage: number;
}

interface RoomStatusChartProps {
    data: RoomStatus[];
}

export default function RoomStatusChart({ data }: RoomStatusChartProps) {
    // Calculate total for percentage
    const total = data.reduce((sum, item) => sum + item.count, 0);

    // Calculate SVG donut chart segments
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    let currentOffset = 0;

    const segments = data.map((item) => {
        const percentage = (item.count / total) * 100;
        const segmentLength = (percentage / 100) * circumference;
        const segment = {
            ...item,
            percentage,
            offset: currentOffset,
            length: segmentLength,
        };
        currentOffset += segmentLength;
        return segment;
    });

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Room Status Overview</h2>

            <div className="flex flex-col items-center">
                {/* Donut Chart */}
                <div className="relative w-64 h-64 mb-6">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                        {/* Background circle */}
                        <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke="#f1f5f9"
                            strokeWidth="30"
                        />

                        {/* Segments */}
                        {segments.map((segment, index) => (
                            <circle
                                key={index}
                                cx="100"
                                cy="100"
                                r={radius}
                                fill="none"
                                stroke={segment.color}
                                strokeWidth="30"
                                strokeDasharray={`${segment.length} ${circumference - segment.length}`}
                                strokeDashoffset={-segment.offset}
                                className="transition-all duration-500 hover:opacity-80"
                                style={{
                                    transformOrigin: 'center',
                                }}
                            />
                        ))}
                    </svg>

                    {/* Center text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-slate-900">{total}</span>
                        <span className="text-sm text-slate-500">Total Rooms</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="w-full space-y-3">
                    {data.map((item, index) => {
                        const percentage = ((item.count / total) * 100).toFixed(1);
                        return (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-4 h-4 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="text-sm text-slate-700">{item.label}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-slate-900">{item.count}</span>
                                    <span className="text-xs text-slate-500 w-12 text-right">{percentage}%</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
