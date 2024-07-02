<script>
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder } from '../createEventForwarder.ts';
	import CloseIcon from './closeIcon.svelte';

	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
	const forwardEvents = createEventForwarder(get_current_component());
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	use:forwardEvents
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => dialog.close()}>
			<CloseIcon />
		</button>
		<slot />
	</div>
</dialog>

<style>
	dialog {
		position: relative;
		box-sizing: border-box;
		width: 630px;
		height: 360px;
		max-width: 32em;
		border: none;
		padding: 0;
		cursor: default;

		@media (max-width: 640px) {
			width: 90%;
		}
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.8);
	}
	dialog > div {
		box-sizing: border-box;
		padding: 20px;
		height: 100%;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		position: absolute;
		top: 10px;
		right: 10px;
		display: block;
		outline: none;
		cursor: pointer;
		background-color: transparent;
		border: none;
		box-sizing: border-box;
		padding: 0;
	}
</style>
