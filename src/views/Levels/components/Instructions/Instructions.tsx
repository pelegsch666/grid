import { InstructionsProps } from '@/views/Levels/components/Instructions/Instructions.types';
import { Stack, Typography } from '@mui/material';

const Instructions = ({ instructions }: InstructionsProps) => {
	return (
		<Stack
			sx={{
				padding: '1rem',
			}}
		>
			{instructions?.map((instruction, index) => (
				<Typography key={index} variant='body1'>
					{index + 1}. {instruction}
				</Typography>
			))}
		</Stack>
	);
};

export default Instructions;
