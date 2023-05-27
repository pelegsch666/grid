// imports from 3rd party libraries
import { atom, RecoilState } from 'recoil';

// constants
import { THEMES_NAMES } from '@/utils/constants';

// types
import { Level } from '@/types';

export const themeState = atom({
	key: 'themeState',
	default: 'springtime',
}) as RecoilState<(typeof THEMES_NAMES)[number]>;

export const levelsState = atom({
	key: 'levelsState',
	default: [] as Level[],
}) as RecoilState<Level[]>;

export const currentLevelIndexState = atom({
	key: 'currentLevelIndexState',
	default: 0,
}) as RecoilState<number>;

export const currentLevelState = atom({
	key: 'currentLevelState',
	default: {} as Level,
}) as RecoilState<Level>;
