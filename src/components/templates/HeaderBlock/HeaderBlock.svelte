<script></script>

<div class="header-wrapper">
  <slot />
</div>

<style>
  .header-wrapper {
    z-index: 5;
    position: sticky;
    top: 0;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    @media (max-width: 640px) {
      padding: 10px 0;
    }
  }
</style>
