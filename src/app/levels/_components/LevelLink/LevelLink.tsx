'use client';

import Link from 'next/link';
import React from 'react';
interface LevelLinkProps {
	levelIndex: number;
}

const LevelLink = ({ levelIndex }: LevelLinkProps) => {
	return (
		<button>
			<Link
				style={{
					textDecoration: 'none',
					color: 'inherit',
					width: '100%',
					height: '100%',
				}}
				href={`/levels/${levelIndex + 1}`}
			>
				{levelIndex + 1}
			</Link>
		</button>
	);
};

export default LevelLink;
