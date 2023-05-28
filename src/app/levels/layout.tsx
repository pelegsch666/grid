'use client';

import LevelsNavbar from '@/app/levels/_components/LevelsNavbar';

import React from 'react';

const LevelLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<LevelsNavbar />
			{children}
		</div>
	);
};

export default LevelLayout;
