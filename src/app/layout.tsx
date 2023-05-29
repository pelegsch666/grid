'use client';

import AppWrapper from '@/app/_components/AppWrapper';
import StyledComponentsRegistry from '@/lib/registry';
import Navbar from '@/shared/Navbar';
import React from 'react';
import RecoilWrapper from './_components/RecoilWrapper ';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`}
					rel='stylesheet'
				/>
				<title>Code Grid</title>
			</head>
			<body>
				<StyledComponentsRegistry>
					<RecoilWrapper>
						<AppWrapper>
							<Navbar />
							{children}
						</AppWrapper>
					</RecoilWrapper>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
};

export default RootLayout;
