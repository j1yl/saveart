<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';

	export let data: PageData;
	let user_email = data!.session!.user.email;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<section class="px-4">
	<div class="flex flex-col gap-4">
		<div class="flex justify-between items-center gap-4 border-white">
			<h1 class="font-bold text-2xl">welcome back {user_email} !</h1>
			<form action="/logout" method="POST" use:enhance={submitLogout}>
				<button type="submit" name="?/logout" class="px-4 py-2 bg-white text-black rounded-xl"
					>logout</button
				>
			</form>
		</div>
	</div>
	<form action="/gen" method="POST" class="flex flex-col gap-2 mt-4">
		<label for="prompt" class="font-semibold text-red-300"
			>enter a prompt to be converted to a picture in the field below</label
		>
		<input type="text" name="prompt" class="p-2 text-black rounded-xl font-semibold" />
		<button type="submit" class="px-4 py-2 bg-white text-black rounded-xl">generate</button>
	</form>
</section>
