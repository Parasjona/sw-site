<script>
	import LinkButton from "../../../atoms/LinkButton/LinkButton.svelte";

</script>

<div class="wrapper">
    <div>Logo</div>
    <div class="buttons-wrapper">
      <LinkButton>TG</LinkButton>
      <LinkButton>VK</LinkButton>
      <LinkButton>Inst</LinkButton>
      <LinkButton>MB</LinkButton>
      <LinkButton>XZ</LinkButton>
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
        gap: 10px;
    }
    .buttons-wrapper {
      display: flex;
      gap: 5px;
    }
</style>
