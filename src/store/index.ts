import { atom, RecoilState } from 'recoil';

import { THEMES_NAMES } from 'utils/constants';

// types
import { Level } from 'types';

export const themeState = atom({
	key: 'themeState',
	default: 'springtime',
}) as RecoilState<typeof THEMES_NAMES[number]>;

export const isSettingDrawerOpenState = atom({
	key: 'isSettingDrawerOpenState',
	default: false,
}) as RecoilState<boolean>;

export const levelsState = atom({
	key: 'levelsState',
	default: [] as Level[],
}) as RecoilState<Level[]>;
