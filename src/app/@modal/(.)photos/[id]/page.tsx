import { use } from 'react';
import { Modal } from './modal';

export default function PhotoModal(props: { params: Promise<{ id: string }> }) {
	const { id } = use(props.params);
	return <Modal>{id}</Modal>;
}
