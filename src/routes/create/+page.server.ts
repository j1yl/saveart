import type { Actions } from './$types';
import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const config = new Configuration({
	apiKey: OPENAI_API_KEY
});

let curr: any | undefined;

const openai = new OpenAIApi(config);

export const actions: Actions = {
	generate: async ({ request }) => {
		const { prompt } = Object.fromEntries(await request.formData());
		const response = await openai.createImage({
			prompt: prompt as string,
			n: 1,
			size: '256x256'
		});
		curr = response.data.data[0].url;
		return {
			url: response.data.data[0].url
		};
	},

	new_post: async ({ request }) => {
		const { caption, author } = Object.fromEntries(await request.formData());
		const post = await prisma.post.create({
			data: {
				caption: caption as string,
				url: curr as string,
				author: author as string
			}
		});
		return {
			status: 200,
			body: post
		};
	}
};
