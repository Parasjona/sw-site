<script></script>

<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol class="wrapper">
    <slot />
  </ol>
</nav>

<style>
  .breadcrumbs {
    font-family: 'Century Gothic';
    font-size: 20px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    width: 100%;

    @media (max-width: 640px) {
      font-size: 15px;
    }
  }
  .wrapper {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: visible;
    &::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none;

    & > li {
      margin-left: 4px;
    }
    & > li:first-child,
    & > li[data-overflow] {
      margin-left: 0;
    }
  }
</style>
