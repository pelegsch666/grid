import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme?.primary?.main};
  color: ${({ theme }) => theme?.primary?.getContrastText('main')};
  height: 2rem;
  width: 4rem;
`;
const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme?.primary?.dark};
  color: ${({ theme }) => theme?.primary?.getContrastText('main')};
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  gap: 1rem;
  text-align: center;
  border: 2px solid red;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <StyledDiv>
        <Link href="/">Home</Link>
      </StyledDiv>
      <StyledDiv>
        <Link href="/levels">Levels</Link>
      </StyledDiv>
      
    </StyledNav>
  );
};

export default Navbar;
