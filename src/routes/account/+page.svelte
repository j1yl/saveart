<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import InputField from '$lib/components/InputField.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ posts } = data);

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
		<div class="flex flex-col justify-center items-center gap-8">
			<div class="flex flex-col gap-4 justify-between items-center font-semibold">
				<p>Posts by {data.session.user.email}</p>
				<form action="/logout" method="POST" use:enhance={submitLogout} class="w-full">
					<button
						type="submit"
						class="p-2 rounded-xl bg-[#B6C1FF] outline outline-2 outline-[#1e1e1e] w-full flex justify-center font-semibold"
						>Logout</button
					>
				</form>
			</div>
			<div class="flex md:flex-row flex-wrap gap-4 justify-between w-full">
				{#each posts as post}
					<div
						class="relative outline outline-2 outline-[#1e1e1e] md:w-[250px] md:h-[250px] w-max h-max rounded-xl"
					>
						<img src={post.url} alt="placeholder" class="rounded-xl" />
						<p
							class="absolute bottom-0 p-2 w-full h-1/4 text-sm bg-opacity-50 bg-black text-white rounded-xl"
						>
							{post.caption}
						</p>
					</div>
				{/each}
			</div>
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
			<div class="w-full flex flex-col justify-center text-sm">
				<p>Demo Account<br />lefodevtesting@gmail.com<br />testaccount123</p>
				<p>
					Don&apos;t have an account? <a href="/account/register" class="underline">Sign Up</a>
				</p>
			</div>
		</form>
	</section>
{/if}
