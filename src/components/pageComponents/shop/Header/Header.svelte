<script lang="ts">
	import { Breadcrumbs, BreadcrumbItem } from '@components/molecules/Breadcrumbs';
	import { HeaderBlock } from '@components/templates/HeaderBlock';
	import { Badge } from '@components/atoms/Badge';
	import ShoppingCart from './icons/shoppingCart.svelte';
	import { count } from '../stores.ts';

  const homeUrl = ".\\";
</script>

<HeaderBlock>
	<Breadcrumbs>
		<BreadcrumbItem isActive url={homeUrl}>Главная</BreadcrumbItem>
		<BreadcrumbItem>Shop</BreadcrumbItem>
	</Breadcrumbs>
	<div class="shoping-cart">
		<div class="shoping-cart-icon">
			<ShopingCart />
		</div>
		<div class="badge-wrapper">
			<Badge>
				{$cartQuantity}
			</Badge>
		</div>
	</div>
</HeaderBlock>

<style>
	.shoping-cart {
		position: relative;
		display: flex;
		justify-content: flex-end;
		box-sizing: border-box;
	}
	.shoping-cart-icon {
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
