// imports rom 3rd party libraries
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRecoilValue, useSetRecoilState } from 'recoil';

// components
import { Navbar } from 'components/Navbar';
import { Router } from 'components/Router';

// styles
import './App.css';

// store
import { levelsState, themeState } from 'store';

// helpers
import { useEffect } from 'react';
import { themeHelpers } from 'utils/helpers/themeHelpers';

// data
import { levels } from 'data/levels';

export const App = () => {
	const theme = useRecoilValue(themeState);
	const setLevels = useSetRecoilState(levelsState);

	useEffect(() => {
		setLevels(levels);
	}, [setLevels]);

	return (
		<ThemeProvider theme={createTheme(themeHelpers.getDesignTokens(theme))}>
			<CssBaseline />
			<>
				<Navbar />
				<Router />
			</>
		</ThemeProvider>
	);
};
