import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	console.log('request', request);
	return Response.json({ message: 'Hello World' });
}
