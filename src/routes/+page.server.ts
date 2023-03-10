import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const load: PageServerLoad = async ({ params }) => {
	return {
		posts: await prisma.post.findMany()
	};
};
