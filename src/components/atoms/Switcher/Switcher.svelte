<script lang="ts">
	import SwitcherButton from './SwitcherButton.svelte';

	export let label: string = '';
	export let currentOption: string = '';
	export let options: { name: string; color: string }[] = [{ name: '', color: '' }];

	function isCurrent(item: { name: string; color: string }) {
		return !currentOption || currentOption === item.name || currentOption === item.color;
	}
</script>

<div class="wrapper">
	<div class="label">{label}</div>
	<div class="options">
		{#each options as item}
			<SwitcherButton text={item.name} aria-current={isCurrent(item)} />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.label {
		font-size: 28px;
	}
	.options {
		display: flex;
	}
</style>
