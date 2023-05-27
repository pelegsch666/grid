import { Level } from '@/types';
import { StringHelpers } from '@/utils/helpers/StringHelpers';

export const Helpers = {
	StringHelpers,
};

export const getLevelById = (levels: Level[], id: string) => {
	const level = levels.find((level) => level.id === id);
	return level;
};
