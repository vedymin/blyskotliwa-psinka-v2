<script>
	export let href = '';
	export let text = 'edit me';
	export let noSmooth = false;
	function scrollIntoView({ target }) {
		if (noSmooth) {
			console.log('test');
			return
		};
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div class='border-transparent border-b-2 hover:border-black' on:click>
	<a class='cursor-pointer' href='{href ? href : null}' on:click|preventDefault={scrollIntoView}>{text}</a>
</div>
