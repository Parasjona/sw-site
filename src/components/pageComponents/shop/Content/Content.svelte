<script>
	import { Shop } from '@components/organisms/Shop';

	const future_products = [
		{
			name: 'Кепка',
			category: 'Snake Way Division',
			price: 2000,
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
			colors: ['black', 'yellow', 'red']
		},
		{
			name: 'Футболка',
			category: 'Snake Way Division',
			price: 3000,
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
			colors: ['black', 'yellow', 'red']
		}
	];
	const products = [
		{
			name: 'Стикерпак',
			category: 'Snake Way Division',
			price: 250,
			photo: ['stickerpack1.jpg', 'stickerpack2.jpg', 'stickerpack3.jpg']
		},
		{
			name: 'Брелок-ремувка',
			category: 'Snake Way Division',
			price: 400,
			photo: ['keychain1.jpg', 'keychain2.jpg', 'keychain3.jpg']
		},
		{
			name: 'Ланьярд',
			category: 'Snake Way Division',
			price: 400,
			photo: ['lanyard1.jpg', 'lanyard2.jpg', 'lanyard3.jpg']
		},
		{
			name: 'Флаг 135х95',
			category: 'Snake Way Division',
			price: 1300,
			photo: ['flag1.jpg', 'flag2.jpg', 'flag3.jpg']
		}
	];
</script>

<Shop {products} />

<style></style>
