import styled from 'styled-components';

interface StyledTestComponentProps {
	test: string;
}

const StyledTestComponent = styled.div<StyledTestComponentProps>`
	background-color: ${({ test }) => test};
	color: ${({ theme }) => theme.primary.getContrastText('main')};
	padding: 1rem;
`;

const TestComponent = () => {
	return <StyledTestComponent test='salmon'>hi</StyledTestComponent>;
};

export default TestComponent;
