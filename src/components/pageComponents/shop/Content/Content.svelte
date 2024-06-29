<script>
	import { ProductCard } from '@components/molecules/ProductCard';
</script>

<div class="wrapper">
	<ProductCard name="Стикерпак" category="Snake Way Division" price="250р." />
	<ProductCard name="Брелок-ремувка" category="Snake Way Division" price="400р." />
	<ProductCard name="Флаг 135х95" category="Snake Way Division" price="1300р." />
	<ProductCard name="Кепка" category="Snake Way Division" price="2000р." />
	<ProductCard name="Футболка" category="Snake Way Division" price="3000р." />
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
