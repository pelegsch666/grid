import darkTheme from '@/themes/palettes/dark';
import lightTheme from '@/themes/palettes/light';
import winterTheme from '@/themes/palettes/winter';
import { Theme } from '@/types';
import { getThemeByPaletteAndThemeName } from '@/utils/miscUtils';

interface Themes {
	[key: string]: Theme;
}

const themes: Themes = {
	dark: getThemeByPaletteAndThemeName(darkTheme, 'dark'),
	light: getThemeByPaletteAndThemeName(lightTheme, 'light'),
	winter: getThemeByPaletteAndThemeName(winterTheme, 'winter'),
};

export default themes;
