<script lang="ts">
	import ChevronRight from './ChevronRight.svelte';

	export let isActive: boolean = undefined;
	export let url: string = undefined;
</script>

<li class="breadcrumb">
	{#if isActive}
		<a class="content active" href={url}>
			<slot />
			<ChevronRight />
		</a>
	{:else}
		<span class="content">
			<slot />
		</span>
	{/if}
</li>

<style>
	.breadcrumb {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		white-space: nowrap;
	}
	.content {
		display: flex;
		align-items: center;
		text-decoration: none;
		position: relative;
		color: black;
		cursor: default;
	}
	.active {
		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}
</style>
