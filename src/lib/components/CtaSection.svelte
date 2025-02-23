<script>
	let circleSize = 15;
</script>

<div id='co_robimy' class='relative h-[900px] border-black xl:h-[700px]'>
	<div
		class='flex xl:z-10 flex-col border-black pl-16 font-newSpirit text-4xl leading-tight xl:absolute xl:text-6xl xl:left-20 xl:pl-0'>
		<div class='text-yellow'>Brzmi ciekawie,</div>
		<div>co robimy?</div>
	</div>
	<div
		class='m-auto -mt-10 h-[200px] w-full border-black bg-contain bg-center bg-no-repeat xl:absolute xl:w-[300px] xl:h-[300px]
				xl:left-40 xl:top-32'
		style="background-image: url('/img/dog-6.webp'); "></div>
	<div
		class='w-full border-black pt-12 xl:absolute xl:w-auto xl:left-[550px] xl:top-40'>
		<svg class='m-auto' height={circleSize} width={circleSize}>
			<circle
				cx={circleSize / 2}
				cy={circleSize / 2}
				r={circleSize / 2}
				fill='#F5EC07' />
		</svg>
	</div>
	<div
		class='m-auto w-3/4 border-black pt-4 text-center font-gilroy text-xl tracking-widest line xl:absolute xl:w-72 xl:text-left
			xl:left-[600px] xl:top-[164px]'>
		Wyjeżdżasz i potrzebujesz oddać psa do hotelu?
	</div>
	<div
		class='m-auto h-16 w-20 border-black bg-contain bg-no-repeat xl:absolute left-[900px] top-52 invisible xl:visible'
		style="background-image: url('/svg/strzalka2.svg'); "></div>
	<button
		class='absolute left-[400px] top-60 h-[50px] w-[170px] rounded-full bg-white font-gilroy
          tracking-wider shadow-button transition-all hover:shadow-button-hover active:scale-95 active:shadow-button
          xl:left-[1000px] xl:top-52 xl:text-sm xl:hover:scale-105 xl:hover:bg-blue xl:active:scale-100
					invisible xl:visible'>jak to wygląda?
	</button>
	<div
		class='w-full border-black xl:absolute xl:w-auto xl:pt-0 xl:left-[550px] xl:top-80'>
		<svg class='m-auto' height={circleSize} width={circleSize}>
			<circle
				cx={circleSize / 2}
				cy={circleSize / 2}
				r={circleSize / 2}
				fill='#F5EC07' />
		</svg>
	</div>
	<div
		class='m-auto w-3/4 border-black pt-4 text-center font-gilroy text-xl tracking-wider xl:absolute xl:left-[600px] xl:w-72 xl:text-left
						xl:top-[302px]'>
		Potrzebujesz konsultacji behawioralnej?
	</div>
	<div
		class='m-auto h-16 -scale-y-100 rotate-[40deg] w-20 border-black bg-contain bg-no-repeat xl:absolute left-[820px] top-[350px] invisible xl:visible'
		style="background-image: url('/svg/strzalka2.svg'); "></div>
	<div
		id='kontakt'
		class='w-full border-black pt-6 text-center font-gilroySemiBold text-2xl xl:absolute xl:w-auto xl:right-[200px] xl:top-[400px]'>
		Zapraszamy do <br /> kontaktu
	</div>
	<div
		class='m-auto mt-8 h-16 w-20 -scale-x-100 border-black bg-contain bg-no-repeat xl:absolute xl:right-[150px] xl:top-[480px]'
		style="background-image: url('/svg/strzalka.svg'); "></div>
	<div
		class='m-auto flex w-max flex-col items-start pt-8 font-newSpirit text-4xl leading-tight xl:absolute xl:invisible'>
		<div>Odpowiedzi</div>
		<div>na pytania</div>
		<div class='pl-6 text-pink'>& zapisy</div>
	</div>
</div>
