export default function Photo(props: { params: { id: string } }) {
	return (
		<div>
			<div>抓到</div>
			<h1>{props.params.id}</h1>
		</div>
	);
}
