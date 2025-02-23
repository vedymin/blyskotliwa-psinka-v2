<script>

	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import { page } from '$app/stores';
	import NavigationMenu from '$lib/components/NavigationMenu.svelte';
	import { goto } from '$app/navigation';

	let mobileMenuIsShown = $state(false);
	let homePage = $derived($page.url.pathname === '/');
</script>

<MobileMenu bind:mobileMenuIsShown></MobileMenu>
<a href='/'>
	<div
		class="cursor-pointer z-10 absolute left-4 top-14 border-black bg-cover bg-center xl:left-16 {homePage ? 'top-14 h-32 w-24 xl:h-40 xl:w-32' : 'top-4 h-32 w-24 xl:h-20 xl:w-12'}"
		style="background-image: url('/img/logo-min.png'); "></div>
</a>
<nav
	class='invisible xl:visible flex flex-row gap-2 font-gilroyMedium justify-end w-full p-10 text-xl'>
	<NavigationMenu />
</nav>
<div
	onclick={() => (mobileMenuIsShown = true)}
	class='absolute right-6 top-20 z-40 flex h-12 w-24 cursor-pointer items-center justify-center xl:invisible'>
	<svg
		class='h-6 w-12'
		fill='none'
		stroke='currentColor'
		stroke-width='1.5'
		viewBox='0 0 48 24'
		xmlns='http://www.w3.org/2000/svg'>
		<path
			stroke-linecap='round'
			stroke-linejoin='round'
			d='M0 9h48m-48 6.75h48' />
	</svg>
</div>
