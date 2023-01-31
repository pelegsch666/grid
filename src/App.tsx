// imports rom 3rd party libraries
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';

// components
import { Navbar } from 'components/Navbar';
import { Router } from 'components/Router';

// styles
import './App.css';

// store
import { themeState } from 'store';

// helpers
import { themeHelpers } from 'utils/helpers/themeHelpers';

export const App = () => {
	const theme = useRecoilValue(themeState);

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
