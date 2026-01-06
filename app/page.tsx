'use client';

import React, { useState } from 'react';
import MainApp from './components/MainApp';
import UserPanel from './components/UserPanel';

export default function Home() {
  const [view, setView] = useState<'admin' | 'guest'>('admin');

  return (
    <div>
      {/* View Switcher - For Demo Purposes */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2 bg-white p-2 rounded-full shadow-2xl border border-slate-200">
        <button
          onClick={() => setView('admin')}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${view === 'admin'
              ? 'bg-slate-900 text-white shadow-lg'
              : 'text-slate-500 hover:bg-slate-100'
            }`}
        >
          Admin View
        </button>
        <button
          onClick={() => setView('guest')}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${view === 'guest'
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'text-slate-500 hover:bg-slate-100'
            }`}
        >
          Guest Panel
        </button>
      </div>

      {view === 'admin' ? <MainApp /> : <UserPanel />}
    </div>
  );
}