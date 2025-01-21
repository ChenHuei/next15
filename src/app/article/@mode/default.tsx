import Link from 'next/link';

export default function ModeDefault() {
	return (
		<nav>
			<Link href="/article/read">Read</Link>
			<Link href="/article/edit">Edit</Link>
		</nav>
	);
}
