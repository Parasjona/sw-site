<script lang="ts">
	import { base as BASE_URL } from '$app/paths';
	import { Badge } from '@components/atoms/Badge';
	import ShopingCart from './icons/shopCart.svelte';
	import { cartQuantity } from '@store/cartQuantity';
</script>

<div class="shoping-cart">
	<div class="shoping-cart-icon">
		<ShopingCart width="100%" height="100%" />
	</div>
	<div class="badge-wrapper">
		<a href="{BASE_URL}/shop/cart">
			<Badge>
				{$cartQuantity}
			</Badge>
		</a>
	</div>
</div>

<style>
	a {
		all: unset;
		cursor: pointer;
		box-sizing: border-box;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.shoping-cart {
		position: relative;
		display: flex;
		justify-content: flex-end;
		box-sizing: border-box;
	}
	.shoping-cart-icon {
		width: 50px;
		height: 50px;
	}
	.badge-wrapper {
		position: absolute;
		top: 8%;
		left: 7%;
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
