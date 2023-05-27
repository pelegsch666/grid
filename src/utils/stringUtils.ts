export const regularCaseToKebabCase = (str: string) => {
	const resStr = str.toLowerCase().replace(/ /g, '-');
	return resStr;
};
