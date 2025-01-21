import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<nav>
				<Link href="/article/read">Read</Link>
				<Link href="/article/edit">Edit</Link>
			</nav>
			<div>{children}</div>
		</>
	);
}
