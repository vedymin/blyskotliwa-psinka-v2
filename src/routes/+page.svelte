<script>
  import MenuItem from '$lib/components/MenuItem.svelte';
  import Modal from '$lib/components/Modal.svelte';

  let circleSize = 15;
  let modal;
</script>

<div class="bg-gray-100 border-black">
  <div class='shadow-xl w-[426px] m-auto overflow-hidden bg-white'>
  <div
    id="landing"
    class="relative h-[920px]">
    <div
      class="absolute left-4 top-14 h-32 w-24 border-black bg-cover bg-center"
      style="background-image: url('/img/logo-min.png'); " />
    <div class="absolute right-6 top-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 48 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-12">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M0 9h48m-48 6.75h48" />
      </svg>
    </div>
    <div
      class="absolute right-0 top-[110px] aspect-auto h-[711px] w-[309px] border-black bg-contain bg-center bg-no-repeat"
      style="background-image: url('/img/dog-1.webp'); " />
    <div
      class="absolute left-4 top-[450px] font-newSpirit text-[85px] text-yellow">
      Cześć!
    </div>
    <div
      class="absolute left-[53px] top-[570px] flex flex-col items-end border-black font-gilroyMedium text-xl leading-tight tracking-wider">
      <div class="border-black">Mam świetną</div>
      <div>wiadomość!</div>
    </div>
    <div
      class="absolute left-[60px] top-[650px] h-12 w-14 border-black bg-contain bg-no-repeat"
      style="background-image: url('/svg/strzalka.svg'); " />
  </div>
  <div
    id="hotel"
    class="relative h-[650px]">
    <div
      class="absolute left-10 z-10 flex flex-col border-black font-newSpirit text-4xl leading-tight">
      <div class="text-blue">Zapraszamy</div>
      <div class="pl-5">do naszego</div>
      <div>hotelu dla psów</div>
      <div>w Niemodinie!</div>
    </div>
    <button
      class="absolute left-12 top-56 h-[60px] w-[160px] rounded-full
      bg-white font-gilroy tracking-wider shadow-button transition-all
      hover:scale-105 hover:shadow-button-hover active:scale-100 active:shadow-button"
      >jak to wygląda?</button>
    <div
      class="absolute left-60 top-40 h-32 w-32 border-black bg-cover bg-center"
      style="background-image: url('/img/dog-2.png'); " />
    <div
      class="absolute left-0 top-96 h-48 w-48 border-black bg-cover bg-center"
      style="background-image: url('/img/dog-3.webp'); " />
    <div
      class="absolute right-[90px] top-[450px] h-16 w-20 -scale-x-100 border-black bg-contain bg-no-repeat"
      style="background-image: url('/svg/strzalka.svg'); " />
  </div>
  <div
    id="szkolenia"
    class="relative h-[700px]">
    <div
      class="absolute right-10 z-10 flex flex-col items-end border-black font-newSpirit text-4xl leading-tight">
      <div>Prowadzimy też</div>
      <div class="text-gold pr-5">szkolenia</div>
      <div>z posłuszeństwa</div>
    </div>
    <div
      class="absolute top-[100px] m-auto h-[309px] w-full border-black bg-contain bg-center bg-no-repeat"
      style="background-image: url('/img/dog-4.webp'); " />
    <div
      class="font-gilroySemiBold absolute top-[500px] w-full border-black text-center text-2xl">
      Dla kogo?
    </div>
    <div class="absolute top-[570px]">
      <div
        class="m-auto w-3/4 border-black text-center font-gilroyMedium text-sm tracking-wider">
        Dla właścicieli szczeniaka, którzy chcą nauczyć go świata i samemu
        zrozumieć jak odpowiednio się z nim komunikować. Dla właścicieli już
        dorosłych psów, które mają problemy z zachowaniem.
      </div>
    </div>
  </div>
  <div
    id="behawiorysta"
    class="relative h-[900px]">
    <div class="font-gilroySemiBold w-full border-black text-center text-2xl">
      Kto prowadzi?
    </div>
    <div
      class="m-auto mt-10 h-16 w-20 border-black bg-contain bg-no-repeat"
      style="background-image: url('/svg/strzalka.svg'); " />
    <div
      class="flex flex-col border-black pl-20 pt-8 font-newSpirit text-4xl leading-tight">
      <div>Jestem</div>
      <div class="pl-5">Ola!</div>
    </div>
    <div
      class="m-auto -mt-10 h-[200px] w-full border-black bg-contain bg-center bg-no-repeat"
      style="background-image: url('/img/ola.webp'); " />
    <div
      class="font-gilroySemiBold absolute top-[500px] w-full border-black text-center text-2xl">
      Trener & behawiorysta psów
    </div>
    <div class="absolute top-[570px]">
      <div
        class="m-auto w-3/4 border-black text-center font-gilroyMedium text-sm tracking-wider">
        Psy to moja pasja i wielka miłość. Cały czas doskonale moje umiejętności
        i rozwijam się, aby móc się nimi zajmować jak najlepiej. Jednocześnie
        chce pomagać właścicielom, by mogli nawiązywać dobre relacje ze swoimi
        pupilami i cieszyć się z każdej chwili spędzonej razem.
        <br /><br />Prywatnie uwielbiam spacery, w szczególności górskie, kawę
        najlepiej taką w psim towarzystwie doprawioną nutką sierści. Rozgość się
        na naszej stronie. Fajnie, że jesteś!
      </div>
    </div>
  </div>
  <div
    id="co_robimy"
    class="relative h-[900px]">
    <div
      class="flex flex-col border-black pl-16 font-newSpirit text-4xl leading-tight">
      <div class="text-yellow">Brzmi ciekawie,</div>
      <div>co robimy?</div>
    </div>
    <div
      class="m-auto -mt-10 h-[200px] w-full border-black bg-contain bg-center bg-no-repeat"
      style="background-image: url('/img/dog-6.webp'); " />
    <div class="w-full border-black pt-6">
      <svg class="m-auto" height={circleSize} width={circleSize}>
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={circleSize / 2}
          fill="#F5EC07" />
      </svg>
    </div>
    <div
      class="m-auto w-3/4 border-black pt-4 text-center font-gilroy text-xl tracking-wider">
      Wyjeżdżasz i potrzebujesz oddać psa do hotelu?
    </div>
    <div class="w-full border-black pt-6">
      <svg class="m-auto" height={circleSize} width={circleSize}>
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={circleSize / 2}
          fill="#F5EC07" />
      </svg>
    </div>
    <div
      class="m-auto w-3/4 border-black pt-4 text-center font-gilroy text-xl tracking-wider">
      Potrzebujesz konsultacji behawioralnej?
    </div>
    <div
      class="font-gilroySemiBold w-full border-black pt-6 text-center text-2xl">
      Zapraszamy do <br /> kontaktu
    </div>
    <div
      class="m-auto mt-8 h-16 w-20 -scale-x-100 border-black bg-contain bg-no-repeat"
      style="background-image: url('/svg/strzalka.svg'); " />
    <div
      class="m-auto flex w-max flex-col items-start pt-8 font-newSpirit text-4xl leading-tight">
      <div>Odpowiedzi</div>
      <div>na pytania</div>
      <div class="text-pink pl-6">& zapisy</div>
    </div>
  </div>
  <div
    id="kontakt"
    class="relative h-auto">
      <div
        class="m-auto grid w-3/4 grid-cols-[20%_80%] grid-rows-2 gap-4 border-black font-gilroyMedium tracking-wider">
        <div
          class="m-auto h-6 w-6 self-center border-black bg-contain bg-no-repeat"
          style="background-image: url('/svg/person.svg'); " />
        <div class="flex flex-col">
          <a href="tel:+48739478527">+48 739 478 527</a>
          <a href="mailto:kontakt@blyskotliwapsinka.pl"
            >kontakt@blyskotliwapsinka.pl</a>
        </div>
        <div
          class="m-auto h-6 w-5 self-center border-black bg-contain bg-no-repeat"
          style="background-image: url('/svg/pin.svg'); " />
        <div class="flex flex-col">
          <a
            class="adres"
            target="_blank"
            href="https://www.google.com/maps/place/B%C5%82yskotliwa+Psinka+-+Szkolenie+ps%C3%B3w/@50.648997,17.627841,15z/data=!4m2!3m1!1s0x0:0xba17afe65cc88c66?sa=X&ved=2ahUKEwiQ4Ojf3fX2AhXJxIsKHQ0LACUQ_BJ6BAg2EAU">
            <p>Gościejowice Małe 5</p>
            <p>49-100 Niemodlin</p>
          </a>
        </div>
      </div>
    <div
      class="m-auto mt-10 h-[400px] w-full border-black bg-contain bg-center bg-no-repeat"
      style="background-image: url('/img/dog-7.webp'); " />
  </div>
  <footer id='footer' class='w-[426px] bg-gray flex flex-col items-center'>
    <div class="font-newSpirit py-8 text-xl">
      Błyskotliwa Psinka
    </div>
    <nav class='flex flex-col items-center font-gilroyMedium gap-3 tracking-wider text-xl pb-8'>
      <MenuItem href='#hotel' text='hotel'></MenuItem>
      <MenuItem href='#szkolenia' text='szkolenia'></MenuItem>
      <MenuItem href='#behawiorysta' text='behawiorysta'></MenuItem>
      <MenuItem href='#galeria' text='galeria'></MenuItem>
      <MenuItem href='#kontakt' text='kontakt'></MenuItem>
      <MenuItem text='dofinansowanie' on:click={() => modal.show()}></MenuItem>
    </nav>
  <div class='flex flex-col items-center gap-4 text-xs font-gilroy tracking-wider pb-8'>
    <div>© 2022 Błyskotliwa psinka</div>
    <div>Designed by Anastasiia Gradova</div>
  </div>
