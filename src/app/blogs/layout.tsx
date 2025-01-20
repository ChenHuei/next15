export default function BlogLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
			<h2>Blog Layout</h2>
			{children}
		</div>
	);
}
