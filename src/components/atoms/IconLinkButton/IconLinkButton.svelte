<script lang="ts">
  export let href: string = '#';
</script>

<a {...$$restProps} {href}>
  <div class="icon-logo-wrapper">
    <slot />
  </div>
</a>

<style>
  a {
    all: unset;
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    width: 57px;
    height: 57px;

    border: 3px solid black;
    border-radius: 17px;

    background-color: rgb(243, 219, 9);
    color: rgb(204, 0, 0);

    font-family: 'Texas Tango';
  }
  a:after
  {
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
    .icon-logo-wrapper {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0%;
      width: 39px;
      height: 39px;
      margin: auto;
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
</style>