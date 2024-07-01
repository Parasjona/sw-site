<script lang="ts">
	import { Modal } from '../../../molecules/Modal';

	export let showModal = false;
	export let name: string;
	export let price: string;
</script>

<Modal bind:showModal>
	<div>
		<div class="modal-header">Купить "{name}"</div>
		<div class="modal-line-wrapper">
			<div class="modal-price">{price}</div>
			<button class="modal-button">Добавить в корзину</button>
		</div>
	</div>
</Modal>

<style>
	@import './ProductCardButton.css';
	@import './ProductCardModal.css';
</style>
