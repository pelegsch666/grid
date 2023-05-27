import { Level } from '@/types';

export const getLevelById = (levels: Level[], id: string) => {
	const level = levels.find((level) => level.id === id);
	return level;
};
