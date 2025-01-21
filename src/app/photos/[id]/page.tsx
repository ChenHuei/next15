import { use } from 'react';

export default function Photo(props: { params: Promise<{ id: string }> }) {
	const { id } = use(props.params);
	return (
		<div className="card">
			<h1>{id}</h1>
		</div>
	);
}
