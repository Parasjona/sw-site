<script lang="ts">
	export let text: string = '';
	export let color: string = '';

	$: style = `background-color: var(--${color})`;
</script>

<button on:click {style} {...$$restProps}>{text}</button>

<style>
	button {
		all: unset;
		cursor: pointer;
		box-sizing: border-box;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		min-width: 24px;
		min-height: 24px;
		border: 3px solid transparent;
		font-size: 23px;

		&:hover {
			border-color: var(--button-press-grey);
			background-color: var(--button-hover-grey);
		}
	}
	button[aria-current='true'] {
		border-color: var(--button-press-grey);
		background-color: var(--light-grey);

		&:hover {
			border-color: var(--button-press-grey);
			background-color: var(--light-grey);
		}
	}
</style>
