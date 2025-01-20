'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

export default function Dashboard({
	children,
	list,
	chart,
}: {
	children: React.ReactNode;
	list: React.ReactNode;
	chart: React.ReactNode;
}) {
	const chartSegment = useSelectedLayoutSegment('chart');
	const listSegment = useSelectedLayoutSegment('list');
	console.log('listSegment;', listSegment, 'chartSegment', chartSegment);

	return (
		<>
			{children}
			{list}
			{chart}
		</>
	);
}
