import { levels } from '@/data/levels';
import { currentLevelIndexState, currentLevelState } from '@/store';
import CodeEditor from '@/views/Levels/components/CodeEditor';
import Instructions from '@/views/Levels/components/Instructions';
import Output from '@/views/Levels/components/Output';
import { Button, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

const LevelTemplate = () => {
	const { levelNumber } = useParams();
	const [currentLevel, setCurrentLevel] = useRecoilState(currentLevelState);
	const setCurrentLevelIndex = useSetRecoilState(currentLevelIndexState);

	useEffect(() => {
		setCurrentLevel(levels[Number(levelNumber) - 1]);
	}, [levelNumber, setCurrentLevel]);

	useEffect(() => {
		setCurrentLevelIndex(Number(levelNumber) - 1);
	}, [levelNumber, setCurrentLevelIndex]);

	const handleSubmit = () => {
		console.log('submit');
	};

	return (
		<>
			<Stack
				spacing={2}
				sx={{
					marginTop: '20px',
				}}
			>
				<Instructions instructions={currentLevel.instructions} />
				<Stack direction='row'>
					<Button
						onClick={handleSubmit}
						variant='contained'
						size='large'
						sx={{
							width: 'fit-content',
						}}
					>
						Submit
					</Button>
				</Stack>

				<Stack
					direction='row'
					sx={{
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<CodeEditor />
					<Output />
				</Stack>
			</Stack>
		</>
	);
};

export default LevelTemplate;
