<script lang="ts">
  export let href: string = '#';
</script>

<a {...$$restProps} {href}>
  <div>
    <slot />
  </div>
</a>

<style>
  a {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    width: 168px;
    height: 57px;

    border: 3px solid black;
    border-radius: 17px;

    background-color: rgb(243, 219, 9);
    color: rgb(204, 0, 0);

    font-family: 'Texas Tango';
    font-size: 32px;
  }
  a:after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border: 3px solid rgb(204, 153, 0);
    border-radius: 14px;
  }
</style>