import { use } from 'react';

export default function PhotoDetail(props: {
	params: Promise<{ id: string }>;
}) {
	const { id } = use(props.params);
	return (
		<div className="card">
			<h1>{id} detail</h1>
		</div>
	);
}
