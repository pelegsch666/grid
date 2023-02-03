// imports from 3rd party libraries
import { Button, Stack, Typography, useTheme } from '@mui/material';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

// store
import { levelsState } from 'store';

export interface LevelLinkProps {
	levelIndex: number;
}

export const LevelLink = ({ levelIndex }: LevelLinkProps) => {
	const { levelNumber } = useParams();
	const isCurrentLevel = Number(levelNumber) === levelIndex + 1;
	const { palette } = useTheme();
	return (
		<Button
			variant="contained"
			sx={{
				backgroundColor: isCurrentLevel
					? palette.secondary.main
					: palette.primary.main,

				fontSize: '1.5rem',
				padding: '0',

				'&:hover': {
					backgroundColor: isCurrentLevel
						? palette.secondary.dark
						: palette.primary.dark,
				},
			}}
		>
			<NavLink
				style={{
					textDecoration: 'none',
					color: 'inherit',
					width: '100%',
					height: '100%',
				}}
				to={`/levels/${levelIndex + 1}`}
			>
				{levelIndex + 1}
			</NavLink>
		</Button>
	);
};

export const Levels = () => {
	const levels = useRecoilValue(levelsState);
	return (
		<>
			<Stack direction="row" spacing={2}>
				{levels.map((level, index) => (
					<LevelLink key={level.id} levelIndex={index} />
				))}
			</Stack>
			<Outlet />
		</>
	);
};

// 1.	Define a div as Grid container.
// 2.	Define the number of columns.
// a.	Define the Grid container with 5 columns.
// 3.	Define the width of the columns.
// a.	Define all the columns with a 20% width of the whole Grid container.
// 4.	Define the number of rows.
// a.	Define the Grid container with 5 rows.
// 5.	Define the width of the rows.
// a.	Define all the rows with a 20% width of the whole Grid rows.
