<script lang="ts">
  export let href: string = '#';
</script>

<a {...$$restProps} {href}>
  <slot />
</a>

<style>
  a {
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    height: 30px;
    padding: 2px;

    border: 2px solid black;
    border-radius: 7px;

    background-color: yellow;
    color: red;

    font-family: 'Texas Tango';
  }
</style>