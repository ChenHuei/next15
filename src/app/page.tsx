import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<h1>Home</h1>
			<Link href="/photos/1" passHref>
				Photo 1
			</Link>
			<br />
			<Link href="/article/read" passHref>
				Article
			</Link>
			<br />
			<Link href="/template" passHref>
				Template
			</Link>
		</div>
	);
}
