<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import InputField from '$lib/components/InputField.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

{#if data.session}
	<section class="h-[80vh] grid place-items-center w-full">
		<div class="flex flex-col justify-center items-center">
			<div class="flex flex-col justify-between items-center font-semibold">
				<p>Posts by {data.session.user.email}</p>
			</div>
			<form action="/logout" method="POST" use:enhance={submitLogout} class="w-full">
				<button
					type="submit"
					class="p-2 rounded-xl bg-[#B6C1FF] outline outline-2 outline-[#1e1e1e] w-full flex justify-center font-semibold"
					>Logout</button
				>
			</form>
		</div>
	</section>
{:else}
	<section class="h-[80vh] grid place-items-center w-full">
		<form
			action="?/login"
			method="POST"
			class="md:p-32 p-16 outline outline-2 outline-[#1e1e1e] rounded-xl flex flex-col justify-center items-center gap-4 max-w-sm md:max-w-lg w-full"
		>
			<InputField name="email" type="email" placeholder="Email" />
			<InputField name="password" type="password" placeholder="Password" />
			<button
				class="p-2 rounded-xl bg-[#B6C1FF] outline outline-2 outline-[#1e1e1e] w-full flex justify-center font-semibold"
			>
				Login
			</button>
			<div class="w-full flex justify-center text-sm">
				<p>
					Don&apos;t have an account? <a href="/account/register" class="underline">Sign Up</a>
				</p>
			</div>
		</form>
	</section>
{/if}
