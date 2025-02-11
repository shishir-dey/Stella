// Preload script
const { contextBridge, ipcRenderer } = require('electron');

// Wait for DOM to be ready
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  console.log('Document Mode:', document.compatMode);
  console.log('DOCTYPE:', document.doctype);

  // Ensure root element exists
  const root = document.getElementById('root');
  if (!root) {
    console.error('Root element not found!');
  } else {
    console.log('Root element found');
  }
});

// Handle any errors during load
window.addEventListener('error', event => {
  console.error('Page Error:', event.error);
});

// Expose protected APIs to renderer process
try {
  contextBridge.exposeInMainWorld('electronAPI', {
    // System information
    platform: process.platform,

    // IPC communication
    send: (channel, data) => {
      if (typeof channel !== 'string') throw new Error('Channel must be a string');
      ipcRenderer.send(channel, data);
    },

    receive: (channel, func) => {
      if (typeof channel !== 'string') throw new Error('Channel must be a string');
      if (typeof func !== 'function') throw new Error('Callback must be a function');
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    },

    // Add any other APIs you need to expose to the renderer
  });
} catch (error) {
  console.error('Failed to expose APIs through contextBridge:', error);
}
