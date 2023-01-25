<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	import Hero from '../lib/components/Hero.svelte';

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

{#if data.session}
	<p>welcome {data.session.user.email}</p>
	<form action="/logout" method="POST" use:enhance={submitLogout}>
		<button type="submit" name="logout">logout</button>
	</form>
{:else}
	<Hero />
{/if}
