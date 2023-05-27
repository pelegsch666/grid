import { Level } from '@/types';
import { atom, RecoilState } from 'recoil';

export const themeState = atom({
	key: 'themeState',
	default: 'light',
}) as RecoilState<string[number]>;

export const levelsState = atom({
	key: 'levelsState',
	default: [] as Level[],
}) as RecoilState<Level[]>;

export const currentLevelIdState = atom({
	key: 'currentLevelIdState',
	default: '1',
}) as RecoilState<string>;

export const currentLevelState = atom({
	key: 'currentLevelState',
	default: {} as Level,
}) as RecoilState<Level>;
