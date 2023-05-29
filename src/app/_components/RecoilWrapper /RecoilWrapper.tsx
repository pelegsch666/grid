'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilWrapperPros {
	children: React.ReactNode;
}

const RecoilWrapper = ({ children }: RecoilWrapperPros) => {
	return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilWrapper;
