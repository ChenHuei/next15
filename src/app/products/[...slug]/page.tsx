export default function Slug(props: { params: { slug: (string | number)[] } }) {
	return (
		<h1>
			{props.params.slug.map((item) => (
				<p key={item}>{item}</p>
			))}
		</h1>
	);
}
