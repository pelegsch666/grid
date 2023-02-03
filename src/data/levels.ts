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
		instructions: [
			'Define the <div> with the class "grid-container" as Grid container',
			'Define the Grid container with 3 columns',
		],
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
	{
		id: '3',
		instructions: [
			'modify the CSS so that the first and second grid items are in the first row and span both columns, and the rest of the items are in the second and third rows, each taking up one column',
		],
		correctAnswer: {
			javascript: '',
			html: `
<div class="grid-container">
	<div class="grid-item">1</div>
	<div class="grid-item">2</div>
	<div class="grid-item">3</div>
	<div class="grid-item">4</div>
	<div class="grid-item">5</div>
	<div class="grid-item">6</div>
</div>
`,

			css: `
.grid-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
}

.grid-item {
	text-align: center;
	padding: 20px 0;
	font-size: 30px;
	background-color: salmon;
}

.grid-item:nth-child(-n + 2) {
	grid-column: span 2;
}
`,
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
</div>
`,

			css: `.grid-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
}

.grid-item {
	text-align: center;
	padding: 20px 0;
	font-size: 30px;
	background-color: salmon;
}`,
		},
	},
	{
		id: '4',
		instructions: [
			'Modify the CSS so that the first, fourth, and seventh items take up the entire row and span all three columns, and the rest of the items take up one column each',
		],
		correctAnswer: {
			javascript: ``,
			html: `<div class="grid-container">
	<div class="item item-1">1</div>
	<div class="item item-2">2</div>
	<div class="item item-3">3</div>
	<div class="item item-4">4</div>
	<div class="item item-5">5</div>
	<div class="item item-6">6</div>
	<div class="item item-7">7</div>
	<div class="item item-8">8</div>
	<div class="item item-9">9</div>
</div>`,
			css: `.grid-container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 10px;
}

.item-1,
.item-4,
.item-7 {
	grid-column: span 3;
}

.item {
	background-color: #ddd;
	border: 2px solid #333;
	padding: 10px;
	font-size: 30px;
	text-align: center;
}`,
		},
		userAnswer: {
			javascript: ``,
			html: `<div class="grid-container">
	<div class="item item-1">1</div>
	<div class="item item-2">2</div>
	<div class="item item-3">3</div>
	<div class="item item-4">4</div>
	<div class="item item-5">5</div>
	<div class="item item-6">6</div>
	<div class="item item-7">7</div>
	<div class="item item-8">8</div>
	<div class="item item-9">9</div>
</div>`,
			css: `.grid-container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 10px;
}

.item {
	background-color: #ddd;
	border: 2px solid #333;
	padding: 10px;
	font-size: 30px;
	text-align: center;
}`,
		},
	},
	{
		id: '5',
		instructions: [
			'Add a script that will add the numbers 1-9 to the grid items in order',
		],
		correctAnswer: {
			javascript: `const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item, index) => {
	item.textContent = index + 1;
});`,
			html: `<div class="grid-container">
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
</div>`,
			css: `.grid-container {
	display: inline-grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 10px;
}

.grid-item {
	background-color: #a53f3f;
	border: 4px solid #333;
	color: #fff;
	font-size: 2.5rem;
	text-align: center;
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Arial, Helvetica, sans-serif;
}`,
		},
		userAnswer: {
			javascript: ``,
			html: `<div class="grid-container">
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
	<div class="grid-item"></div>
</div>`,
			css: `.grid-container {
	display: inline-grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 10px;
}

.grid-item {
	background-color: #a53f3f;
	border: 4px solid #333;
	color: #fff;
	font-size: 2.5rem;
	text-align: center;
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Arial, Helvetica, sans-serif;
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

// {
// 	id: '4',
// 	instructions: [],
// 	correctAnswer: {
// 		javascript: ``,
// 		html: ``,
// 		css: ``,
// 	},
// 	userAnswer: {
// 		javascript: ``,
// 		html: ``,
// 		css: ``,
// 	},
// },
