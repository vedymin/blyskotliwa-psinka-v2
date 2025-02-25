<script>
	import Button from '$lib/components/utils/Button.svelte';
</script>

<div class='border-black p-10 px-20 flex xl:flex-row flex-col'>
	<div class='flex-1'>
		<div class='flex flex-col font-newSpirit xl:text-6xl text-4xl absolute items-center border-black ml-2'>
			<p class=''>Usługi</p>
		</div>
		<div
			class='aspect-auto h-[200px] xl:h-[400px] xl:w-[400px] w-[300px] mt-12 border-black bg-contain bg-center bg-no-repeat '
			style="background-image: url('/img/dog-szkolenia.webp'); "></div>
	</div>
	<div class='flex-1 border-black mt-10 xl:mt-0 text-center xl:text-left'>
		<h1 class='font-gilroySemiBold text-2xl pb-10'>Nasze Usługi:</h1>
		<div class='flex flex-col xl:grid-cols-2 xl:grid gap-4'>
			<Button title='Hotel' href='/hotel' wider></Button>
			<Button title='Pielęgnacja' href='/pielegnacja'wider></Button>
			<Button title='Szkolenia' href='/szkolenia'wider></Button>
			<Button title='Grupowe dla starszaków' href='/szkolenia/grupowe-dla-starszakow'wider></Button>
			<Button title='Grupowe dla szczeniaków' href='/szkolenia/grupowe-dla-szczeniat'wider></Button>
			<Button title='Konsultacje behawioralne' href='/szkolenia/konsultacja'wider></Button>
			<Button class="xl:col-span-2 xl:flex xl:justify-center" title='Wypożyczalnia sprzętu' href='/wypozyczalnia'wider></Button>
		</div>
	</div>
</div>
