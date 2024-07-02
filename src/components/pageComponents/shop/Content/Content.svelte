<script>
	import { Shop } from '@components/organisms/Shop';

	const future_products = [
		{
			name: 'Кепка',
			category: 'Snake Way Division',
			price: '2000р.',
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
			colors: ['black', 'yellow', 'red']
		},
		{
			name: 'Футболка',
			category: 'Snake Way Division',
			price: '3000р.',
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
			colors: ['black', 'yellow', 'red']
		}
	];
	const products = [
		{
			name: 'Стикерпак',
			category: 'Snake Way Division',
			price: '250р.',
			photo: ['stickerpack1.png', 'stickerpack2.png', 'stickerpack3.png']
		},
		{
			name: 'Брелок-ремувка',
			category: 'Snake Way Division',
			price: '400р.',
			photo: ['keychain1.png', 'keychain2.png']
		},
		{
			name: 'Ланьярд',
			category: 'Snake Way Division',
			price: '400р.'
		},
		{
			name: 'Флаг 135х95',
			category: 'Snake Way Division',
			price: '1300р.',
			photo: ['flag1.png', 'flag2.png']
		},
		{
			name: 'Кепка',
			category: 'Snake Way Division',
			price: '2000р.',
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
			colors: ['black', 'yellow', 'red']
		},
		{
			name: 'Футболка',
			category: 'Snake Way Division',
			price: '3000р.',
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
			colors: ['black', 'yellow', 'red']
		}
	];
</script>

<Shop {products} />

<style></style>
