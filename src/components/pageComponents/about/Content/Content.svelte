<script>
	import { IconLinkButton } from '@components/atoms/IconLinkButton';
	import { LinkButton } from '@components/atoms/LinkButton';
	import { InstLogo, MbLogo, T13Logo, TgLogo, VkLogo } from './icons/index';
	import { base as BASE_URL } from '$app/paths';
	import Cover from './icons/logo.svg';
</script>

<div class="wrapper">
	<div class="logo-wrapper">
		<img src={Cover} alt="logo" />
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
		<LinkButton href="{BASE_URL}/shop">Shop</LinkButton>
		<LinkButton href="{BASE_URL}/donate">Donate</LinkButton>
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
		@media (max-width: 640px) {
			width: 330px;
			height: 330px;
		}
	}
	.buttons-wrapper {
		display: flex;
		width: 355px;
		justify-content: space-between;
		@media (max-width: 640px) {
			width: 340px;
		}
	}
	img {
		&:hover {
			filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 1));
		}
		&:active {
			filter: drop-shadow(0px 0px 3px rgb(210, 22, 22));
		}
	}
</style>
