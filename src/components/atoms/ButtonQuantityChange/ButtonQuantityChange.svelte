<script></script>

<button class="modal-quantity-button" on:click {...$$restProps}>
  <slot />
</button>

<style>
  @import '@components/organisms/Shop/ProductCard/ProductCardButton.css';
  .modal-quantity-button {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    font-size: 25px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--button-base-grey);
    @media (max-width: 640px) {
      font-size: 17px;
    }
  }
</style>
