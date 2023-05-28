export type CustomPaletteModeState = 'light';

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

export type BaseColorVariants = 'main' | 'light' | 'dark';

export interface Palette {
	primary: {
		main: string;
		light: string;
		dark: string;
		// eslint-disable-next-line
		getContrastText: (variant: BaseColorVariants) => string;
	};
	secondary: {
		main: string;
		light: string;
		dark: string;
		// eslint-disable-next-line
		getContrastText: (variant: BaseColorVariants) => string;
	};
}

export interface Typography {
	h1: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	h2: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	h3: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	h4: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	h5: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	h6: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	subtitle1: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	subtitle2: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	body1: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	body2: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	button: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	caption: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
	overline: {
		fontSize: string;
		fontWeight: number;
		lineHeight: number;
	};
}

export interface Theme extends Partial<Palette & Typography> {
	mode: string;
}
