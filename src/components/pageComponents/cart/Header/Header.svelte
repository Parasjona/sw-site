<script>
	import { Breadcrumbs, BreadcrumbItem } from '@components/molecules/Breadcrumbs';
	import { HeaderBlock } from '@components/templates/HeaderBlock';
	import { base as BASE_URL } from '$app/paths';
	import { CartHeaderBlock } from '@components/organisms/Cart';

	const homeUrl = BASE_URL;
	const shopUrl = `${BASE_URL}/shop`;
</script>

<HeaderBlock>
	<Breadcrumbs>
		<BreadcrumbItem isActive url={homeUrl}>Главная</BreadcrumbItem>
		<BreadcrumbItem isActive url={shopUrl}>Shop</BreadcrumbItem>
		<BreadcrumbItem>Корзина</BreadcrumbItem>
	</Breadcrumbs>
	<CartHeaderBlock />
</HeaderBlock>
