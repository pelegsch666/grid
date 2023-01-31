import { Router } from './components/Router';
import { useRecoilValue } from 'recoil';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import './App.css';
import { Navbar } from './components/Navbar';

import { getDesignTokens } from 'utils/helpers/themeHelpers';
import { themeState } from 'store';
function App() {
  const theme = useRecoilValue(themeState);

	return (
		<ThemeProvider theme={createTheme(getDesignTokens(theme))}>
			<CssBaseline />
			<>
				<Navbar />
				<Router />
			</>
		</ThemeProvider>
	);
  
  
  
  
  
  

}

export default App;
