import styled from 'styled-components';

const StyledTestComponent = styled.div`
	background-color: ${({ theme }) => theme?.primary?.main};
	color: ${({ theme }) => theme?.primary?.getContrastText('main')};
	padding: 1rem;
`;

const TestComponent = () => {
	return <StyledTestComponent>
		hi
	</StyledTestComponent>;
};

export default TestComponent;
