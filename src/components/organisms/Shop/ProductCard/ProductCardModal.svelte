<script lang="ts">
  import { Modal } from '@components/molecules/Modal';
  import { cartQuantity } from '@store/cartQuantity';
  import { cart } from '@store/cart';
  import Switcher from '@components/atoms/Switcher/Switcher.svelte';
  import SwitcherButton from '@components/atoms/Switcher/SwitcherButton.svelte';
  import { ButtonQuantityChange } from '@components/atoms/ButtonQuantityChange';
  import { stringHash } from '@components/utils';

  export let showModal = false;
  export let article: string;
  export let name: string;
  export let category: string = 'Snake Way Division';
  export let price: number;
  export let sizes: string[] = ['one size'];
  export let sizeNames: string[] = [''];
  export let colors: string[] = ['one color'];
  export let colorNames: string[] = ['one color'];
  export let photo: string;

  let quantity: number = 1;
  let currentSize: string = sizes[0];
  let currentSizeName: string = sizeNames[0];
  let currentColor: string = colors[0];
  let currentColorName: string = colorNames[0];

  const handleSizeClick = (size: string, sizeName: string) => {
    currentSize = size;
    currentSizeName = sizeName;
  };
  const handleColorClick = (color: string, colorName: string) => {
    currentColor = color;
    currentColorName = colorName;
  };

  const handleIncrement = () => {
    const newValue = quantity === 9 ? 9 : quantity + 1;
    quantity = newValue;
  };
  const handleDecrement = () => {
    const newValue = quantity === 0 ? 0 : quantity - 1;
    quantity = newValue;
  };
  function addToCart() {
    const itemId = stringHash(`${article}${name}${category}${currentColor}${currentSize}`);
    cartQuantity.update((n) => n + quantity);
    cart.update((items) => {
      let isNewItem = true;
      let newItems = items.map((item) => {
        if (item.itemId === itemId) {
          let newItem = item;
          newItem.quantity = item.quantity + quantity;
          isNewItem = false;
          return newItem;
        }
        return item;
      });
      if (isNewItem) {
        newItems.push({
          itemId: itemId,
          article: article,
          name: name,
          category: category,
          price: price,
          quantity: quantity,
          color: currentColor,
          colorName: currentColorName,
          size: currentSize,
          sizeName: currentSizeName,
          photo: photo
        });
      }
      return newItems;
    });
  }
</script>

<Modal bind:showModal>
  <div class="modal-wrapper">
    <div class="modal-header">Купить "{name} {category}"</div>
    <div class="modal-line-wrapper">
      <div class="modal-text">Количество</div>
      <div class="modal-quantity-block">
        <ButtonQuantityChange on:click={handleDecrement}>&minus;</ButtonQuantityChange>
        <div class="modal-quantity-text">{quantity}</div>
        <ButtonQuantityChange on:click={handleIncrement}>+</ButtonQuantityChange>
      </div>
    </div>
    <div class="modal-switcher-line-wrapper">
      <Switcher label="Размер">
        {#each sizes as sizeName, index (index)}
          <SwitcherButton
            on:click={() => handleSizeClick(sizeName, sizeNames[index])}
            text={sizeName}
            aria-current={sizeName === currentSize}
            tooltipText={sizeNames[index]}
            position="left"
          />
        {/each}
      </Switcher>
      <Switcher label="Цвет">
        {#each colors as colorName, index (index)}
          <SwitcherButton
            on:click={() => handleColorClick(colorName, colorNames[index])}
            text={colorName === 'one color' ? colorName : ''}
            color={colorName}
            aria-current={colorName === currentColor}
            tooltipText={colorNames[index]}
            position="right"
          />
        {/each}
      </Switcher>
    </div>
    <div class="modal-line-wrapper">
      <div class="modal-price">{price}р.</div>
      <button class="modal-button" on:click={() => addToCart()}>Добавить в корзину</button>
    </div>
  </div>
</Modal>

<style>
  @import './ProductCardButton.css';
  @import './ProductCardModal.css';
</style>
