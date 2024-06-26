<script>
	import { IconLinkButton } from "../../../atoms/IconLinkButton";
	import { LinkButton } from "../../../atoms/LinkButton";
  import { Logo, InstLogo, MbLogo, T13Logo, TgLogo, VkLogo } from './icons/index';
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
