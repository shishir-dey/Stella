import React from 'react';

const DatabaseViewer = () => {
  return (
    <div className="h-full rounded-xl border border-[#e5e5e5] bg-white/80 shadow-sm backdrop-blur-xl dark:border-[#323232] dark:bg-[#1e1e1e]/80">
      <div className="p-6">
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-[#1d1d1f] dark:text-white">DBC File</label>
            <button className="rounded-md bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-500 transition-all duration-200 hover:bg-blue-500/20">
              Load DBC
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Select DBC file..."
              className="flex-1 rounded-md border border-[#e5e5e5] bg-[#f5f5f7] px-4 py-2 text-sm text-[#1d1d1f] placeholder-[#86868b] transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-[#424242] dark:bg-[#323232] dark:text-white dark:placeholder-[#a1a1a6]"
              value="/Users/user/Desktop/sample.dbc"
              readOnly
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#e5e5e5] dark:border-[#323232]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e5e5e5] bg-[#f5f5f7] dark:border-[#323232] dark:bg-[#252525]">
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#86868b] dark:text-[#a1a1a6]">
                  Message ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#86868b] dark:text-[#a1a1a6]">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#86868b] dark:text-[#a1a1a6]">
                  Length
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#86868b] dark:text-[#a1a1a6]">
                  Cycle Time
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-[#86868b] dark:text-[#a1a1a6]">
                  Signals
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e5e5] dark:divide-[#323232]">
              {/* Example row - remove or modify as needed */}
              <tr className="transition-colors duration-150 hover:bg-[#f5f5f7] dark:hover:bg-[#252525]">
                <td className="px-4 py-3 text-sm text-[#1d1d1f] dark:text-white">0x123</td>
                <td className="px-4 py-3 text-sm text-[#1d1d1f] dark:text-white">Engine_Status</td>
                <td className="px-4 py-3 text-sm text-[#1d1d1f] dark:text-white">8</td>
                <td className="px-4 py-3 text-sm text-[#1d1d1f] dark:text-white">100ms</td>
                <td className="px-4 py-3 text-sm text-[#1d1d1f] dark:text-white">12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DatabaseViewer;
