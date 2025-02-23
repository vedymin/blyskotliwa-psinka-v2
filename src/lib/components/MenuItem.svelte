<script>
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	/** @type {{href?: string, text?: string}} */
	let { href = '', text = 'edit me' } = $props();
	// export let noSmooth = false;

	// function scrollIntoView({ target }) {
	// 	console.log(target);
	// 	if ($page.url.pathname === '/' && target.href.includes('#')) {
	// 		console.log('na glownej');
	// 		href = href.replace('/', '')
	// 	}
	// 	console.log(href);
	// 	if (href.includes('/')) {
	// 		console.log('goto nie działa');
	// 		goto(href);
	// 		return;
	// 	}
	// 	if (noSmooth) {
	// 		console.log("noSmooth");
	// 		goto(href);
	// 		return;
	// 	}
	// 	console.log(target);
	// 	const el = document.querySelector(target.getAttribute('href'));
	// 	// For 'szkolenia' move 100px before when media is xl
	// 	if (window.innerWidth >= 1280 && el.id === 'szkolenia') {
	// 		const position = el.getBoundingClientRect();
	// 		let destination;
	// 		if (position.top < 0) {
	// 			destination = position.top * -1 - 250;
	// 		} else {
	// 			destination = position.top - 100;
	// 		}
	// 		scrollTo({
	// 			top: destination,
	// 			behavior: 'smooth'
	// 		});
	// 		return;
	// 	}
	// 	if (window.innerWidth >= 1280 && el.id === 'kontakt') {
	// 		scrollTo({
	// 			top: document.body.scrollHeight,
	// 			behavior: 'smooth'
	// 		});
	// 		return;
	// 	}
	// 	if (!el) return;
	// 	el.scrollIntoView({
	// 		behavior: 'smooth'
	// 	});
	// }
</script>

<div class='border-transparent border-b-2 hover:border-black' onclick={bubble('click')}>
	<a
		class='cursor-pointer'
		href={href ? href : null}
		>{text}</a>
</div>
