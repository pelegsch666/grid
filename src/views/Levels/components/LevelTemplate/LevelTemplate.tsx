// imports from 3rd party libraries
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// components
import { CodeEditor } from 'views/Levels/components/CodeEditor';
import { Instructions } from 'views/Levels/components/Instructions';
import { Output } from 'views/Levels/components/Output';

// data
import { levels } from 'data/levels';

export const LevelTemplate = () => {
	const { levelNumber } = useParams();

	const [currentLevel, setCurrentLevel] = useState(
		levels[Number(levelNumber) - 1]
	);

	useEffect(() => {
		setCurrentLevel(levels[Number(levelNumber) - 1]);
	}, [levelNumber]);

	return (
		<>
			<Typography
				variant="h2"
				sx={{
					textAlign: 'center',
				}}
			>
				Level {levelNumber}
			</Typography>
			<Stack direction="row" spacing={2}>
				<Stack>
					<Instructions instructions={currentLevel.instructions} />
					<CodeEditor
						initContainerCssProperties={currentLevel.initContainerCssProperties}
						initItemCssProperties={currentLevel.initItemCssProperties}
						userCssProperties={currentLevel.userCssProperties}
					/>
				</Stack>
				<Output
					initContainerCssProperties={currentLevel.initContainerCssProperties}
					initItemCssProperties={currentLevel.initItemCssProperties}
					userCssProperties={currentLevel.userCssProperties}
				/>
			</Stack>
		</>
	);
};
