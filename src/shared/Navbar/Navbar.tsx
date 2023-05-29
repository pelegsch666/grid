'use client';

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
	background-color: ${({ theme }) => theme?.primary?.main};
	color: black;
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
			<div>
				<Link href='/'>Home</Link>
			</div>
			<div>
				<Link href='/levels'>Levels</Link>
			</div>
		</StyledNav>
	);
};

export default Navbar;
