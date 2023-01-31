// imports from 3rd party libraries
import { Route, Routes } from 'react-router-dom';

// components
import { CodingTasks } from 'views/CodingTasks';
import { Docs } from 'views/Docs';
import { Examples } from 'views/Examples';
import { Home } from 'views/Home';
import { Levels } from 'views/Levels';
import { LevelTemplate } from 'views/Levels/components/LevelTemplate';
import { NotFound } from 'views/NotFound';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/coding-tasks" element={<CodingTasks />} />
			<Route path="/examples" element={<Examples />} />
			<Route path="/levels" element={<Levels />}>
				<Route path=":levelNumber" element={<LevelTemplate />} />
			</Route>
			<Route path="/docs" element={<Docs />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
