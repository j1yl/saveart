<script lang="ts">
	export let type: string = 'text';
	export let name: string;
	export let placeholder: string = '';
</script>

<input
	{type}
	{name}
	{placeholder}
	class="p-2 placeholder-slate-500 rounded-xl w-full outline-2 outline-[#1e1e1e] outline"
/>
