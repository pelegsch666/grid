// imports from 3rd party libraries
import { useState } from 'react';
import { useRecoilState } from 'recoil';

// types
import { CodeEditorProps } from 'views/Levels/components/CodeEditor/CodeEditor.types';

// components
import { CodePanel } from 'views/Levels/components/CodePanel/CodePanel';

// store
import { codeState } from 'views/Levels/Levels.store';

// constants
import { MODES } from 'views/Levels/Levels.constants';

export const CodeEditor = ({
	initContainerCssProperties,
	initItemCssProperties,
	userCssProperties,
}: CodeEditorProps) => {
	const [code, setCode] = useRecoilState(codeState);

	// console.log(initContainerCssProperties);
	// console.log(initItemCssProperties);
	// console.log(userCssProperties);

	return (
		<>
			<CodePanel mode={MODES.JS} code={code.javascript} setCode={setCode} />
			<CodePanel mode={MODES.CSS} code={code.css} setCode={setCode} />
			<CodePanel mode={MODES.HTML} code={code.html} setCode={setCode} />
		</>
	);
};
