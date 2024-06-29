<script lang="ts">
	export let name: string;
	export let category: string = 'Snake Way Division';
	export let price: string;
</script>

<div class="product-card">
	<div class="product-card-photo-block"></div>
	<div class="product-card-text">{name}</div>
	<div class="product-card-text">{category}</div>
	<div class="product-card-text">{price}</div>
	<button>В КОРЗИНУ</button>
</div>

<style>
	.product-card {
		width: 300px;
		height: 375px;
		background-color: var(--light-grey);
	}
	.product-card-photo-block {
		position: relative;
		width: 300px;
		height: 215px;
		background-color: var(--yellow);
	}
	.product-card-text {
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
