const { app, BrowserWindow } = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1080,
        height: 1920,
        webPreferences: {
            nodeIntegration: true
        }
    });

    
    mainWindow.loadFile('login.html');
}

app.whenReady().then(createWindow);


