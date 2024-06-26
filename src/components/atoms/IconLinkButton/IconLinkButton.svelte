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

    border: var(--link-button-border);
    border-radius: var(--link-button-border-radius);
    box-shadow: var(--link-button-shadow);

    background-color: var(--yellow);
    color: var(--red);

    font-family: 'Texas Tango';

    &:hover {
      border: none;
      box-shadow: var(--hover-shadow);
    }
    &:active {
      border: none;
      box-shadow: var(--active-shadow);
    }
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