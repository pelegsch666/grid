import { THEMES_NAMES } from '@/utils/constants';

import { palettes } from '@/theme/palettes';

const getDesignTokens = (mode: (typeof THEMES_NAMES)[number]) => {
	if (palettes[mode]) {
		return palettes[mode];
	} else {
		return palettes.light;
	}
};

export const themeHelpers = {
	getDesignTokens,
};
