import { Routes, Route } from 'react-router-dom';
import { Home } from '../../views/Home';
import { CodingTasks } from '../../views/CodingTasks';
import { Examples } from '../../views/Examples';
import { Levels } from '../../views/Levels';
import { NotFound } from '../../views/NotFound';
import { Docs } from '../../views/Docs';

export const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coding-tasks" element={<CodingTasks />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/levels" element={<Levels />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
