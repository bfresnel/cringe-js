const { QMainWindow } = require("@nodegui/nodegui");

const win = new QMainWindow();

win.setMinimumSize(800,600);

win.show();

global.win = win; // To prevent win from being garbage collected.