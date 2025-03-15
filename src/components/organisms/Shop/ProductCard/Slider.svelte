<script lang="ts">
  export let width = 0;

  $: style = `width: ${width}px`;
</script>

<button on:mouseenter {style} {...$$restProps}></button>

<style>
  button {
    all: unset;
    cursor: pointer;
    background-color: var(--yellow);
    opacity: 0;
    height: 100%;
  }
  button[aria-current='true'] {
    opacity: 0.7;
  }
</style>
