export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<div>Template</div>
			<div>{children}</div>
		</div>
	);
}
