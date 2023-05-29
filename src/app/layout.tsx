'use client'
import React from 'react';
import Navbar from '@/app/_components/Navbar';
import { Inter } from 'next/font/google';
import AppWrapper from '@/app/_components/AppWrapper';
import RecoilWrapper from './_components/RecoilWrapper ';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				<RecoilWrapper>
					<AppWrapper>
						<Navbar />
						{children}
					</AppWrapper>
				
				</RecoilWrapper>
			</body>
		</html>
	);
};

export default RootLayout;
