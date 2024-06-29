<script lang="ts">
	export let name: string;
	export let category: string = 'Snake Way Division';
	export let price: string;
	export let photo: string[] = [''];
	import { base } from '$app/paths';

	const CARD_WIDTH = 293;
	const createSrcUrl = (photo: string) => {
		if (photo === '') return undefined;
		return `${base}/images/products/${photo}`;
	};

	let imgIndex = 0;
	let imgNumber = photo ? photo.length : 0;
	let sliderWidth = imgNumber > 1 ? CARD_WIDTH / imgNumber : 0;
	let style: string = undefined;

	let srcUrl = createSrcUrl(photo[imgIndex]);

	$: {
		const left = imgIndex * sliderWidth;
		style = `width: ${sliderWidth}px; left: ${left}px`;
	}
</script>

<div class="product-card">
	<div class="product-card-photo-block">
		{#if srcUrl}
			<img class="avatar" src={srcUrl} alt={name} />
			<div class="product-card-photo-block-slideline-zone">
				<div class="product-card-photo-block-slider" {style}></div>
			</div>
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

		&:hover {
			box-shadow: var(--hover-shadow);
		}
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
	.product-card-photo-block-slideline-zone {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 10px;
		width: 100%;
	}
	.product-card-photo-block-slider {
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: var(--yellow);
		opacity: 0.7;
		height: 100%;
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
