const { app, BrowserWindow, globalShortcut } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 300,
        title: "Cringify",
        autoHideMenuBar: true,
    });

    win.loadFile("index.html");
}

app.whenReady()
    .then(() => {
        globalShortcut.register("Alt+CommandOrControl+I", () => {
            createWindow();
        });
    })
    .then(createWindow);

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
