const moment = require('moment');
const { shell } = require('electron'); // deconstructing assignment
const fs = require('fs');
const { isNullOrUndefined } = require('util');

window.$ = window.jQuery = require('./vendors/jquery/custom-jquery');
require('../node_modules/bootstrap-treeview/public/js/bootstrap-treeview');

const customTitlebar = require('custom-electron-titlebar');

let customTitleBar = new customTitlebar.Titlebar({
	backgroundColor: customTitlebar.Color.fromHex('#444'),
});

customTitleBar.updateIcon('./assets/icono.png');
customTitleBar.updateTitle('Generate Batch App');

const $date = document.querySelector('#date');
setInterval(() => {
	$date.innerHTML = moment().format('DD/MM/YYYY  h:mm:ss a');
}, 100);

$(function() {
	const defaultData = [
		{
			text: 'Presentacion',
			href: '#parent1',
			selectable: false,
			state: {
				checked: false,
				expanded: false,
			},
			nodes: [
				{
					text: 'WPOLIQA01',
					href: '#WPOLIQA01',
					selectable: false,
					nodes: [
						{
							text: 'Comcel.Repos.BankPoints.Common',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.Common1',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication1',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom1',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.Common2',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication2',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom2',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.Common3',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication3',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom3',
							href: '#parent2',
							selectable: false,
						},
					],
				},
				{
					text: 'WPOLIQA02',
					href: '#WPOLIQA02',
					selectable: false,
					nodes: [
						{
							text: 'Comcel.Repos.BankPoints.Common',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.Common1',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication1',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom1',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.Common2',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication2',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom2',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.Common3',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication3',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom3',
							href: '#parent2',
							selectable: false,
						},
					],
				},
				{
					text: 'WPOLIQA03',
					href: '#WPOLIQA03',
					selectable: false,
					nodes: [
						{
							text: 'Comcel.Repos.BankPoints.Common',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.Common',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.Common',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.Common',
							href: '#parent1',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication',
							href: '#parent2',
							selectable: false,
						},
						{
							text: 'Comcel.Repos.BankPoints.ConsoleApplication.pruebaNom',
							href: '#parent2',
							selectable: false,
						},
					],
				},
			],
		},
	];

	let projectsSelected = [];

	var $checkableTree = $('#treeview-checkable').treeview({
		data: defaultData,
		showIcon: false,
		showCheckbox: true,
		onNodeChecked: function(event, node) {
			// si el nodo no tiene nodos hijos es una aplicacion por lo que se obtiene el padre que es el servidor
			if (isNullOrUndefined(node.nodes)) {
				const parent = $('#treeview-checkable').treeview('getParent', node);
				let counter = projectsSelected.filter(x => x.nameParent == parent.text).length;

				if (counter >= 1) {
					$(`#resume #count${parent.text}`).html(counter + 1);
				} else {
					let resumeDescription = `<div class="col-md-3 justify-content-between" id="${parent.text}">
												<small class="text-muted">Servidor: <span>${parent.text}</span></small>
												<br />
												<small class="text-muted">Cantidad de proyectos: <span id="count${parent.text}">1</span></small>
											</div>`;

					$('#resume').append(resumeDescription);
				}

				projectsSelected.push({
					nameParent: parent.text,
					projectName: node.text,
				});
			}
		},
		onNodeUnchecked: function(event, node) {
			if (isNullOrUndefined(node.nodes)) {
				projectsSelected = projectsSelected.filter(x => x.projectName != node.text);

				const parent = $('#treeview-checkable').treeview('getParent', node);
				let counter = projectsSelected.filter(x => x.nameParent == parent.text).length;
				console.log(counter);
				if (counter == 0) {
					$(`#resume #${parent.text}`).remove();
				} else {
					$(`#resume #count${parent.text}`).html(counter);
				}
			}
		},
	});
});

const linkFolders = document.querySelectorAll('.link-result');

linkFolders.forEach(element => {
	element.addEventListener('click', e => {
		if (!fs.existsSync(e.target.dataset.path)) {
			fs.mkdirSync(e.target.dataset.path);
		}
		shell.openItem(e.target.dataset.path);
	});
});

// const User = {
// 	name: 'Eren Jeger',
// 	friends: new Set(['Mikasa', 'Armin', 'Levi']),
// };

// const userString = JSON.stringify(User);

// console.log(userString);
