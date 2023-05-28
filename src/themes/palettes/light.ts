import { BaseColorVariants, Palette } from '@/types';

const lightTheme: Palette = {
	primary: {
		main: '#007bff',
		light: '#66a9ff',
		dark: '#004ba0',
		getContrastText: (variant: BaseColorVariants) =>
			variant === 'main' ? '#fff' : '#000',
	},
	secondary: {
		main: '#6c757d',
		light: '#a0a7ad',
		dark: '#40474d',
		getContrastText: (variant: BaseColorVariants) =>
			variant === 'main' ? '#fff' : '#000',
	},
};

export default lightTheme;