</footer>
  </div>
</div>
<Modal bind:this={modal}>
  <div class="text-center flex flex-col items-center">
    <img src="img/eu-logos.png"/>
    <h1>Europejski Fundusz Rolny na rzecz Rozwoju Obszarów Wiejskich: Europa inwestująca w obszary wiejskie</h1>
    <p>Operacja pn. „Budowa hotelu dla psów oraz utworzenie ośrodka tresury psów w Gościejowicach Małych”,
      której
      celem jest podjęcie jednoosobowej działalności gospodarczej w miejscowości Gościejowice Małe poprzez
      przebudowę budynku na psi hotel oraz zakup niezbędnego wyposażenia i sprzętu, współfinansowana jest ze
      środków Unii Europejskiej w ramach poddziałania 19.2 „Wsparcie na wdrażanie operacji w ramach strategii
      rozwoju lokalnego kierowanego przez społeczność” Programu Rozwoju Obszarów Wiejskich na lata 2014-2020.
      W
      wyniku operacji powstała działalność gospodarcza wraz z samozatrudnieniem.</p>
    <p>Projekt realizowany we współpracy z Lokaną Grupą Działania Partnerstwo Borów Niemodlińskich Rynek 52
      49-100 Niemodlin. Stowarzyszenie Partnerstwo Borów Niemodlińskich działa na terenie gmin Biała,
      Dąbrowa, Łambinowice, Niemodlin, Prószków, Strzeleczki, Tułowice, Komprachcice</p>
    <a href="http://boryniemodlinskie.pl/121/strona-glowna.html">www.boryniemodlinskie.pl</a>
  </div>
</Modal>

<style>
  .eu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
</style>
