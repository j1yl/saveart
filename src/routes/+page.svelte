<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	import Hero from '../lib/components/Hero.svelte';

	export let data: PageData;
	let user_email = data!.session!.user.email;
	let user_image = data!.image;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

{#if data.session}
	<section class="flex flex-col px-4 gap-4">
		<div class="flex flex-row justify-between items-center">
			<div class="w-full flex flex-row justify-between items-center gap-4">
				<h2>hi! {user_email}</h2>
				<form action="/logout" method="POST" use:enhance={submitLogout}>
					<button type="submit" name="?/logout" class="underline text-red-400"
						>click here to logout
					</button>
				</form>
			</div>
		</div>
		<!-- posting section -->
		<form method="POST" action="?/gen" class="flex gap-4 justify-between">
			<input
				type="text"
				name="prompt"
				placeholder="enter a prompt"
				class="text-black p-2 w-full rounded-xl"
			/>
			<button type="submit" class="px-4 py-2 bg-white text-black rounded-xl">generate</button>
		</form>
		{#if data.image}
			<div class="flex flex-col">
				<img src={user_image} alt="gen_image" class="w-full" />
			</div>
		{/if}
	</section>
{:else}
	<Hero />
{/if}
