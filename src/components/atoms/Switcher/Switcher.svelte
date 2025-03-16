<script lang="ts">
  export let label: string = '';
  export let container: HTMLElement = null;
</script>

<div class="wrapper" bind:this={container}>
  <div class="label">{label}</div>
  <div class="options">
    <slot />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .label {
    font-size: 28px;
    @media (max-width: 640px) {
      font-size: 22px;
    }
  }
  .options {
    display: flex;
    gap: 10px;
    @media (max-width: 640px) {
      gap: 5px;
    }
  }
</style>
