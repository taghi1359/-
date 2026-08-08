import React, { useState, useEffect } from 'react';
import { Activity, Bell, ShieldCheck, Sun, Moon, Settings, Home, Search, Bot, ScanText, User } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors selection:bg-emerald-500 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-lg font-bold">پزشک‌یار هوشمند</h1>
            <p className="text-xs text-slate-500">دستیار سلامت و بانک جامع دارویی</p>
          </div>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
          {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 space-y-6 pb-24">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-6 text-white shadow-xl text-center space-y-3">
          <h2 className="text-2xl font-extrabold">به دستیار پزشکی هوشمند خوش آمدید</h2>
          <p className="text-sm text-emerald-100">اپلیکیشن شما با موفقیت در حال کامپایل و آماده‌سازی برای نصب روی اندروید است.</p>
        </div>
      </main>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-3 flex justify-around">
        <button onClick={() => setActiveTab('home')} className="flex flex-col items-center text-emerald-600 text-xs font-bold gap-1">
          <Home className="w-5 h-5" /> خانه
        </button>
        <button onClick={() => setActiveTab('drugs')} className="flex flex-col items-center text-slate-500 text-xs gap-1">
          <Search className="w-5 h-5" /> بانک دارو
        </button>
        <button onClick={() => setActiveTab('ai')} className="flex flex-col items-center text-slate-500 text-xs gap-1">
          <Bot className="w-5 h-5" /> مشاوره
        </button>
        <button onClick={() => setActiveTab('profile')} className="flex flex-col items-center text-slate-500 text-xs gap-1">
          <User className="w-5 h-5" /> پروفایل
        </button>
      </div>
    </div>
  );
}
