<script>
	import Button from '$lib/components/utils/Button.svelte';
</script>

<div id='szkolenia' class='relative h-[1000px] pt-16 xl:h-[550px]'>
	<div
		class='absolute right-10 z-10 flex flex-col items-end border-black font-newSpirit text-4xl leading-tight xl:text-6xl xl:right-24 xl:-top-[50px]'>
		<div>Prowadzimy też</div>
		<div class='pr-5 text-gold'>szkolenia</div>
		<div>z posłuszeństwa</div>
	</div>
	<div
		class='visible xl:invisible absolute top-[150px] max-xl:m-auto h-[309px] w-full border-black bg-contain bg-center bg-no-repeat xl:h-[600px] xl:right-12 xl:w-[600px] xl:top-[50px]'
		style="background-image: url('/img/dog-4.webp'); "></div>
	<div
		class='xl:visible invisible absolute h-[600px] right-12 w-[600px] top-[100px] bg-contain bg-center bg-no-repeat'
		style="background-image: url('/img/dog-4-xl.webp'); "></div>
	<div
		class='absolute top-[530px] w-full border-black text-center font-gilroySemiBold text-2xl xl:left-20 xl:w-auto xl:top-48'>
		Dla kogo?
	</div>
	<div class='absolute top-[570px] xl:top-[260px]'>
		<div
			class='m-auto w-3/4 border-black text-center font-gilroy text-sm tracking-wider xl:w-96 xl:text-left xl:left-20 xl:absolute xl:m-0'>
			Dla właścicieli szczeniaka, którzy chcą nauczyć go świata i samemu
			zrozumieć jak odpowiednio się z nim komunikować. Dla właścicieli już
			dorosłych psów, które mają problemy z zachowaniem.
		</div>
	</div>
	<div
		class='absolute border-black items-center w-full flex flex-col xl:flex-row top-[700px] gap-5 xl:w-auto xl:top-[390px] xl:left-20 xl:gap-8'>
		<Button title='konsultacje' href='/szkolenia/konsultacja'></Button>
		<Button title='zajęcia indywidualne' href='/szkolenia'></Button>
	</div>
	<div
		class='absolute border-black items-center w-full flex flex-col xl:flex-row top-[840px] gap-5 xl:w-auto xl:top-[460px] xl:left-20 xl:gap-8'>
		<Button title='grupowe starszaków' href='/szkolenia/grupowe-dla-starszakow'></Button>
		<Button title='grupowe szczeniąt' href='/szkolenia/grupowe-dla-szczeniat'></Button>
	</div>
</div>
