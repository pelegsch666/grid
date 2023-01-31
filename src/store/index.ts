import { atom, RecoilState } from 'recoil';

import { THEMES_NAMES } from 'utils/constants';

export const themeState = atom({
	key: 'themeState',
	default: 'springtime',
}) as RecoilState<typeof THEMES_NAMES[number]>;

export const isSettingDrawerOpenState = atom({
	key: 'isSettingDrawerOpenState',
	default: false,
}) as RecoilState<boolean>;
