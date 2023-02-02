// types
import { Level } from 'types';

export const levels: Level[] = [
	{
		id: '1',
		instructions: ['Define the div as Grid container'],
		correctAnswer: {
			javascript: '',
			html: `<div id="grid-container">
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
</div>
			`,
			css: `#grid-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0 auto;
	width: fit-content;
	gap: 10px;
}

.grid-item {
	background-color: rgb(99, 66, 22);
	width: 100px;
	height: 100px;
	margin: 2px;
}
			`,
		},
		userAnswer: {
			javascript: '',
			html: `<div id="grid-container">
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
</div>
			`,
			css: `#grid-container {
	margin: 0 auto;
	width: fit-content;
	gap: 10px;
}

.grid-item {
	background-color: rgb(99, 66, 22);
	width: 100px;
	height: 100px;
	margin: 2px;
}
			`,
		},
	},
];

// {
// 	id: '2',
// 	instructions: [
// 		'Define the div as Grid container',
// 		'Define the Grid container with 5 columns',
// 	],
// 	initContainerCssProperties: {},
// 	initItemCssProperties: {},
// 	userCssProperties: {},
// },
// {
// 	id: '3',
// 	instructions: [
// 		'Define the div as Grid container',
// 		'Define all the columns with a 20% width of the whole Grid container',
// 	],
// 	initContainerCssProperties: {},
// 	initItemCssProperties: {},
// 	userCssProperties: {},
// },
