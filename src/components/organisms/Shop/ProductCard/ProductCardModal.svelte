<script lang="ts">
	import { Modal } from '../../../molecules/Modal';
	import { cartQuantity } from '@components/store/cartQuantity';
	import { cart } from '@components/store/cart';
	import Switcher from '@components/atoms/Switcher/Switcher.svelte';

	export let showModal = false;
	export let name: string;
	export let category: string = 'Snake Way Division';
	export let price: string;
	export let sizes: string[] = ['one size'];
	export let colors: string[] = ['one color'];

	const getSizeOptions = (sizes: string[]): { name: string; color: string }[] => {
		return sizes.map((sizeName) => ({ name: sizeName, color: '' }));
	};
	const getColorOptions = (colors: string[]): { name: string; color: string }[] => {
		if (colors[0] === 'one color') return [{ name: 'one color', color: '' }];
		return colors.map((colorName) => ({ name: '', color: colorName }));
	};

	let quantity: number = 1;
	let size: string = sizes[0];
	let color: string = colors[0];

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
		cart.update((items) => {
			return [
				...items,
				{
					name: name,
					category: category,
					price: price,
					quantity: quantity,
					color: color,
					size: size
				}
			];
		});
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
		<div class="modal-switcher-line-wrapper">
			<Switcher label="Размер" currentOption={size} options={getSizeOptions(sizes)} />
			<Switcher label="Цвет" currentOption={color} options={getColorOptions(colors)} />
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
