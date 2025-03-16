<script lang="ts">
  import { onMount } from 'svelte';

  export let text: string = '';
  export let color: string = '';
  export let tooltipText: string = '';
  export let position: 'left' | 'right' = 'left';

  $: style = !!color && color !== 'one size' ? `background-color: var(--${color})` : '';
  let textBlock: HTMLDivElement;
  let pointDiv: HTMLDivElement;
</script>

<button on:click {style} {...$$restProps} bind:this={pointDiv}
  >{text}
  {#if tooltipText && tooltipText !== 'one color'}
    <div
      class="text-block"
      bind:this={textBlock}
      style={position === 'left' ? 'left: 0' : 'right: 0'}
    >
      {tooltipText}
    </div>
  {/if}
</button>

<style>
  button {
    all: unset;
    cursor: pointer;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;

    min-width: 24px;
    min-height: 24px;
    border: 3px solid white;
    font-size: 23px;

    &:hover {
      border-color: var(--button-press-grey);
      background-color: var(--button-hover-grey);
    }
    @media (max-width: 640px) {
      font-size: 17px;
    }
  }
  button[aria-current='true'] {
    border-color: var(--button-press-grey);
    background-color: var(--light-grey);

    &:hover {
      border-color: var(--button-press-grey);
      background-color: var(--light-grey);
    }
  }
  .text-block {
    position: absolute;
    text-align: start;

    color: var(--black);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.1px;

    padding: 2px;
    border: 1px solid var(--grey);
    height: fit-content;

    background: var(--white);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;

    bottom: 35px;
  }

  button:hover .text-block {
    opacity: 1;
  }
</style>
