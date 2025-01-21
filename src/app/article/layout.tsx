'use client';

export default function ArticleLayout({
	children,
	mode,
}: {
	children: React.ReactNode;
	mode: React.ReactNode;
}) {
	return (
		<>
			{children}
			{mode}
		</>
	);
}
