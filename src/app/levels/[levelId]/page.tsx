'use client';
import CodeEditor from '@/app/levels/_components/CodeEditor';
import Instructions from '@/app/levels/_components/Instructions';
import Output from '@/app/levels/_components/Output';
import { levels } from '@/data/levels';
import { currentLevelIdState, currentLevelState } from '@/store';
import { getLevelById } from '@/utils/miscUtils';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

const Level = () => {
	const [currentLevel, setCurrentLevel] = useRecoilState(currentLevelState);
	const setCurrentLevelId = useSetRecoilState(currentLevelIdState);
	const params = useParams();
	const levelId = params.levelId;

	useEffect(() => {
		const newLevel = getLevelById(levels, levelId);
		if (!newLevel) return;
		setCurrentLevel(newLevel);
	}, [levelId, setCurrentLevel]);

	useEffect(() => {
		setCurrentLevelId(levelId);
	}, [levelId, setCurrentLevelId]);

	const handleSubmit = () => {
		console.log('submit');
	};

	return (
		<div>
			Level {levelId}
			<div>
				<h1>Level shit</h1>
				<Instructions instructions={currentLevel.instructions} />
				<div>
					<button onClick={handleSubmit}>Submit</button>
				</div>
				<div>
					<CodeEditor />
					<Output />
				</div>
			</div>
		</div>
	);
};

export default Level;
