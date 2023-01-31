export type CustomPaletteModeState =
	| 'light'
	| 'dark'
	| 'fantasy'
	| 'muiLight'
	| 'muiDark'
	| 'emerald'
	| 'nature'
	| 'sunset'
	| 'pastel'
	| 'springtime'
	| 'mystical'
	| 'ethereal';

export interface UserProperty {
	type: 'container' | 'item';
	correct: boolean;
	correctAnswer: string;
	userAnswer: string;
}

export interface Level {
	id: string;
	instructions: string[];
	initContainerCssProperties: {
		[key: string]: string;
	};
	initItemCssProperties: {
		[key: string]: string;
	};
	userCssProperties: {
		[key: string]: UserProperty;
	};
}
