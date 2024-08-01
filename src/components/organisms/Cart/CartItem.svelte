<script>
	import { ButtonQuantityChange } from '@components/atoms/ButtonQuantityChange';
	import { createProductImgSrcUrl } from '@components/utils';
	import { cartQuantity } from '@store/cartQuantity';
	import { cart } from '@store/cart';

	export let quantity;
	export let itemId;
	export let article;
	export let name;
	export let category;
	export let color;
	export let size;
	export let price;
	export let photo = '';

	let item = `${name} ${category} ${color} ${size}`;
	let srcUrl = createProductImgSrcUrl(photo);
	$: totalSumm = `${price * quantity}р.`;

	function updateCart(itemId, newQuantity) {
		const itemQuantity = $cart.find((cartItem) => cartItem.itemId === itemId).quantity;
		const delta = newQuantity - itemQuantity;

		const newItems = $cart.map((item) => {
			if (item.itemId !== itemId) {
				return item;
			}
			let newItem = item;
			newItem.quantity = newQuantity;
			return newItem;
		});
		cartQuantity.update((n) => n + delta);
		cart.update(() => newItems);
	}
	const handleIncrement = () => {
		const newValue = quantity === 9 ? 9 : quantity + 1;
		quantity = newValue;
		updateCart(itemId, newValue);
	};
	const handleDecrement = () => {
		const newValue = quantity === 0 ? 0 : quantity - 1;
		quantity = newValue;
		updateCart(itemId, newValue);
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
