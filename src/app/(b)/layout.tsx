export default function B({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
			<h2>B</h2>
			{children}
		</div>
	);
}
