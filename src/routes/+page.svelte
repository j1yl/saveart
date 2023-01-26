<script lang="ts">
	import type { PageData } from './$types';

	import Hero from '../lib/components/Hero.svelte';
	import Dashboard from '$lib/components/Dashboard.svelte';

	export let data: PageData;
</script>

{#if data.session}
	<Dashboard {data} />
{:else}
	<Hero />
{/if}
