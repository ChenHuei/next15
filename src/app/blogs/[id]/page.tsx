export default function Blog(props: { params: { id: string | number } }) {
	return <h1>{props.params.id}</h1>;
}
