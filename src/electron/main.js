import { app, BrowserWindow, protocol } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = !app.isPackaged;

// Improved protocol handler with better error handling and logging
function createProtocolHandler() {
  protocol.registerFileProtocol('app', (request, callback) => {
    const url = request.url.replace('app://', '');
    const basePath = isDev ? path.join(__dirname, '..') : path.join(process.resourcesPath, 'app');
    const filePath = path.join(basePath, 'dist', url);

    console.log('Protocol request:', {
      url,
      basePath,
      filePath,
      exists: fs.existsSync(filePath),
    });

    try {
      if (fs.existsSync(filePath)) {
        return callback(filePath);
      } else {
        console.error('File not found:', filePath);
        return callback({ error: -6 }); // NET::ERR_FILE_NOT_FOUND
      }
    } catch (error) {
      console.error('Protocol handler error:', error);
      return callback({ error: -2 }); // NET::ERR_FAILED
    }
  });
}

async function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      sandbox: true,
      preload: path.join(__dirname, 'preload.cjs'),
    },
  });

  // Set Content Security Policy
  mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [
          "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
        ],
      },
    });
  });

  // Development mode
  if (isDev) {
    try {
      await mainWindow.loadURL('http://localhost:3000');
      mainWindow.webContents.openDevTools();
    } catch (err) {
      console.error('Failed to load dev server:', err);
    }
  } else {
    // Production mode
    try {
      const indexPath = isDev
        ? path.join(__dirname, '..', 'dist', 'index.html')
        : path.join(process.resourcesPath, 'app', 'dist', 'index.html');

      console.log('Loading production index from:', indexPath);

      if (!fs.existsSync(indexPath)) {
        console.error('index.html not found at:', indexPath);
        console.log('Contents of resources path:', fs.readdirSync(process.resourcesPath));
        console.log('Contents of dist directory:', fs.readdirSync(path.dirname(indexPath)));
        throw new Error(`index.html not found at ${indexPath}`);
      }

      await mainWindow.loadFile(indexPath);
      console.log('Production index loaded successfully');
    } catch (err) {
      console.error('Failed to load app:', err);
      console.error('Error details:', err.stack);
      app.quit();
    }
  }

  // Enhanced error logging
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
    console.error('Page load failed:', {
      errorCode,
      errorDescription,
      validatedURL,
    });
  });

  // Add content verification
  mainWindow.webContents.on('did-finish-load', () => {
    console.log('Page finished loading');
    mainWindow.webContents.executeJavaScript(`
      console.log('Document ready state:', document.readyState);
      console.log('Body content:', document.body.innerHTML);
      console.log('Loaded resources:', {
        scripts: Array.from(document.scripts).map(s => s.src),
        styles: Array.from(document.styleSheets).map(s => s.href)
      });
    `);
  });
}

// Initialize app
app.whenReady().then(async () => {
  createProtocolHandler();
  await createWindow();

  app.on('activate', async () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      await createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Handle any uncaught exceptions
process.on('uncaughtException', error => {
  console.error('Uncaught exception:', error);
});
