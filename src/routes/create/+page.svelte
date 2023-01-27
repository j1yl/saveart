<script lang="ts">
	import InputField from '$lib/components/InputField.svelte';
	import type { ActionData, PageData } from './$types';
	export let data: PageData;
	export let form: ActionData;
	let count = 0;
</script>

{#if data.session}
	<section class="h-[80vh] w-full grid place-items-center">
		<div
			class="flex flex-col md:flex-row justify-between gap-16 p-6 outline outline-2 outline-[#1e1e1e] rounded-xl"
		>
			<form class="flex flex-col gap-4" method="POST" action="?/generate">
				<InputField placeholder="Enter your prompt" name="prompt" type="text" />
				<div class="w-[256px] h-[256px] rounded-xl outline outline-2 outline-[#1e1e1e]">
					{#if form?.url}
						<img src={form?.url} alt="gen_img" class="h-full w-full" />
					{/if}
				</div>
				<div class="flex flex-row gap-2">
					<button
						type="submit"
						class="p-2 rounded-xl bg-[#B6C1FF] outline outline-2 outline-[#1e1e1e] w-full flex justify-center font-semibold"
					>
						Generate ({count})
					</button>
					<a
						href="/"
						class="p-2 rounded-xl bg-[#B6C1FF] outline outline-2 outline-[#1e1e1e] w-full flex justify-center font-semibold"
					>
						Cancel
					</a>
				</div>
			</form>
			<div class="flex flex-col-reverse md:flex-col justify-between">
				<p class="p-2">Your email: {data.session?.user.email}</p>
				<form method="POST" action="?/new_post" class="flex flex-col gap-4">
					<InputField placeholder="Add your caption" name="caption" type="text" />
					<button
						type="submit"
						class="p-2 rounded-xl bg-[#B6C1FF] outline outline-2 outline-[#1e1e1e] w-full flex justify-center font-semibold"
					>
						Create Post
					</button>
				</form>
			</div>
		</div>
	</section>
{:else}
	<section class="grid place-items-center h-[80vh]">
		<div class="flex flex-col justify-center items-center">
			<p>Hey! You need a verified account to create posts.</p>
			<a href="/account/register" class="underline">Signup for an account.</a>
		</div>
	</section>
{/if}
