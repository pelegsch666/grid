'use client';

import CodeEditor from '@/app/levels/_components/CodeEditor';
import Instructions from '@/app/levels/_components/Instructions';
import LevelsNavbar from '@/app/levels/_components/LevelsNavbar';
import Output from '@/app/levels/_components/Output';
import { levels } from '@/data/levels';
import { currentLevelIndexState, currentLevelState } from '@/store';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

const LevelLayout = ({ children }: { children: React.ReactNode }) => {
	const [currentLevel, setCurrentLevel] = useRecoilState(currentLevelState);
	const setCurrentLevelIndex = useSetRecoilState(currentLevelIndexState);

	// useEffect(() => {
	// 	setCurrentLevel(levels[Number(levelNumber) - 1]);
	// }, [levelNumber, setCurrentLevel]);

	// useEffect(() => {
	// 	setCurrentLevelIndex(Number(levelNumber) - 1);
	// }, [levelNumber, setCurrentLevelIndex]);

	// const handleSubmit = () => {
	// 	console.log('submit');
	// };

	return (
		<div>
			<LevelsNavbar />
			{children}
			<div>
				{/* <Instructions instructions={currentLevel.instructions} /> */}
				{/* <div>
					<button onClick={handleSubmit}>Submit</button>
				</div> */}
				{/* <div>
					<CodeEditor />
					<Output />
				</div> */}
			</div>
		</div>
	);
};

export default LevelLayout;
