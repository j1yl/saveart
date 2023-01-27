import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

const config = new Configuration({
	apiKey: OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

let imageUrl: any;

export const actions: Actions = {
	generate: async ({ request }) => {
		const { prompt } = Object.fromEntries(await request.formData());

		const response = await openai.createImage({
			prompt: prompt as string,
			n: 1,
			size: '256x256'
		});

		imageUrl = response.data.data[0].url;

		if (!imageUrl) {
			fail(400, {
				message: 'No image url'
			});
		}

		return {
			url: imageUrl
		};
	}
};
