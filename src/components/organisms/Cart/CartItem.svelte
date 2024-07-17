<script>
	import { ButtonQuantityChange } from '@components/atoms/ButtonQuantityChange';
	import { createProductImgSrcUrl } from '../../utils';

	export let quantity = 2;
	export let name = 'Футболка';
	export let category = 'Snake Way Division';
	export let color = 'красная';
	export let size = 'M';
	export let price = 3000;
	export let photo = '';

	let item = `${name} ${category} ${color} ${size}`;
	let totalSumm = `${price * quantity}р.`;
	let srcUrl = createProductImgSrcUrl(photo);

	const handleIncrement = () => {
		const newValue = quantity === 9 ? 9 : quantity + 1;
		quantity = newValue;
	};
	const handleDecrement = () => {
		const newValue = quantity === 0 ? 0 : quantity - 1;
		quantity = newValue;
	};
</script>

<div class="wrapper">
	<div class="photo-block">
		<img class="product-photo" src={srcUrl} alt={name} />
	</div>
	<div class="text-block">{item}</div>
	<div class="quantity-block">
		<ButtonQuantityChange on:click={handleDecrement}>&minus;</ButtonQuantityChange>
		<div class="quantity-text">{quantity}</div>
		<ButtonQuantityChange on:click={handleIncrement}>+</ButtonQuantityChange>
	</div>

	<div class="price-block">{totalSumm}</div>
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.photo-block {
		width: 296px;
		height: 197px;
		background-color: red;
		overflow: hidden;
		text-align: center;
		flex-shrink: 0;
	}
	.product-photo {
		width: 296px;
	}
	.text-block {
		font-size: 20px;
		@media (max-width: 640px) {
			font-size: 14px;
		}
	}
	.price-block {
		font-size: 25px;
		@media (max-width: 640px) {
			font-size: 17px;
		}
	}
	.quantity-block {
		display: flex;
		align-items: center;
		font-size: 25px;
		@media (max-width: 640px) {
			font-size: 170px;
		}
	}
	.quantity-text {
		font-size: 28px;
		width: 28px;
		text-align: center;
		@media (max-width: 640px) {
			font-size: 17px;
		}
	}
</style>
