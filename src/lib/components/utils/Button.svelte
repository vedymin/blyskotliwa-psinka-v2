<script lang="ts">
	let { title, href } = $props();
</script>

<a {href}>
	<button
		class='left-12 top-56 h-[50px] w-[210px] rounded-full bg-white font-gilroy
          tracking-wider shadow-button transition-all hover:shadow-button-hover active:scale-95 active:shadow-button
          xl:left-96 xl:top-72 xl:text-sm xl:hover:scale-105 xl:hover:bg-gold xl:active:scale-100'
	>{title}
	</button>
</a>
