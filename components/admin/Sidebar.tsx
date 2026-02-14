// components/Sidebar.tsx
'use client';

import {
  Home,
  Briefcase,
  Users,
  MessageSquare,
  Star,
  Settings,
  Bell,
  LogOut,
  BarChart3,
} from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Dashboard', icon: Home, href: '#', current: true },
  { name: 'Projects', icon: Briefcase, href: '#', current: false },
  { name: 'Users', icon: Users, href: '#', current: false },
  { name: 'Messages', icon: MessageSquare, href: '#', current: false },
  { name: 'Feedback', icon: Star, href: '#', current: false },
  { name: 'Analytics', icon: BarChart3, href: '#', current: false },
  { name: 'Settings', icon: Settings, href: '#', current: false },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow bg-gradient-to-b from-gray-900 to-gray-800 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <span className="text-white text-xl font-bold">PortfolioPro</span>
              </div>
            </div>
            <div className="mt-8 flex-1 flex flex-col">
              <nav className="flex-1 px-4 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                      item.current
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        item.current
                          ? 'text-indigo-400'
                          : 'text-gray-400 group-hover:text-gray-300'
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="px-4 py-4 border-t border-gray-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Admin"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">John Doe</p>
                  <p className="text-xs font-medium text-gray-400">
                    Portfolio Owner
                  </p>
                </div>
                <button className="ml-auto text-gray-400 hover:text-white">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}