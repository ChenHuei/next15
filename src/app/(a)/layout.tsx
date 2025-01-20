export default function A({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
			<h2>A</h2>
			{children}
		</div>
	);
}
