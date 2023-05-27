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
	correctAnswer: {
		javascript: string;
		html: string;
		css: string;
	};
	userAnswer: {
		javascript: string;
		html: string;
		css: string;
	};
}
