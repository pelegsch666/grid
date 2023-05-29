import { BaseColorVariants, Palette } from '@/types';

const winterTheme: Palette = {
	primary: {
		main: '#4299e1',
		light: '#90cdf4',
		dark: '#2b6cb0',
		getContrastText: (variant: BaseColorVariants) =>
			variant === 'main' ? '#fff' : '#000',
	},
	secondary: {
		main: '#63b3ed',
		light: '#a0aec0',
		dark: '#2c5282',
		getContrastText: (variant: BaseColorVariants) =>
			variant === 'main' ? '#fff' : '#000',
	},
};

export default winterTheme;
