<script lang="ts">
  import Slider from './Slider.svelte';
  import ArrowButton from './ArrowButton.svelte';
  import ProductCardModal from './ProductCardModal.svelte';
  import { createProductImgSrcUrl } from '@components/utils';

  export let article: string;
  export let name: string;
  export let category: string = 'Snake Way Division';
  export let price: number;
  export let photo: string[] = [''];
  export let sizes: string[] = undefined;
  export let sizeNames: string[] = undefined;
  export let colors: string[] = undefined;
  export let colorNames: string[] = undefined;

  let showModal = false;

  const CARD_WIDTH = 293;

  let imgIndex = 0;
  let imgNumber = photo ? photo.length : 0;
  let sliderWidth = imgNumber > 1 ? CARD_WIDTH / imgNumber : 0;

  let srcUrl = createProductImgSrcUrl(photo[imgIndex]);

  const handleMouseEnter = (index: number) => {
    imgIndex = index;
    srcUrl = createProductImgSrcUrl(photo[imgIndex]);
  };
  const handlePrevClick = () => {
    if (imgIndex > 0) {
      imgIndex = imgIndex - 1;
    } else {
      imgIndex = imgNumber - 1;
    }
    srcUrl = createProductImgSrcUrl(photo[imgIndex]);
  };
  const handleNextClick = () => {
    if (imgIndex < imgNumber - 1) {
      imgIndex = imgIndex + 1;
    } else {
      imgIndex = 0;
    }
    srcUrl = createProductImgSrcUrl(photo[imgIndex]);
  };
</script>

<div class="product-card">
  <div class="product-card-photo-block">
    {#if srcUrl}
      <img class="product-card-photo" src={srcUrl} alt={name} />
      <div class="product-card-photo-block-slideline-zone">
        {#each Array(imgNumber) as _, index (index)}
          <Slider
            width={sliderWidth}
            aria-current={index === imgIndex}
            on:mouseenter={(e) => handleMouseEnter(index)}
          />
        {/each}
      </div>
      {#if imgNumber > 1}
        <ArrowButton direction="left" on:click={(e) => handlePrevClick()} />
        <ArrowButton direction="right" on:click={(e) => handleNextClick()} />
      {/if}
    {:else}
      <div class="product-card-text">Товар на фотосессии</div>
    {/if}
  </div>
  <div class="product-card-text">{name}</div>
  <div class="product-card-text">{category}</div>
  <div class="product-card-text">{price}р.</div>
  <button class="product-card-button" on:click={() => (showModal = true)}>В КОРЗИНУ</button>
</div>

<ProductCardModal
  bind:showModal
  {article}
  {name}
  {price}
  {category}
  {sizes}
  {sizeNames}
  {colors}
  {colorNames}
  photo={photo[0]}
/>

<style>
  @import './ProductCard.css';
  @import './ProductCardButton.css';
</style>
