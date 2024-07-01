<script lang="ts">
	import { Modal } from '../../../molecules/Modal';
	import { cartQuantity } from '@components/store/cartQuantity';

	export let showModal = false;
	export let name: string;
	export let category: string = 'Snake Way Division';
	export let price: string;

	let quantity: number = 1;

	const handleIncrement = () => {
		const newValue = quantity === 9 ? 9 : quantity + 1;
		quantity = newValue;
	};
	const handleDecrement = () => {
		const newValue = quantity === 0 ? 0 : quantity - 1;
		quantity = newValue;
	};
	function addToCart() {
		cartQuantity.update((n) => n + quantity);
	}
</script>

<Modal bind:showModal>
	<div class="modal-wrapper">
		<div class="modal-header">Купить "{name} {category}"</div>
		<div class="modal-line-wrapper">
			<div class="modal-text">Количество</div>
			<div class="modal-quantity-block">
				<button class="modal-quantity-button" on:click={handleDecrement}>&minus;</button>
				<div class="modal-quantity-text">{quantity}</div>
				<button class="modal-quantity-button" on:click={handleIncrement}>+</button>
			</div>
		</div>
		<div class="modal-line-wrapper">
			<div class="modal-price">{price}</div>
			<button class="modal-button" on:click={() => addToCart()}>Добавить в корзину</button>
		</div>
	</div>
</Modal>

<style>
	@import './ProductCardButton.css';
	@import './ProductCardModal.css';
</style>
