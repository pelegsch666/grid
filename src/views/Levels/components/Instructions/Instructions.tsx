// imports from 3rd party libraries
import { Stack, Typography } from '@mui/material';

// types
import { InstructionsProps } from 'views/Levels/components/Instructions/Instructions.types';

export const Instructions = ({ instructions }: InstructionsProps) => {
	return (
		<Stack
			sx={{
				padding: '1rem',
			}}
		>
			{instructions.map((instruction, index) => (
				<Typography key={index} variant="body1">
					{index + 1}. {instruction}
				</Typography>
			))}
		</Stack>
	);
};
