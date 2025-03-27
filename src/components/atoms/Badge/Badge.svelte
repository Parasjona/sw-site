<script lang="ts">
</script>

<div class="badge">
  <slot />
</div>

<style>
  .badge {
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Century Gothic Bold';
    font-size: 14px;
    border-radius: 50%;
    background-color: var(--yellow);
  }
</style>
