import type { Actions, PageServerLoad } from './$types';
import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

const configuration = new Configuration({
	organization: 'org-aqYEappnqwfpXQGbk8dOy6wL',
	apiKey: OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

let imageUrl: any;

export const actions: Actions = {
	gen: async ({ request }) => {
		const body = Object.fromEntries(await request.formData());
		// openai dalle
		const response = await openai.createImage({
			prompt: body.prompt as string,
			n: 1,
			size: '256x256'
		});
		imageUrl = response.data.data[0].url;
		return {
			status: 201
		};
	}
};

export const load: PageServerLoad = async ({ params }) => {
	return {
		image: imageUrl
	};
};
