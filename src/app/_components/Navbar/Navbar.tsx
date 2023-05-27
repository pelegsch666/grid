import Link from 'next/link';

const Navbar = () => {
	return (
		<nav>
			<Link href='/'>Home</Link>
			<Link href='/levels'>Levels</Link>
		</nav>
	);
};

export default Navbar;
