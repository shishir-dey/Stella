import React from 'react';

const LiveViewer = () => {
  return (
    <div className="glass-effect h-full rounded-xl border border-[#e5e5e5] shadow-xs dark:border-[#323232]">
      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e5e5e5] bg-[#f5f5f7] dark:border-[#323232] dark:bg-[#252525]">
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-[#86868b] uppercase dark:text-[#a1a1a6]">
                Timestamp
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-[#86868b] uppercase dark:text-[#a1a1a6]">
                ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-[#86868b] uppercase dark:text-[#a1a1a6]">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-[#86868b] uppercase dark:text-[#a1a1a6]">
                DLC
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-[#86868b] uppercase dark:text-[#a1a1a6]">
                Data
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-[#86868b] uppercase dark:text-[#a1a1a6]">
                Count
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e5e5] dark:divide-[#323232]">
            {/* Example row - remove or modify as needed */}
            <tr className="transition-colors duration-150 hover:bg-[#f5f5f7] dark:hover:bg-[#252525]">
              <td className="px-4 py-3 font-mono text-sm text-[#1d1d1f] dark:text-white">
                12:34:56.789
              </td>
              <td className="px-4 py-3 font-mono text-sm text-[#1d1d1f] dark:text-white">0x123</td>
              <td className="px-4 py-3 text-sm text-[#1d1d1f] dark:text-white">Engine_Status</td>
              <td className="px-4 py-3 text-sm text-[#1d1d1f] dark:text-white">8</td>
              <td className="px-4 py-3 font-mono text-sm text-[#1d1d1f] dark:text-white">
                FF 00 A1 B2 C3 D4 E5 F6
              </td>
              <td className="px-4 py-3 text-sm text-[#1d1d1f] dark:text-white">42</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveViewer;
