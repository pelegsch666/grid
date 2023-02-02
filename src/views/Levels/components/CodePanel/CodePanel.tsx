// imports from 3rd party libraries

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import { useRecoilState, useSetRecoilState } from 'recoil';

// types
import { CodePanelProps } from 'views/Levels/components/CodePanel/CodePanel.types';

// store
import { currentLevelState, userAnswerOutputState } from 'store';

export const CodePanel = ({ mode }: CodePanelProps) => {
	const [currentLevel, setCurrentLevel] = useRecoilState(currentLevelState);
	const [currentCode, setCurrentCode] = useState('');
	const [initCode, setInitCode] = useState('');
	const setUserAnswerOutput = useSetRecoilState(userAnswerOutputState);

	useEffect(() => {
		setInitCode(currentLevel?.userAnswer?.[mode]);
	}, [currentLevel?.userAnswer, mode]);

	useEffect(() => {
		setCurrentCode(initCode);
	}, [initCode]);

	const onChange = (editor: any, data: any, value: string) => {
		const newUserAnswer = { ...currentLevel.userAnswer };
		newUserAnswer[mode] = value;
		// const newCurrentLevel = { ...currentLevel, userAnswer: newUserAnswer };
		// setCurrentLevel(newCurrentLevel);
		setUserAnswerOutput(newUserAnswer);
	};

	return (
		<>
			<div>{mode}</div>
			<CodeMirror
				onChange={(editor, data, value) => onChange(editor, data, value)}
				options={{
					mode: mode === 'html' ? 'htmlmixed' : mode,
					theme: 'material',
					lineNumbers: true,
					inputStyle: 'textarea',
				}}
				value={currentCode}
			/>
		</>
	);
};
