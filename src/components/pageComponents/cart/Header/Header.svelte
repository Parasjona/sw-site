<script>
	import { Breadcrumbs, BreadcrumbItem } from '@components/molecules/Breadcrumbs';
	import { HeaderBlock } from '@components/templates/HeaderBlock';

	const homeUrl = '.\\.\\';
	const shopUrl = '.\\';
</script>

<HeaderBlock>
	<Breadcrumbs>
		<BreadcrumbItem isActive url={homeUrl}>Главная</BreadcrumbItem>
		<BreadcrumbItem isActive url={shopUrl}>Shop</BreadcrumbItem>
		<BreadcrumbItem>Корзина</BreadcrumbItem>
	</Breadcrumbs>
</HeaderBlock>

<style>
</style>
