'use client';

import React from 'react';
import styled from 'styled-components';

const ConsoleWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme?.primary?.dark};
	color: ${({ theme }) => theme?.primary?.getContrastText('main')};
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const ConsoleHeader = styled.div`
	width: 100%;
	height: 30px;
	background-color: ${({ theme }) => theme?.primary?.main};
	color: ${({ theme }) => theme?.primary?.getContrastText('main')};

`;

const ConsoleBody = styled.div`
	width: 100%;
	height: 80%;
	background-color: ${({ theme }) => theme?.primary?.main};
	color: ${({ theme }) => theme?.primary?.getContrastText('main')};

`





const ConsolePanel = () => {
	return (
		<ConsoleWrapper>
			<ConsoleHeader>Console.lod</ConsoleHeader>
            <ConsoleBody>
				Hello World
			</ConsoleBody>
		</ConsoleWrapper>
	);
};

export default ConsolePanel;
