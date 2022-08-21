'use strict';
const path = require('path');
const {app, BrowserWindow} = require('electron');
const contextMenu = require('..');

contextMenu();

(async () => {
	await app.whenReady();

	await (new BrowserWindow({})).loadFile(path.join(__dirname, 'fixture.html'));
})();
