export default async function Photo({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<div className="card">
			<h1>{id}</h1>
		</div>
	);
}
