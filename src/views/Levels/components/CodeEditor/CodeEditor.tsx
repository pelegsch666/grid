// types
import { CodeEditorProps } from 'views/Levels/components/CodeEditor/CodeEditor.types';

export const CodeEditor = ({
	initContainerCssProperties,
	initItemCssProperties,
	userCssProperties,
}: CodeEditorProps) => {
	console.log(initContainerCssProperties);
	console.log(initItemCssProperties);
	console.log(userCssProperties);
	return null;
};
