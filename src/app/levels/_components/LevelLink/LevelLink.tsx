import Link from 'next/link';
import { useRouter } from 'next/router';

interface LevelLinkProps {
	levelIndex: number;
}

const LevelLink = ({ levelIndex }: LevelLinkProps) => {
	const { levelNumber } = useRouter().query;
	return (
		<button>
			<Link
				style={{
					textDecoration: 'none',
					color: 'inherit',
					width: '100%',
					height: '100%',
				}}
				href={`/levels/${levelIndex + 1}`}
			>
				{levelIndex + 1}
			</Link>
		</button>
	);
};

export default LevelLink;
