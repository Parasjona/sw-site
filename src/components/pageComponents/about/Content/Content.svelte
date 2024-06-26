<script>
	import IconLinkButton from "../../../atoms/IconLinkButton/IconLinkButton.svelte";
	import LinkButton from "../../../atoms/LinkButton/LinkButton.svelte";
  import Logo from './icons/logo.svelte';
  import InstLogo from './icons/instLogo.svelte';
  import MbLogo from './icons/mbLogo.svelte';
  import T13Logo from './icons/t13Logo.svelte';
  import TgLogo from './icons/tgLogo.svelte';
  import VkLogo from './icons/vkLogo.svelte';
</script>

<div class="wrapper">
    <div class="logo-wrapper">
      <Logo />
    </div>

    <div class="buttons-wrapper">
      <IconLinkButton>
        <TgLogo />
      </IconLinkButton>
      <IconLinkButton>
        <VkLogo />
      </IconLinkButton>
      <IconLinkButton>
        <InstLogo />
      </IconLinkButton>
      <IconLinkButton>
        <MbLogo />
      </IconLinkButton>
      <IconLinkButton>
        <T13Logo />
      </IconLinkButton>
    </div>
    <div class="buttons-wrapper">
      <LinkButton href="/shop">Shop</LinkButton>
      <LinkButton href="/donate">Donate</LinkButton>
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
