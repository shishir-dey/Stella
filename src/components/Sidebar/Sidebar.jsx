import React from 'react';
import { Monitor, Database } from 'lucide-react';

const sidebarItems = [
  { id: 'live-viewer', label: 'Live Viewer', icon: Monitor },
  { id: 'database', label: 'Database Viewer', icon: Database },
];

const Sidebar = ({ selectedTab, onTabChange }) => {
  return (
    <div className="w-64 border-r border-[#e5e5e5] bg-[#f5f5f7] dark:border-[#323232] dark:bg-[#1e1e1e]">
      <div className="flex h-full flex-col">
        <div className="p-5">
          <h1 className="text-xl font-semibold text-[#1d1d1f] dark:text-white">Stella</h1>
          <p className="mt-1 text-sm text-[#86868b] dark:text-[#a1a1a6]">CAN Bus Tool</p>
        </div>
        <nav className="flex-1 px-2">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`mb-1 flex w-full items-center rounded-lg px-3 py-2 transition-all duration-200 ${
                selectedTab === item.id
                  ? 'bg-white shadow-sm dark:bg-[#323232]'
                  : 'text-[#86868b] hover:bg-white/50 dark:text-[#a1a1a6] dark:hover:bg-[#323232]/50'
              }`}
            >
              <item.icon
                className={`h-5 w-5 ${
                  selectedTab === item.id ? 'text-blue-500' : 'text-[#86868b] dark:text-[#a1a1a6]'
                }`}
              />
              <span
                className={`ml-3 text-sm font-medium ${
                  selectedTab === item.id
                    ? 'text-[#1d1d1f] dark:text-white'
                    : 'text-[#86868b] dark:text-[#a1a1a6]'
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
