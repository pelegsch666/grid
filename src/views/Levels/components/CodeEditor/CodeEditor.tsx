// imports from 3rd party libraries
import { Stack } from '@mui/material';
import { useRecoilValue } from 'recoil';

// components
import { CodePanel } from 'views/Levels/components/CodePanel/CodePanel';

// store
import { currentLevelState } from 'store';

// constants
import { MODES } from 'views/Levels/Levels.constants';

export const CodeEditor = () => {
	const currentLevel = useRecoilValue(currentLevelState);

	return (
		<>
			<Stack>
				<CodePanel mode={MODES.HTML} code={currentLevel?.userAnswer?.html} />
				<CodePanel mode={MODES.CSS} code={currentLevel?.userAnswer?.css} />
				<CodePanel
					mode={MODES.JS}
					code={currentLevel?.userAnswer?.javascript}
				/>
			</Stack>
		</>
	);
};
