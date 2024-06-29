<script lang="ts">
	export let name: string;
	export let category: string = 'Snake Way Division';
	export let price: string;
	export let photo: string = undefined;
	import { base } from '$app/paths';

	const srcUrl = `${base}/images/products/${photo}`;
</script>

<div class="product-card">
	<div class="product-card-photo-block">
		{#if photo}
			<img class="avatar" src={srcUrl} alt={name} />
			<div class="product-card-photo-block-slideline"></div>
		{:else}
			<div class="product-card-text">Товар на фотосессии</div>
		{/if}
	</div>
	<div class="product-card-text">{name}</div>
	<div class="product-card-text">{category}</div>
	<div class="product-card-text">{price}</div>
	<button>В КОРЗИНУ</button>
</div>

<style>
	.product-card {
		height: 375px;
		background-color: var(--light-grey);
		padding: 0;
	}
	.product-card-photo-block {
		position: relative;
		width: 293px;
		height: 210px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.product-card-photo-block-slideline {
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: var(--yellow);
		height: 10px;
		width: 100%;
		opacity: 0.7;
	}
	.product-card-text {
		text-align: center;
		font-size: 23px;
	}
	button {
		all: unset;
		cursor: pointer;
		width: 272px;
		height: 58px;
		background-color: var(--button-base-grey);
		font-family: 'Century Gothic Bold';
		font-size: 30px;
	}
</style>
