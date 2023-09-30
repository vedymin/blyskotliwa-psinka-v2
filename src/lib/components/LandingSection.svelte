<script>
  import MobileMenu from "$lib/components/MobileMenu.svelte";
  import MenuItem from '$lib/components/MenuItem.svelte';

  let mobileMenuIsShown = false;
</script>

<MobileMenu bind:mobileMenuIsShown></MobileMenu>
<div id="landing" class="relative h-[880px] border-black">
    <nav
      class="invisible xl:visible flex flex-row gap-20 font-gilroyMedium justify-end w-full p-10 text-xl" >
      <MenuItem href="#hotel" text="hotel"></MenuItem>
      <MenuItem href="#szkolenia" text="szkolenia"></MenuItem>
      <MenuItem href="#behawiorysta" text="behawiorysta"></MenuItem>
      <!--			<MenuItem href="#galeria" text="galeria"></MenuItem>-->
      			<MenuItem href="#kontakt" text="kontakt"></MenuItem>
    </nav>
  <div
    class="absolute left-4 top-14 h-32 w-24 border-black bg-cover bg-center xl:left-16 xl:h-40 xl:w-32"
    style="background-image: url('/img/logo-min.png'); " />
  <div
    on:click={() => (mobileMenuIsShown = true)}
    class="absolute right-6 top-20 z-40 flex h-12 w-24 cursor-pointer items-center justify-center xl:invisible">
    <svg
      class="h-6 w-12"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 48 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M0 9h48m-48 6.75h48" />
    </svg>
  </div>
  <div
    class="absolute right-0 top-[110px] aspect-auto h-[711px] w-[309px] border-black bg-contain bg-center bg-no-repeat xl:hidden"
    style="background-image: url('/img/dog-1.webp'); " />
  <div
    class="invisible absolute right-20 top-[120px] aspect-auto h-[711px] w-[710px] border-black bg-contain bg-center bg-no-repeat xl:visible"
    style="background-image: url('/img/dog-1-xl.webp'); " />
  <div
    class="absolute left-4 top-[450px] font-newSpirit text-[85px] text-yellow xl:left-20 xl:top-[300px] xl:text-[110px]">
    Cześć!
  </div>
  <div
    class="absolute left-[53px] top-[570px] flex flex-col items-end border-black font-gilroyMedium text-xl leading-tight tracking-wider xl:left-[270px] xl:top-[450px] xl:text-2xl">
    <div class="border-black">Mam świetną</div>
    <div>wiadomość!</div>
  </div>
  <div
    class="absolute left-[60px] top-[650px] h-12 w-14 border-black bg-contain bg-no-repeat xl:left-[135px] xl:top-[580px] xl:h-20 xl:w-24"
    style="background-image: url('/svg/strzalka.svg'); " />
</div>
