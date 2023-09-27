<script>
	export let href = '';
	export let text = 'edit me';

</script>

<div class='border-transparent border-b-2 hover:border-black '>
	<a class='cursor-pointer' href='{href ? href : null}' on:click>{text}</a>
</div>
