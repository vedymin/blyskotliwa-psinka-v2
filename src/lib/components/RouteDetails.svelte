<script>
	import { Route, Timer } from 'lucide-svelte';

	export let distance = '0.0km';
	export let duration = '0h 0min';
	export let title = '';
	export let image = '';
</script>
<div class='flex flex-row mb-10'>
	<img src={image} class='w-[600px] mx-10'>
	<div class='flex flex-col mt-4'>
		<h1 class='font-gilroySemiBold text-2xl pb-4'>Trasa "{title}"</h1>
		<div class='flex flex-row items-end pb-2 gap-2'>
			<Route class='inline w-10'></Route>
			<div class='text-xl'>{distance}</div>
		</div>
		<div class='flex flex-row items-end gap-2'>
			<Timer class='inline w-10'></Timer>
			<span class='text-xl'>{duration}</span>
		</div>
		<div class='pt-6 text-justify w-[80%]'>
			<slot></slot>
		</div>
	</div>
</div>
