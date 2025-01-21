export default async function Blog(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params;
	return <h1>{id}</h1>;
}
