import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
export const GET: RequestHandler = async ({ params, url }) => {
	console.log('???');
	return json({ foo: 'bar' });
};
