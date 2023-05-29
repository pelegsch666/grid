'use client';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: ${({ theme }) => theme?.primary?.getContrastText('main')};
  padding: 1rem;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
`;
const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme?.primary?.main};
  color: ${({ theme }) => theme?.primary?.getContrastText('main')};
  padding: 1rem;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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
      <StyledDiv>
      </StyledDiv>
    </StyledNav>
  );
};

export default Navbar;
