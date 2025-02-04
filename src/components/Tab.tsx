'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

export default function Tab() {
	const segment = useSelectedLayoutSegment();

	return (
		<div>
			<p>Active segment: {segment}</p>
		</div>
	);
}
