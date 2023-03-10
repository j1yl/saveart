import { PrismaClient } from '@prisma/client';
import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
const prisma = new PrismaClient();

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		const { data, error: err } = await locals.sb.auth.signInWithPassword({
			email: body.email as string,
			password: body.password as string
		});
		if (err) {
			console.log(err);
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: 'Invalid credentials.'
				});
			}
			return fail(500, {
				message: 'Server error. Please try again later.'
			});
		}
		throw redirect(303, '/');
	}
};

export const load: PageServerLoad = async (event) => {
	const { session } = await getSupabase(event);
	return {
		posts: await prisma.post.findMany({
			where: {
				author: {
					equals: session?.user.email
				}
			}
		})
	};
};
