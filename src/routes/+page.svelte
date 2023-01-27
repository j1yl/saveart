<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ posts } = data);
</script>

<section class="px-8 h-max w-full">
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
</section>
