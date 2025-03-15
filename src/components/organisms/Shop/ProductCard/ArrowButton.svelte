<script lang="ts">
  export let direction = 'left';

  $: style = direction === 'left' ? 'left: 0' : 'right: 0';
</script>

<button on:click {style} {...$$restProps}>
  {direction === 'left' ? '<' : '>'}
</button>

<style>
  button {
    all: unset;
    cursor: pointer;
    height: 100%;
    width: 45px;
    position: absolute;
    top: 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
