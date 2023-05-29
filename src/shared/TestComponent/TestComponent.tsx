'use client';

import ConsolePanel from '@/app/_components/ConsolePanel';
import styled from 'styled-components';

const StyledTestComponent = styled.div`
	width: 100%;
	height: fit-content;
	background-color: ${({ theme }) => theme?.primary?.dark};
	color: ${({ theme }) => theme?.primary?.getContrastText('main')};
	padding: 1rem;
`;

const TestComponent = () => {
	return (
		<StyledTestComponent>
			<ConsolePanel />
		</StyledTestComponent>
	);
};

export default TestComponent;
