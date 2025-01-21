import { use } from 'react';

export default function Blog(props: { params: Promise<{ id: string }> }) {
	const { id } = use(props.params);
	return <h1>{id}</h1>;
}
