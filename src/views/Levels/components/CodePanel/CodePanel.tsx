import { currentLevelState } from '@/store';
import { CodePanelProps } from '@/views/Levels/components/CodePanel/CodePanel.types';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { Typography } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

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
			<Typography
				variant='h2'
				sx={{
					fontSize: '1.5rem',
					fontWeight: 'bold',
				}}
			>
				{mode}
			</Typography>
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
