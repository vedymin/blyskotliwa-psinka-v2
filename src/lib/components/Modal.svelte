<script>
  import { self } from 'svelte/legacy';

	import { fly } from 'svelte/transition';

  /** @type {{shown?: boolean, children?: import('svelte').Snippet}} */
  let { shown = $bindable(false), children } = $props();

	export function show() {
		shown = true;
	}

	export function hideModal() {
		shown = false;
	}
</script>

<svelte:window
	onkeydown={(e) => {
    if (e.keyCode == 27) {
      hideModal();
    }
  }} />

{#if shown}
	<div class='modal-wrapper z-50' transition:fly={{ y: 800, duration: 1000 }} onclick={self(hideModal)}>
		<div class='modal relative'>
      <span
				class='cursor-pointer text-4xl absolute top-0 right-2'
				onclick={() => hideModal()}>&times;</span>
			{@render children?.()}
		</div>
	</div>
{/if}

<style>
    .modal-wrapper {
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        overflow: scroll;
        overflow-x: hidden;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
    }

    .modal {
        font-family: Gilroy;
        font-weight: 400;
        background-color: white;
        max-width: 80vw;
        padding: 1rem;
        margin: auto;
        overflow: hidden;
    }

    .close {
        float: right;
        cursor: pointer;
    }

    .close:hover {
        font-weight: bold;
    }
</style>
