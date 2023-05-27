import { themeState } from '@/store';
import themes from '@/themes';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

interface AppWrapperProps {
	children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
	const theme = useRecoilValue(themeState);

	return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default AppWrapper;
