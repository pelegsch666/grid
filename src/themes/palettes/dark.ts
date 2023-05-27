import { BaseColorVariants, Palette } from '@/types';

const darkTheme: Palette = {
	primary: {
		main: '#e83e8c',
		light: '#ff7ac9',
		dark: '#a00058',
		getContrastText: (variant: BaseColorVariants) =>
			variant === 'main' ? '#fff' : '#000',
	},
	secondary: {
		main: '#17a2b8',
		light: '#4fc7d1',
		dark: '#0d7686',
		getContrastText: (variant: BaseColorVariants) =>
			variant === 'main' ? '#fff' : '#000',
	},
};

export default darkTheme;
