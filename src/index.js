const url = require('url');
const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');

if (process.env.NODE_ENV !== 'production') {
	require('electron-reload')(__dirname, {
		electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
	});
}

let mainWindow = null;
let newServerWindows = null;

app.on('ready', () => {
	// custom menu bat

	// se crea una instancia de una ventada como ambito global para luego poderce cerrar en otra funcion
	//  frame: false quita el menu superior
	mainWindow = new BrowserWindow({
		// frame: false,
		// maxWidth: 1400,
		// maxHeight: 800,
		minHeight: 800,
		minWidth: 1400,
		width: 1400,
		height: 800,
		webPreferences: {
			nodeIntegration: true,
		},
		icon: path.join(__dirname, 'assets/icono.png'),
	});

	// indicamos que debe cargar un archivo en la ventana
	mainWindow.loadURL(
		url.format({
			pathname: path.join(__dirname, 'views/index.html'),
			protocol: 'file',
			slashes: true, // indica que se carga mediante rutas como si fuera web
		}),
	);

	// quitar menu por defecto de la ventana
	// mainWindow.setMenuBarVisibility(false);

	// creacion de menu personalizado lo dejo como accion de un link
	const mainMenu = Menu.buildFromTemplate(templateMenu);
	Menu.setApplicationMenu(mainMenu);

	// se escucha el evento cuando se cierre la ventana principal
	mainWindow.on('closed', () => {
		app.quit();
	});
});

// menu personalizado y sus eventos respectivos
const templateMenu = [
	{
		label: 'File',
		submenu: [
			{
				label: 'New Server',
				accelerator: 'Ctrl+N',
				click() {
					if (newServerWindows == null) createNewServerWindow();
					else newServerWindows.focus();
				},
			},
			{
				label: 'Exit',
				accelerator: process.platform == 'darwin' ? 'command+Q' : 'Ctrl+Q',
				click() {
					app.quit();
				},
			},
		],
	},
];

function createNewServerWindow() {
	newServerWindows = new BrowserWindow({
		width: 400,
		height: 450,
		resizable: false,
		title: 'New Server',
		webPreferences: {
			nodeIntegration: true,
		},
	});

	// indicamos que debe cargar un archivo en la ventana
	newServerWindows.loadURL(
		url.format({
			pathname: path.join(__dirname, 'views/newServer.html'),
			protocol: 'file',
			slashes: true, // indica que se carga mediante rutas como si fuera web
		}),
	);

	// quitar menu por defecto de la ventana
	// newServerWindows.setMenu(null);

	// se escucha el evento cuando se cierre la ventana principal
	newServerWindows.on('closed', () => {
		newServerWindows = null;
	});
}

// agregar devtools herramienta de desarrollo
if (process.env.NODE_ENV !== 'production') {
	templateMenu.push({
		label: 'devtools',
		submenu: [
			{
				label: 'Show/Hide Dev Tools',
				click(item, focusedWindow) {
					focusedWindow.toggleDevTools();
				},
			},
			{
				role: 'reload',
			},
		],
	});
}
