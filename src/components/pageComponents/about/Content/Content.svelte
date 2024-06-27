<script>
	import { IconLinkButton } from '../../../atoms/IconLinkButton';
	import { LinkButton } from '../../../atoms/LinkButton';
	import { Logo, InstLogo, MbLogo, T13Logo, TgLogo, VkLogo } from './icons/index';
</script>

<div class="wrapper">
	<div class="logo-wrapper">
		<Logo />
	</div>

	<div class="buttons-wrapper">
		<IconLinkButton href="https://t.me/snakewayspb">
			<TgLogo />
		</IconLinkButton>
		<IconLinkButton href="https://vk.com/snakeway">
			<VkLogo />
		</IconLinkButton>
		<IconLinkButton href="https://www.instagram.com/snakeway.spb/">
			<InstLogo />
		</IconLinkButton>
		<IconLinkButton href="https://www.motobratan.ru/56047/">
			<MbLogo />
		</IconLinkButton>
		<IconLinkButton href="https://team-13.ru/user/10477/">
			<T13Logo />
		</IconLinkButton>
	</div>
	<div class="buttons-wrapper">
		<LinkButton href="/sw-site/shop">Shop</LinkButton>
		<LinkButton href="/sw-site/donate">Donate</LinkButton>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
		height: 100%;
	}
	.logo-wrapper {
		width: 436px;
		height: 436px;
	}
	.buttons-wrapper {
		display: flex;
		width: 355px;
		justify-content: space-between;
	}
</style>
