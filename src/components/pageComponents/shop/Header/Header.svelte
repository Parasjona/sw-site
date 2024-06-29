<script>
	import { Breadcrumbs, BreadcrumbItem } from '@components/molecules/Breadcrumbs';
	import { HeaderBlock } from '@components/templates/HeaderBlock';
	import { Badge } from '@components/atoms/Badge';
	import ShoppingCart from './icons/shoppingCart.svelte';
	import { count } from '../stores.ts';
</script>

<HeaderBlock>
	<Breadcrumbs>
		<BreadcrumbItem isActive url=".\">Главная</BreadcrumbItem>
		<BreadcrumbItem>Shop</BreadcrumbItem>
	</Breadcrumbs>
	<div class="shoppping-cart">
		<div class="shoppping-cart-icon">
			<ShoppingCart />
		</div>
		<div class="badge-wrapper">
			<Badge>
				{$count}
			</Badge>
		</div>
	</div>
</HeaderBlock>

<style>
	.shoppping-cart {
		position: relative;
		display: flex;
		justify-content: flex-end;
		box-sizing: border-box;
		border: 1px solid black;
	}
	.shoppping-cart-icon {
		height: 39px;
		margin-top: 10px;
	}
	.badge-wrapper {
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
