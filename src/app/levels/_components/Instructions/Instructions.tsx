interface InstructionsProps {
	instructions: string[];
}

const Instructions = ({ instructions }: InstructionsProps) => {
	return (
		<div>
			{instructions?.map((instruction, index) => (
				<p key={index}>
					{index + 1}. {instruction}
				</p>
			))}
		</div>
	);
};

export default Instructions;
