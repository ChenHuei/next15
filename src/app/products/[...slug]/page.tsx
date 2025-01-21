export default async function Slug(props: {
	params: Promise<{ slug: string[] }>;
}) {
	const { slug } = await props.params;
	return (
		<div>
			{slug.map((item) => (
				<p key={item}>{item}</p>
			))}
		</div>
	);
}
