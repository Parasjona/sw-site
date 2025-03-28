<script>
  import CartItem from '@components/organisms/Cart/CartItem.svelte';
  import { cart } from '@store/cart';
  import { cartQuantity } from '@store/cartQuantity';

  $: totalSumm = $cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  function clearCart() {
    cartQuantity.update(() => 0);
    cart.update(() => []);
    totalSumm = 0;
  }
  function cartToMessage() {
    return $cart.reduce((acc, item) => {
      const size = item.size !== 'one size' ? ` ${item.sizeName}` : '';
      const color = item.color !== 'one color' ? ` ${item.colorName}` : '';
      return (
        acc +
        `%0AАрт.${item.article} ${item.name}${color}${size}: ${item.quantity}шт. на ${item.quantity * item.price}р.`
      );
    }, '');
  }

  function sendOrder(tgUser) {
    const message = `Добрый день!%0AПрошу оформить заказ:${cartToMessage()}%0AИтого: ${totalSumm}р.`;
    const link = `https://t.me/${tgUser}?text=${message}`;
    window.open(link, '_blank');
  }
</script>

<div class="wrapper">
  {#if totalSumm === 0}
    <div class="header-text">К сожалению Ваша корзина пуста</div>
  {:else}
    <div class="header-text">Покупаю:</div>
    {#each $cart as item}
      <CartItem {...item} />
    {/each}

    <div class="divider"></div>
    <div class="total-text">Итого:</div>
    <div class="total-summ-text">{totalSumm}р.</div>
    <button class="cart-button" on:click={() => sendOrder('mnstrstvo')}
      >Оформить заказ через Телеграм</button
    >
    <button class="cart-button" on:click={() => clearCart()}>Очистить корзину</button>
  {/if}
</div>

<style>
  @import '@components/organisms/Shop/ProductCard/ProductCardButton.css';
  .wrapper {
    text-align: center;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    font-family: 'Century Gothic';
  }
  .header-text {
    align-self: flex-start;
    margin-bottom: 20px;
    font-size: 35px;
    @media (max-width: 640px) {
      font-size: 20px;
    }
  }
  .divider {
    height: 2px;
    background-color: var(--button-hover-grey);
    width: 100%;
    box-shadow: 0px 5px 7px 0px var(--button-press-grey);
  }
  .total-text {
    font-size: 25px;
    @media (max-width: 640px) {
      font-size: 17px;
    }
  }
  .total-summ-text {
    font-family: 'Century Gothic Bold';
    font-size: 35px;
    @media (max-width: 640px) {
      font-size: 20px;
    }
  }
  .cart-button {
    font-family: 'Century Gothic Bold';
    padding: 15px 10px;
    font-size: 20px;
    flex-shrink: 0;
    @media (max-width: 640px) {
      font-size: 13px;
    }
  }
</style>
