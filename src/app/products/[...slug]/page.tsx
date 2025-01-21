import { use } from 'react';

export default function Slug(props: { params: Promise<{ slug: string[] }> }) {
	const { slug } = use(props.params);
	return (
		<div>
			{slug.map((item) => (
				<p key={item}>{item}</p>
			))}
		</div>
	);
}
