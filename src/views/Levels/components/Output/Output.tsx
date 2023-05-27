import { currentLevelState } from '@/store';
import { Box, Button, ButtonGroup, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

const Output = () => {
	const currentLevel = useRecoilValue(currentLevelState);
	const [html, setHtml] = useState('');
	const [css, setCss] = useState('');
	const [javascript, setJavascript] = useState('');
	const [iframeContentUser, setIframeContentUser] = useState('');
	const [iframeContentTarget, setIframeContentTarget] = useState('');
	const [currentOutput, setCurrentOutput] = useState('user');
	const theme = useTheme();

	useEffect(() => {
		setHtml(currentLevel?.userAnswer?.html);
		setCss(currentLevel?.userAnswer?.css);
		setJavascript(currentLevel?.userAnswer?.javascript);
	}, [currentLevel?.userAnswer]);

	useEffect(() => {
		const { html, css, javascript } = currentLevel?.correctAnswer || {};
		setIframeContentTarget(`
		<!DOCTYPE html>
		<html>
		  <head>
			<style>
			  ${css}
			</style>
		  </head>
		  <body>
			${html}
			<script>
			${javascript}
			</script>
		  </body>
		</html>
	  `);
	}, [currentLevel?.correctAnswer]);

	useEffect(() => {
		setIframeContentUser(`
		<!DOCTYPE html>
		<html>
		  <head>
			<style>
			  ${css}
			</style>
		  </head>
		  <body>
			${html}
			<script>
			${javascript}
			</script>
		  </body>
		</html>
	  `);
	}, [html, css, javascript]);

	const handleOutputChange = (output: 'user' | 'target') => {
		setCurrentOutput(output);
	};

	return (
		<Box
			sx={{
				minWidth: 'fit-content',
				width: '1200px',
			}}
		>
			<ButtonGroup
				sx={{
					justifyContent: 'center',
					width: '100%',
					marginBottom: '20px',
				}}
			>
				<Button
					variant={currentOutput === 'user' ? 'contained' : 'outlined'}
					onClick={() => handleOutputChange('user')}
				>
					User Output
				</Button>
				<Button
					variant={currentOutput === 'target' ? 'contained' : 'outlined'}
					onClick={() => handleOutputChange('target')}
				>
					Target Output
				</Button>
			</ButtonGroup>

			<iframe
				title='iframe'
				width='100%'
				style={{
					backgroundColor: 'white',
					borderStyle: 'solid',
					borderWidth: '3px',
					borderColor: theme.palette.primary.main,
					borderRadius: '20px',
					height: 'calc(100% - 55px)',
					boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
					float: 'right',
				}}
				srcDoc={
					currentOutput === 'user' ? iframeContentUser : iframeContentTarget
				}
			/>
		</Box>
	);
};

export default Output;
