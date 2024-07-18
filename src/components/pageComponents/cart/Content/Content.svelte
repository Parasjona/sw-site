<script>
	import CartItem from '@components/organisms/Cart/CartItem.svelte';
	import { cart } from '@store/cart';

</script>

<div class="wrapper">
	<div class="header-text">Покупаю:</div>
	{#each $cart as item}
		<CartItem {...item} />
	{/each}

	<div class="divider"></div>
	<div class="total-text">Итого:</div>
	<div class="total-summ-text">6000р.</div>
	<button class="cart-button">Оформить заказ через Телеграм</button>
</div>

<style>
	@import '@components/organisms/Shop/ProductCard/ProductCardButton.css';
	.wrapper {
		text-align: center;
		padding: 10px 0;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 10px;
		font-family: 'Century Gothic';
	}
	.header-text {
		align-self: flex-start;
		margin-bottom: 20px;
		font-size: 35px;
		@media (max-width: 640px) {
			font-size: 20px;
		}
	}
	.divider {
		height: 2px;
		background-color: var(--button-hover-grey);
		width: 100%;
		box-shadow: 0px 5px 7px 0px var(--button-press-grey);
	}
	.total-text {
		font-size: 25px;
		@media (max-width: 640px) {
			font-size: 17px;
		}
	}
	.total-summ-text {
		font-family: 'Century Gothic Bold';
		font-size: 35px;
		@media (max-width: 640px) {
			font-size: 20px;
		}
	}
	.cart-button {
		font-family: 'Century Gothic Bold';
		padding: 15px 10px;
		font-size: 20px;
		flex-shrink: 0;
		@media (max-width: 640px) {
			font-size: 13px;
		}
	}
</style>
