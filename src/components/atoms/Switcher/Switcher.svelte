<script lang="ts">
  export let label: string = '';
</script>

<div class="wrapper">
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
