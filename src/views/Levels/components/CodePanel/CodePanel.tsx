// imports from 3rd party libraries

import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';

import { useEffect, useState } from 'react';

import { Typography } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useCallback } from 'react';

// types
import { CodePanelProps } from 'views/Levels/components/CodePanel/CodePanel.types';

// store
import { currentLevelState, userAnswerOutputState } from 'store';

export const CodePanel = ({ mode }: CodePanelProps) => {
	const currentLevel = useRecoilValue(currentLevelState);
	const [currentCode, setCurrentCode] = useState('');
	const [initCode, setInitCode] = useState('');
	const setUserAnswerOutput = useSetRecoilState(userAnswerOutputState);
	const userAnswerOutput = useRecoilValue(userAnswerOutputState);

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

	useEffect(() => {
		setInitCode(currentLevel?.userAnswer?.[mode]);
	}, [currentLevel?.userAnswer, mode]);

	useEffect(() => {
		setCurrentCode(initCode);
	}, [initCode]);

	const onChange = useCallback(
		(value: string, viewUpdate: any) => {
			setCurrentCode(value);
			setUserAnswerOutput({
				...userAnswerOutput,
				[mode]: value,
			});
		},
		[mode, setUserAnswerOutput, userAnswerOutput]
	);

	return (
		<>
			<Typography
				variant="h2"
				sx={{
					fontSize: '1.5rem',
					fontWeight: 'bold',
				}}
			>
				{mode}
			</Typography>
			<CodeMirror
				value={currentCode}
				height="200px"
				extensions={[getExtension()]}
				onChange={onChange}
			/>
		</>
	);
};
