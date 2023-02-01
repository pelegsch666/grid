// imports from 3rd party libraries

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material.css';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import { useRecoilState } from 'recoil';

// types
import { CodePanelProps } from 'views/Levels/components/CodePanel/CodePanel.types';
import { CodeInput } from 'views/Levels/Levels.types';

// store
import { codeState } from 'views/Levels/Levels.store';

export const CodePanel = ({ mode }: CodePanelProps) => {
	const [code, setCode] = useRecoilState(codeState);

	const onChange = (editor: any, data: any, value: string) => {
		const newCode = { ...codeState } as any; // TODO: fix this
		newCode[mode] = value;
		setCode(newCode);
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
				value={code[mode]}
			/>
		</>
	);
};
