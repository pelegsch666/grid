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
	{
		id: '2',
		instructions: ['New level'],
		correctAnswer: {
			javascript: '',
			html: `<div class="grid-container">
	<div class="grid-item">1</div>
	<div class="grid-item">2</div>
	<div class="grid-item">3</div>
	<div class="grid-item">4</div>
	<div class="grid-item">5</div>
	<div class="grid-item">6</div>
	<div class="grid-item">7</div>
	<div class="grid-item">8</div>
	<div class="grid-item">9</div>
</div>`,
			css: `.grid-container {
	display: inline-grid;
	grid-template-columns: auto auto auto;
	background-color: #2c885f;
	padding: 10px;
}
.grid-item {
	background-color: rgba(255, 255, 255, 0.8);
	border: 1px solid rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	font-size: 30px;
	text-align: center;
	width: 100px;
	height: 100px;
}`,
		},
		userAnswer: {
			javascript: '',
			html: `<div class="grid-container">
	<div class="grid-item">1</div>
	<div class="grid-item">2</div>
	<div class="grid-item">3</div>
	<div class="grid-item">4</div>
	<div class="grid-item">5</div>
	<div class="grid-item">6</div>
	<div class="grid-item">7</div>
	<div class="grid-item">8</div>
	<div class="grid-item">9</div>
</div>`,
			css: `.grid-container {
	background-color: #2c885f;
	padding: 10px;
}
.grid-item {
	background-color: rgba(255, 255, 255, 0.8);
	border: 1px solid rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	font-size: 30px;
	text-align: center;
	width: 100px;
	height: 100px;
}`,
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
