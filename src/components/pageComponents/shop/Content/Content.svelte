<script>
	import { ProductCard } from '@components/molecules/ProductCard';

	const products = [
		{
			name: 'Стикерпак',
			category: 'Snake Way Division',
			price: '250р.',
			photo: 'stickerpack1.png'
		},
		{
			name: 'Брелок-ремувка',
			category: 'Snake Way Division',
			price: '400р.',
			photo: 'keychain1.png'
		},
		{ name: 'Флаг 135х95', category: 'Snake Way Division', price: '1300р.', photo: 'flag1.png' },
		{ name: 'Кепка', category: 'Snake Way Division', price: '2000р.' },
		{ name: 'Футболка', category: 'Snake Way Division', price: '3000р.' }
	];
</script>

<div class="wrapper">
	{#each products as item}
		<ProductCard {...item} />
	{/each}
</div>

<style>
	.wrapper {
		box-sizing: border-box;
		text-align: center;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		font-family: 'Century Gothic';
	}
</style>
