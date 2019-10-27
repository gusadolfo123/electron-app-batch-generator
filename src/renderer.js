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
	var defaultData = [
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
							text: 'Comcel.Repos.BankPoints.CommonComcel.Repos.BankPoints.Common',
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

	$('#chk-select-multi:checkbox').on('change', function() {
		console.log('multi-select change');
		$selectableTree = initSelectableTree();
		selectableNodes = findSelectableNodes();
	});

	let projectsSelected = [];

	var $checkableTree = $('#treeview-checkable').treeview({
		data: defaultData,
		showIcon: false,
		showCheckbox: true,
		onNodeChecked: function(event, node) {
			// si el nodo no tiene nodos hijos es una aplicacion por lo que se obtiene el padre que es el servidor
			if (isNullOrUndefined(node.nodes)) {
				const parent = $('#treeview-checkable').treeview('getParent', node);
				projectsSelected.push({
					nameParent: parent.text,
					projectName: node.text,
				});
			}

			$('#result').prepend('<p>' + node.text + ' was checked</p>');
		},
		onNodeUnchecked: function(event, node) {
			$('#result').prepend('<p>' + node.text + ' was unchecked</p>');
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
