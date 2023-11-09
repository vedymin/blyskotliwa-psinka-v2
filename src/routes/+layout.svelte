<script>
	import '../app.postcss';
	import FooterSection from '$lib/components/FooterSection.svelte';
	import TopNavigation from '$lib/components/TopNavigation.svelte';
</script>

<div class='bg-gray-100 border-black flex flex-col min-h-screen'>
	<div class='relative mx-auto w-[426px] overflow-hidden bg-white xl:w-[1280px] '>
		<TopNavigation></TopNavigation>
		<slot />
	</div>
	<FooterSection></FooterSection>
</div>
