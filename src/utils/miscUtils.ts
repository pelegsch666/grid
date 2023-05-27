import typography from '@/themes/typography';
import { Level, Palette } from '@/types';

export const getLevelById = (levels: Level[], id: string) => {
	const level = levels.find((level) => level.id === id);
	return level;
};

export const getThemeByPaletteAndThemeName = (
	palette: Palette,
	mode: string
) => {
	const theme = {
		mode: mode,
		...palette,
		...typography,
	};
	return theme;
};
