import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor: string;
  trend?: string;
  trendText?: string;
  subtitle?: string;
}

export default function StatCard({ 
  title, 
  value, 
  icon, 
  bgColor, 
  trend, 
  trendText, 
  subtitle 
}: StatCardProps) {
  const isPositive = trend?.startsWith('+') || trend?.startsWith('↑');
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-100">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-slate-500 font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-slate-900 mb-1">{value}</h3>
          {subtitle && (
            <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
          )}
          {trend && trendText && (
            <div className="flex items-center gap-1 mt-2">
              <span className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {trend}
              </span>
              <span className="text-xs text-slate-500">{trendText}</span>
            </div>
          )}
        </div>
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: bgColor }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
