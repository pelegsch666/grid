// imports from 3rd party libraries
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

// types
import { OutputProps } from 'views/Levels/components/Output/Output.types';

// store
import { userAnswerOutputState } from 'store';

export const Output = (props: OutputProps) => {
	const userAnswerOutput = useRecoilValue(userAnswerOutputState);
	const [html, setHtml] = useState('');
	const [css, setCss] = useState('');
	const [javascript, setJavascript] = useState('');
	const [iframeContent, setIframeContent] = useState('');

	useEffect(() => {
		setHtml(userAnswerOutput?.html);
		setCss(userAnswerOutput?.css);
		setJavascript(userAnswerOutput?.javascript);
	}, [userAnswerOutput]);

	useEffect(() => {
		setIframeContent(`
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
	}, [html, css, javascript, userAnswerOutput]);

	return (
		<Box
			sx={{
				border: '1px solid black',
				width: '100%',
			}}
		>
			<iframe
				title="iframe"
				width="100%"
				height="100%"
				srcDoc={iframeContent}
			/>
		</Box>
	);
};
