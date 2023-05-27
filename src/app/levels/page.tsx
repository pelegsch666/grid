import LevelLink from '@/app/levels/_components/LevelLink';
import { levelsState } from '@/store';
import { useRecoilValue } from 'recoil';

interface LevelLinkProps {
	levelIndex: number;
}

const Levels = () => {
	const levels = useRecoilValue(levelsState);
	return (
		<div>
			{levels.map((level, index) => (
				<LevelLink key={level.id} levelIndex={index} />
			))}
		</div>
	);
};

export default Levels;

// 1.	Define a div as Grid container.
// 2.	Define the number of columns.
// a.	Define the Grid container with 5 columns.
// 3.	Define the width of the columns.
// a.	Define all the columns with a 20% width of the whole Grid container.
// 4.	Define the number of rows.
// a.	Define the Grid container with 5 rows.
// 5.	Define the width of the rows.
// a.	Define all the rows with a 20% width of the whole Grid rows.
