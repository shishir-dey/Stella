import React from 'react';

const Toolbar = ({ isConnected, onConnectionToggle }) => {
  return (
    <div className="flex h-16 items-center justify-between border-b border-[#e5e5e5] px-4 dark:border-[#323232]">
      <div className="flex items-center gap-4 overflow-x-auto">
        <div className="flex min-w-fit items-center gap-2">
          <span className="text-sm whitespace-nowrap text-[#86868b] dark:text-[#a1a1a6]">
            Hardware:
          </span>
          <select className="focus-ring w-40 rounded-md border border-[#e5e5e5] bg-[#f5f5f7] px-2 py-1.5 text-sm text-[#1d1d1f] dark:border-[#424242] dark:bg-[#323232] dark:text-white">
            <option>PCAN-USB</option>
            <option>CP2102 USB to UART Bridge</option>
            <option>Kvaser</option>
            <option>SocketCAN</option>
          </select>
        </div>
        <div className="flex min-w-fit items-center gap-2">
          <span className="text-sm whitespace-nowrap text-[#86868b] dark:text-[#a1a1a6]">
            Port:
          </span>
          <select className="focus-ring w-28 rounded-md border border-[#e5e5e5] bg-[#f5f5f7] px-2 py-1.5 text-sm text-[#1d1d1f] dark:border-[#424242] dark:bg-[#323232] dark:text-white">
            <option>usb0</option>
            <option>usb1</option>
            <option>can0</option>
            <option>can1</option>
          </select>
        </div>
        <div className="flex min-w-fit items-center gap-2">
          <span className="text-sm whitespace-nowrap text-[#86868b] dark:text-[#a1a1a6]">
            Bitrate:
          </span>
          <select className="focus-ring w-24 rounded-md border border-[#e5e5e5] bg-[#f5f5f7] px-2 py-1.5 text-sm text-[#1d1d1f] dark:border-[#424242] dark:bg-[#323232] dark:text-white">
            <option>1000000</option>
            <option>500000</option>
            <option>250000</option>
            <option>125000</option>
            <option>100000</option>
            <option>83333</option>
            <option>50000</option>
            <option>33333</option>
            <option>20000</option>
            <option>10000</option>
          </select>
        </div>
        <div className="flex min-w-fit items-center gap-2">
          <span className="text-sm whitespace-nowrap text-[#86868b] dark:text-[#a1a1a6]">
            Mode:
          </span>
          <select className="focus-ring w-28 rounded-md border border-[#e5e5e5] bg-[#f5f5f7] px-2 py-1.5 text-sm text-[#1d1d1f] dark:border-[#424242] dark:bg-[#323232] dark:text-white">
            <option>Normal</option>
            <option>Listen Only</option>
            <option>Loopback</option>
          </select>
        </div>
        <div className="flex min-w-fit flex-wrap items-center gap-3">
          <label className="flex items-center gap-1.5">
            <input
              type="checkbox"
              className="form-checkbox rounded-sm border-[#e5e5e5] text-blue-500 dark:border-[#424242]"
            />
            <span className="text-sm whitespace-nowrap text-[#86868b] dark:text-[#a1a1a6]">
              FD Mode
            </span>
          </label>
          <label className="flex items-center gap-1.5">
            <input
              type="checkbox"
              className="form-checkbox rounded-sm border-[#e5e5e5] text-blue-500 dark:border-[#424242]"
            />
            <span className="text-sm whitespace-nowrap text-[#86868b] dark:text-[#a1a1a6]">
              Auto Restart
            </span>
          </label>
          <label className="flex items-center gap-1.5">
            <input
              type="checkbox"
              className="form-checkbox rounded-sm border-[#e5e5e5] text-blue-500 dark:border-[#424242]"
            />
            <span className="text-sm whitespace-nowrap text-[#86868b] dark:text-[#a1a1a6]">
              Extended Frame
            </span>
          </label>
        </div>
      </div>
      <button
        onClick={onConnectionToggle}
        className={`focus-ring ml-4 rounded-md px-4 py-1.5 text-sm font-medium whitespace-nowrap ${
          isConnected
            ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
            : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20'
        }`}
      >
        {isConnected ? 'Disconnect' : 'Connect'}
      </button>
    </div>
  );
};

export default Toolbar;
