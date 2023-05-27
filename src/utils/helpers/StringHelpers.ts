const regularCaseToKebabCase = (str: string) => {
	const resStr = str.toLowerCase().replace(/ /g, '-');
	return resStr;
};

export const StringHelpers = {
	regularCaseToKebabCase,
};
