<script lang="ts">
	import InputField from '$lib/components/InputField.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.session}
	<section class="h-[80vh] grid place-items-center w-full">
		<div class="flex flex-col justify-center items-center">
			<p class="font-semibold">You are already logged in!</p>
			<a href="/" class="underline">Return to home</a>
		</div>
	</section>
{:else}
	<section class="h-[80vh] grid place-items-center w-full">
		<form
			action="?/register"
			method="POST"
			class="md:p-32 p-16 outline outline-2 outline-[#1e1e1e] rounded-xl flex flex-col justify-center items-center gap-4 max-w-sm md:max-w-lg w-full"
		>
			<InputField name="email" type="email" placeholder="Email" />
			<InputField name="email" type="password" placeholder="Password" />
			<button
				class="p-2 rounded-xl bg-[#B6C1FF] outline outline-2 outline-[#1e1e1e] w-full flex justify-center font-semibold"
			>
				Sign Up
			</button>
			<div class="w-full flex justify-center text-sm">
				<p>
					Already have an account? <a href="/account" class="underline">Sign In</a>
				</p>
			</div>
		</form>
	</section>
{/if}
