// imports from 3rd party libraries
import { Stack } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

// store
import { levelsState } from 'store';

export interface LevelLinkProps {
	levelIndex: number;
}

export const LevelLink = ({ levelIndex }: LevelLinkProps) => {
	return <NavLink to={`/levels/${levelIndex + 1}`}>{levelIndex + 1}</NavLink>;
};

export const Levels = () => {
	const levels = useRecoilValue(levelsState);
	return (
		<>
			<h1>Iam Levels</h1>
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
