import { currentLevelState } from '@/store';
import { MODES } from '@/views/Levels/Levels.constants';
import CodePanel from '@/views/Levels/components/CodePanel/CodePanel';
import { Stack } from '@mui/material';
import { useRecoilValue } from 'recoil';

const CodeEditor = () => {
	const currentLevel = useRecoilValue(currentLevelState);

	return (
		<Stack>
			<CodePanel mode={MODES.HTML} code={currentLevel?.userAnswer?.html} />
			<CodePanel mode={MODES.CSS} code={currentLevel?.userAnswer?.css} />
			<CodePanel mode={MODES.JS} code={currentLevel?.userAnswer?.javascript} />
		</Stack>
	);
};

export default CodeEditor;
