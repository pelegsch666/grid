'use client';

import { levels } from '@/data/levels';
import Link from 'next/link';

const LevelsNavbar = () => {
	return (
		<nav
			style={{
				display: 'flex',
				flexDirection: 'row',
				gap: '10px',
			}}
		>
			{levels.map((level, index) => (
				<Link href={`/levels/${index + 1}`} key={index}>
					<p>{index + 1}</p>
				</Link>
			))}
		</nav>
	);
};

export default LevelsNavbar;
