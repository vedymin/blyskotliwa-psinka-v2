<script>
	import { Route, Timer } from 'lucide-svelte';

	export let distance = '0.0km';
	export let duration = '0h 0min';
	export let title = '';
	export let image = '';
</script>
<div class='flex xl:flex-row mb-10 flex-col justify-center'>
	<img src={image} class='w-[600px] xl:mx-10'>
	<div class='flex flex-col xl:mt-4'>
		<h1 class='font-gilroySemiBold text-2xl pb-4 mt-4 xl:mt-0'>Trasa "{title}"</h1>
		<div class='flex flex-row items-end pb-2 gap-2 justify-center xl:justify-normal'>
			<Route class='inline w-10'></Route>
			<div class='text-xl'>{distance}</div>
		</div>
		<div class='flex flex-row items-end gap-2 justify-center xl:justify-normal'>
			<Timer class='inline w-10'></Timer>
			<span class='text-xl'>{duration}</span>
		</div>
		<div class='pt-6 text-justify xl:w-[80%] justify-center xl:justify-normal'>
			<slot></slot>
		</div>
	</div>
</div>
