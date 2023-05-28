'use client'

import { currentLevelState } from '@/store';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

interface CodePanelProps {
	code: string;
	mode: 'html' | 'css' | 'javascript';
}

const CodePanel = ({ mode }: CodePanelProps) => {
	const [currentLevel, setCurrentLevel] = useRecoilState(currentLevelState);

	const getExtension = useCallback(() => {
		switch (mode) {
			case 'html':
				return html();
			case 'css':
				return css();
			case 'javascript':
				return javascript({ jsx: true });
			default:
				return html();
		}
	}, [mode]);

	const onChange = useCallback(
		(value: string) => {
			setCurrentLevel((prev) => ({
				...prev,
				userAnswer: {
					...prev.userAnswer,
					[mode]: value,
				},
			}));
		},
		[setCurrentLevel, mode]
	);

	return (
		<>
			<p>{mode}</p>
			<CodeMirror
				value={currentLevel?.userAnswer?.[mode]}
				height='200px'
				extensions={[getExtension()]}
				onChange={onChange}
			/>
		</>
	);
};

export default CodePanel;
