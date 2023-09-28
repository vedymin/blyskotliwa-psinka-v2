<script>
	import { fly } from 'svelte/transition';
	import MenuItem from '$lib/components/MenuItem.svelte';
	import { cubicInOut } from 'svelte/easing';
	export let mobileMenuIsShown = true
	function closeMenu(event) {
		if (event.srcElement.tagName == "A") {
			mobileMenuIsShown = false;
		}
	};
</script>

{#if mobileMenuIsShown}
	<div transition:fly={{y: -500, duration: 800, easing: cubicInOut}} class='absolute top-0 w-full h-[100vh] bg-white drop-shadow z-50 '>
		<svg on:click={() => mobileMenuIsShown = false} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
				 stroke-width='1' stroke='currentColor' class='w-16 h-16 cursor-pointer absolute right-12 top-12'>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
		<nav class='flex flex-col items-start font-gilroyMedium gap-8 tracking-wider text-xl pb-8 pl-16 mt-48' on:click={closeMenu}>
			<MenuItem href='#hotel' text='hotel'></MenuItem>
			<MenuItem href='#szkolenia' text='szkolenia'></MenuItem>
			<MenuItem href='#behawiorysta' text='behawiorysta'></MenuItem>
			<MenuItem href='#galeria' text='galeria'></MenuItem>
			<MenuItem href='#kontakt' text='kontakt'></MenuItem>
		</nav>
	</div>
{/if}
