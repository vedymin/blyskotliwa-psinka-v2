<script>
	import stawPustelnika from '$lib/assets/trasy/pustelnik.webp';
	import lipno from '$lib/assets/trasy/lipno.webp';
	import zloteBagna from '$lib/assets/trasy/zlote_bagna.webp';
	import sangow from '$lib/assets/trasy/sangow.webp';
	import canicross from '$lib/assets/canicross2.webp'
	import RouteDetails from '$lib/components/RouteDetails.svelte';

</script>
<div class='border-black p-10 px-20 flex xl:flex-row flex-col'>
	<div class='flex-1 flex justify-center'>
		<div class='flex flex-col font-newSpirit xl:text-6xl text-4xl absolute items-center border-black ml-2'>
			<p class=''>Dogtrekking i </p>
			<p class=''>Canicross</p>
		</div>
		<div
			class='aspect-auto h-[200px] xl:h-[400px] xl:w-[400px] w-[200px] mt-32 border-black bg-cover bg-[-150px_center] xl:bg-[-300px_center] bg-no-repeat rounded-full'
			style="background-image: url({canicross}); " />
	</div>
	<div class='flex-1 border-black mt-10 xl:mt-0 text-center xl:text-left'>
		<p class='pb-4'>Witaj w naszej wypożyczalni sprzętu sportowego, gdzie dogtrekking i
			canicross stają się dostępne dla Ciebie i Twojego psa bez konieczności inwestowania w pełny zestaw. </p>
		<h1 class='font-gilroySemiBold text-2xl pb-2'>Dogtrekking</h1>
		<p class='pb-4'>Dogtrekking to wyjątkowa forma aktywności, która pozwala poruszać się z psem przypiętym na uprzęży w
			terenie leśnym lub górskim. Jest to marsz na orientację, a podczas uprawiania tej dyscypliny można spacerować lub
			biegać. Nasze pasy biodrowe i szelki sled doskonale sprawdzają się podczas tego sportu, gwarantując wygodę i
			bezpieczeństwo. Wypożycz nasz sprzęt i odkryjcie razem nowe szlaki!</p>
		<h1 class='font-gilroySemiBold text-2xl pb-2'>Canicross</h1>
		<p class='pb-4'>Canicross to dynamiczna dyscyplina sportowa z kategorii psich zaprzęgów, polegająca na biegu z psem,
			upiętym na smyczy z amortyzatorem, łączącym się z pasem biodrowym. Twój pies biegnie z przodu, wspomagając Cię
			podczas biegu. Dla tych, którzy kochają biegać z psem, canicross to idealna forma aktywności. Nasze smycze z
			amortyzatorem firmy Sali gwarantują bezpieczne i komfortowe doświadczenie dla Ciebie i Twojego pupila. Wypożycz
			nasz sprzęt canicrossowy i stwórz niesamowite wspomnienia.</p>
		<h1 class='font-gilroySemiBold text-2xl pb-2'>Sprzęt do wypożyczenia</h1>
		<p class='pb-4'>Zapewniamy wysokiej jakości pasy biodrowe, szelki sled oraz smycze z amortyzatorem od firmy Sali.
			Nasz sprzęt zapewnia niezbędne wsparcie i bezpieczeństwo podczas treningów i wypraw. </p>
		<p class='pb-4'>Rozpocznij swoją przygodę z dogtrekkingiem i canicross wypożyczając sprzęt, który pozwoli Ci cieszyć
			się sportem wraz z wiernym towarzyszem!</p>
	</div>
</div>
<div class='mx-20 text-center xl:text-left'>
	<h1 class='font-gilroySemiBold text-2xl pb-4 '>Poznaj Bory Niemodlińskie!</h1>
	<p class='pb-2'>Zapraszamy do fascynującej podróży po Borach Niemodlińskich, gdzie stworzyliśmy specjalne trasy
		spacerowe, z myślą o psich przyjaciołach i ich opiekunach. Nasze szlaki ukazują nie tylko urokliwe zakątki natury,
		ale także bogactwo dziedzictwa naszego regionu. </p>

	<p class='pb-6'>Poniżej znajdziecie informacje o wyznaczonych przez nas trasach. Spacerując po tych szlakach, nie
		tylko umożliwicie swojemu pupilowi aktywność na świeżym powietrzu,
		ale również przyczynicie się do promocji turystyki w naszym pięknym regionie i ukochanego miasta Niemodlin.
		Dołączcie do społeczności spacerowiczów, dzielcie się swoimi przeżyciami, a razem będziemy tworzyć niezapomniane
		wspomnienia podczas tych wyjątkowych spacerów!</p>

	<RouteDetails distance='8.4km' duration='1h 40min' title='Pustelnik' image='{stawPustelnika}'>Trasa zaczyna się w
		Parku Dendrologicznym w
		Lipnie. Polecamy
		odwiedzić go na koniec, jako nagrodę za przebiegnięcie ponad 8 kilometrów! Po drodze zobaczyć można Staw Ostrowity
		oraz znacznie piękniejszy Staw Pustelnik. Trasa przebiega obok punktu widokowego. Całkiem blisko trasy okrążającej
		Staw Pustelnik znajduje się pomnik przyrody, dąb szypułkowy o średnicy pnia prawie 1,5m. Dla chętnych wiecej
		szczegółów podczas wypożyczania sprzętu.
	</RouteDetails>
	<RouteDetails distance='4.6km' duration='60min' title='Lipno' image={lipno}>Najkrótsza i najprostsza z tras. Zaczyna
		się i kończy obok przedwojennego basenu olipmijskiego, działającego dzisiaj jako kąpielisko. W sam raz aby się
		schłodzić bo wysiłku, niestety nie można tam zabrać naszych kochanych psiaków. Trasa przebiega obok Chatki
		Pustelnika, kilku pomników przyrody a także Parku Dendrologicznego. Ten ostatni polecamy szczególnie!
	</RouteDetails>
	<RouteDetails distance='6km' duration='1h 15min' title='Złote Bagna' image={zloteBagna}>Tę trasę polecamy szczególnie
		miłośnikom dzikiej fauny. Zdarzało się nam spotkać tutaj chmary jeleni przeskakujących przez drogę. Pamiętajcie aby
		zawsze mieć swoich towarzyszy pod kontrolą, w lasach nie odpinamy ich od smyczy. Po drodze można przeczytać o
		rezerwacie na tablicach informacyjnych
	</RouteDetails>
	<RouteDetails distance='8.7km' duration='1h 45min' title='Sangów' image={sangow}>Dla wszystkich smakoszy karpia
		Niemodlińskiego, trasa dookoła największego stawu Obszaru Chronionego Krajobrazu Borów Niemodlińskich - Sangów, o
		powierzchni 137 hektarów. Jest to staw hodowalny, tutaj żyją karpie które można zakupić w listopadzie i grudniu w
		Gospodarstwie Rybackim 500 metrów od naszego hotelu. Smacznego!
	</RouteDetails>
</div>
