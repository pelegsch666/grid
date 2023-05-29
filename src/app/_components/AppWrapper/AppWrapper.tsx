'use client'
import { themeState } from '@/store';
import themes from '@/themes';
import { Theme } from '@/types';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';


interface CustomThemeProviderProps {
	children: React.ReactNode;
	theme: Theme;
}

const CustomThemeProvider = ({ children, theme }: CustomThemeProviderProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

interface AppWrapperProps {
	children: React.ReactNode;
}


const AppWrapper = ({ children }: AppWrapperProps) => {
	const themeName = useRecoilValue(themeState);
	const theme: Theme = themes[themeName];

	return <CustomThemeProvider theme={theme}>{children}</CustomThemeProvider>;
};

export default AppWrapper;
