import { currentLevelState } from '@/store';
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
		<div>
			<div>
				<button onClick={() => handleOutputChange('user')}>User Output</button>
				<button onClick={() => handleOutputChange('target')}>
					Target Output
				</button>
			</div>

			<iframe
				title='iframe'
				width='100%'
				style={{
					backgroundColor: 'white',
					borderStyle: 'solid',
					borderWidth: '3px',
					borderRadius: '20px',
					height: 'calc(100% - 55px)',
					boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
					float: 'right',
				}}
				srcDoc={
					currentOutput === 'user' ? iframeContentUser : iframeContentTarget
				}
			/>
		</div>
	);
};

export default Output;
