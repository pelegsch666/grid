'use client';

import CodePanel from '@/app/levels/_components/CodePanel';
import { MODES } from '@/app/levels/_utils/_constants';
import { currentLevelState } from '@/store';
import { useRecoilValue } from 'recoil';

const CodeEditor = () => {
	const currentLevel = useRecoilValue(currentLevelState);

	return (
		<div>
			<CodePanel mode={MODES.HTML} code={currentLevel?.userAnswer?.html} />
			<CodePanel mode={MODES.CSS} code={currentLevel?.userAnswer?.css} />
			<CodePanel mode={MODES.JS} code={currentLevel?.userAnswer?.javascript} />
		</div>
	);
};

export default CodeEditor;
