<script lang="ts">
	import { base as BASE_URL } from '$app/paths';
	import { Breadcrumbs, BreadcrumbItem } from '@components/molecules/Breadcrumbs';
	import { HeaderBlock } from '@components/templates/HeaderBlock';
	import { CartHeaderBlock } from '@components/organisms/Cart';

	const homeUrl = BASE_URL;
</script>

<HeaderBlock>
	<Breadcrumbs>
		<BreadcrumbItem isActive url={homeUrl}>Главная</BreadcrumbItem>
		<BreadcrumbItem>Shop</BreadcrumbItem>
	</Breadcrumbs>
	<CartHeaderBlock />
</HeaderBlock>
