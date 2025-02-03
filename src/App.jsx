import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Toolbar from './components/Toolbar/Toolbar';
import LiveViewer from './components/LiveViewer/LiveViewer';
import DatabaseViewer from './components/DatabaseViewer/DatabaseViewer';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('live-viewer');
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="fade-in flex h-screen bg-[#f5f5f7] dark:bg-[#1e1e1e]">
      {/* Window Controls (macOS style) */}
      <div className="window-controls absolute left-0 right-0 top-0 flex h-7 items-center space-x-2 bg-[#f5f5f7] px-4 dark:bg-[#1e1e1e]">
        <div className="h-3 w-3 rounded-full bg-[#ff5f57] transition-all hover:brightness-90" />
        <div className="h-3 w-3 rounded-full bg-[#febc2e] transition-all hover:brightness-90" />
        <div className="h-3 w-3 rounded-full bg-[#28c840] transition-all hover:brightness-90" />
      </div>

      {/* Main Content */}
      <div className="mt-7 flex w-full">
        <Sidebar selectedTab={selectedTab} onTabChange={setSelectedTab} />

        <div className="flex flex-1 flex-col">
          <div className="glass-effect">
            <Toolbar
              isConnected={isConnected}
              onConnectionToggle={() => setIsConnected(!isConnected)}
            />
          </div>

          <div className="flex-1 p-6">
            {selectedTab === 'live-viewer' ? <LiveViewer /> : <DatabaseViewer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
