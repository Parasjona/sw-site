<script>
  import { ProductCard } from '@components/organisms/Shop/ProductCard';

  export let products = [];
</script>

<div class="wrapper">
  {#each products as item}
    <ProductCard {...item} />
  {/each}
</div>

<style>
  .wrapper {
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
    gap: 10px;
    font-family: 'Century Gothic';
  }
</style>
