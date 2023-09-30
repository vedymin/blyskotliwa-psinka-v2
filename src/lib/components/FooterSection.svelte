<script>
	import MenuItem from '$lib/components/MenuItem.svelte';
	import Modal from '$lib/components/Modal.svelte';
	let modal = false;
	function showModal() {
		modal = true;
	}
</script>
<footer id="footer" class="flex w-[426px] xl:w-[1280px] flex-col items-center bg-gray">
	<div class='flex flex-col xl:flex-row xl:justify-between xl:w-full xl:p-10 xl:items-baseline'>
		<div class="py-8 font-newSpirit text-xl xl:py-0">Błyskotliwa Psinka</div>
		<nav
			class="flex flex-col xl:flex-row items-center gap-3 xl:gap-12 xl:text-base  pb-8 xl:pb-0 font-gilroyMedium text-xl tracking-wider">
			<MenuItem href="#hotel" text="hotel"></MenuItem>
			<MenuItem href="#szkolenia" text="szkolenia"></MenuItem>
			<MenuItem href="#behawiorysta" text="behawiorysta"></MenuItem>
<!--			<MenuItem href="#galeria" text="galeria"></MenuItem>-->
<!--			<MenuItem href="#kontakt" text="kontakt"></MenuItem>-->
			<MenuItem text="dofinansowanie" noSmooth on:click={showModal}
			></MenuItem>
		</nav>
	</div>
	<div
		class="flex flex-col xl:flex-row xl:justify-between xl:w-full xl:px-10 items-center gap-4 pb-8 font-gilroy text-xs tracking-wider">
		<div>© 2022 Błyskotliwa psinka</div>
		<div>Designed by Anastasiia Gradova</div>
	</div>
</footer>
<Modal bind:shown={modal}>
	<div class="flex flex-col items-center text-center">
		<img src="img/eu-logos.png" />
		<h1>
			Europejski Fundusz Rolny na rzecz Rozwoju Obszarów Wiejskich: Europa
			inwestująca w obszary wiejskie
		</h1>
		<p>
			Operacja pn. „Budowa hotelu dla psów oraz utworzenie ośrodka tresury psów
			w Gościejowicach Małych”, której celem jest podjęcie jednoosobowej
			działalności gospodarczej w miejscowości Gościejowice Małe poprzez
			przebudowę budynku na psi hotel oraz zakup niezbędnego wyposażenia i
			sprzętu, współfinansowana jest ze środków Unii Europejskiej w ramach
			poddziałania 19.2 „Wsparcie na wdrażanie operacji w ramach strategii
			rozwoju lokalnego kierowanego przez społeczność” Programu Rozwoju Obszarów
			Wiejskich na lata 2014-2020. W wyniku operacji powstała działalność
			gospodarcza wraz z samozatrudnieniem.
		</p>
		<p>
			Projekt realizowany we współpracy z Lokaną Grupą Działania Partnerstwo
			Borów Niemodlińskich Rynek 52 49-100 Niemodlin. Stowarzyszenie Partnerstwo
			Borów Niemodlińskich działa na terenie gmin Biała, Dąbrowa, Łambinowice,
			Niemodlin, Prószków, Strzeleczki, Tułowice, Komprachcice
		</p>
		<a href="http://boryniemodlinskie.pl/121/strona-glowna.html"
		>www.boryniemodlinskie.pl</a>
	</div>
</Modal>
