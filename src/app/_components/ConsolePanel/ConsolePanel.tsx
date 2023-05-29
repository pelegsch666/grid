'use client';

import React from 'react';
import styled from 'styled-components';

const ConsoleWrapper = styled.div`
	width: 100%;
	height: 5rem;
	background-color: ${({ theme }) => theme?.primary?.dark};
	color: ${({ theme }) => theme?.primary?.getContrastText('main')};
	padding: 1rem;
	display: flex;
`;
const ConsoleHeader = styled.div`
	width: 100%;
	height: 30px;
	background-color: ${({ theme }) => theme?.primary?.main};
	color: ${({ theme }) => theme?.primary?.getContrastText('main')};
`;

const ConsolePanel = () => {
	return (
		<ConsoleWrapper>
			<ConsoleHeader>Console.lod</ConsoleHeader>
		</ConsoleWrapper>
	);
};

export default ConsolePanel;
