'use client';

import { useParams } from 'next/navigation';

const Level = () => {
	const params = useParams();
	const levelId = Number(params.levelId);

	return <div>Level {levelId}</div>;
};

export default Level;
