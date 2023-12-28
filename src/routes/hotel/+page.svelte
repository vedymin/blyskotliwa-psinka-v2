<script>

	import Gallery from '$lib/utlis/Gallery.svelte';
	import Modal from '$lib/components/Modal.svelte';

	let modal = false;
	let image = '';

	function handleClick(e) {
		image = e.detail.src;
		modal = true;
		console.log(e.detail.src);
	}

	let images = [
		'img/hotel-1.jpg',
		'img/hotel-2.jpg',
		'img/hotel-3.jpg',
		'img/hotel-4.jpg',
		'img/hotel-5.jpg',
		'img/hotel-7.jpg',
		'img/hotel-6.jpg'
	];

	function showModal() {
		modal = true;
	}
</script>

<div class='border-black p-10 px-20 flex xl:flex-row flex-col'>
	<div class='flex-1'>
		<div class='flex flex-col font-newSpirit xl:text-6xl text-4xl absolute items-center border-black ml-20'>
			<p class=''>Hotel</p>
		</div>
		<div
			class='aspect-auto h-[200px] xl:h-[400px] xl:w-[400px] w-[300px] mt-2 border-black bg-contain bg-center bg-no-repeat '
			style="background-image: url('/img/dog-szkolenia.webp'); " />
	</div>
	<div class='flex-1 border-black border mt-10 xl:mt-0'>tekst</div>
</div>
<div class='p-12'>
	<Gallery on:click={handleClick}>
		{#each images as image, i}
			<img src={image} alt=''>
		{/each}
	</Gallery>
</div>

<Modal bind:shown={modal}>
	<div class='flex flex-col items-center text-center'>
		<img src={image} class='h-[80vh] p-4' />
	</div>
</Modal>
