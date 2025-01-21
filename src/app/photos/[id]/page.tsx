export default async function Photo({ params }: { params: { id: string } }) {
	const { id } = await params;
	return (
		<div className="card">
			<h1>{id}</h1>
		</div>
	);
}
