<script lang="ts">
  export let data;
</script>

<div class="main-container-wrapper" >
  {#key data.pathname}
  <div class="main-container">
    <slot />
  </div>
  {/key}
</div>
