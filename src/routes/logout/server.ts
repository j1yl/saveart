import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals }) => {
	const { error: err } = await locals.sb.auth.signOut();

	if (err) {
		throw error(500, 'Something went wrong when logging you out.');
	}

	throw redirect(303, '/');

	return new Response();
};
