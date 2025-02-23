<script>
	import { run } from 'svelte/legacy';

	import { onMount, createEventDispatcher } from 'svelte';
	import { tick } from 'svelte';

	/** @type {{gap?: number, maxColumnWidth?: number, hover?: boolean, loading: any, children?: import('svelte').Snippet}} */
	let {
		gap = 10,
		maxColumnWidth = 250,
		hover = false,
		loading,
		children
	} = $props();

	const dispatch = createEventDispatcher();

	let slotHolder = $state(null);
	let columns = $state([]);
	let galleryWidth = $state(0);
	let columnCount = $state(0);


	onMount(Draw);

	function HandleClick(e) {
		dispatch('click', { src: e.target.src, alt: e.target.alt, loading: e.target.loading, class: e.target.className });
	}

	async function Draw() {
		await tick();

		if (!slotHolder) {
			return;
		}

		const images = Array.from(slotHolder.childNodes).filter(
			(child) => child.tagName === 'IMG'
		);
		columns = [];

		// Fill the columns with image URLs
		for (let i = 0; i < images.length; i++) {
			const idx = i % columnCount;
			columns[idx] = [
				...(columns[idx] || []),
				{ src: images[i].src, alt: images[i].alt, class: images[i].className }
			];
		}
	}
	run(() => {
		columnCount = parseInt(galleryWidth / maxColumnWidth) || 1;
	});
	run(() => {
		columnCount && Draw();
	});
	let galleryStyle = $derived(`grid-template-columns: repeat(${columnCount}, 1fr); --gap: ${gap}px`);
</script>

<div
	id='slotHolder'
	bind:this={slotHolder}
	onDOMNodeInserted={Draw}
	onDOMNodeRemoved={Draw}
>
	{@render children?.()}
</div>

{#if columns}
	<div id='gallery' bind:clientWidth={galleryWidth} style={galleryStyle}>
		{#each columns as column}
			<div class='column'>
				{#each column as img}
					<img
						src={img.src}
						alt={img.alt}
						onclick={HandleClick}
						class="{hover === true ? "img-hover" : ""} {img.class}"
                        loading={loading}
                    />
                {/each}
            </div>
				{/each}
			</div>
			{/if}

			<style>
          #slotHolder {
              display: none;
          }

          #gallery {
              width: 100%;
              display: grid;
              gap: var(--gap);
          }

          #gallery .column {
              display: flex;
              flex-direction: column;
          }

          #gallery .column * {
              width: 100%;
              margin-top: var(--gap);
          }

          #gallery .column *:nth-child(1) {
              margin-top: 0;
          }

          .img-hover {
              opacity: 0.9;
              transition: all 0.2s;
          }

          .img-hover:hover {
              opacity: 1;
              transform: scale(1.05);
          }
			</style>
