<script>
  import MenuItem from "$lib/components/MenuItem.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import LandingSection from "$lib/components/LandingSection.svelte";
  import HotelSection from "$lib/components/HotelSection.svelte";
  import SzkoleniaSection from "$lib/components/SzkoleniaSection.svelte";
  import BehawiorystaSection from "$lib/components/BehawiorystaSection.svelte";
  import CtaSection from "$lib/components/CtaSection.svelte";
  import ContactSection from '$lib/components/ContactSection.svelte';
  import FooterSection from '$lib/components/FooterSection.svelte';

</script>

<div class="bg-gray-100 border-black">
  <div
    class="relative m-auto w-[426px] overflow-hidden bg-white xl:w-[1280px]">
    <LandingSection></LandingSection>
    <HotelSection></HotelSection>
    <SzkoleniaSection></SzkoleniaSection>
    <BehawiorystaSection></BehawiorystaSection>
    <CtaSection></CtaSection>
    <ContactSection></ContactSection>
  </div>
  <FooterSection></FooterSection>
</div>

<style>
  .eu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
</style>
