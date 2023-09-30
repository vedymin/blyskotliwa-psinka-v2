<script>
  export let href = "";
  export let text = "edit me";
  export let noSmooth = false;
  function scrollIntoView({ target }) {
    if (noSmooth) {
      return;
    }
    const el = document.querySelector(target.getAttribute("href"));
		console.log(el.id);
    // For 'szkolenia' move 100px before when media is xl
    if (window.innerWidth >= 1280 && el.id === "szkolenia") {
      const position = el.getBoundingClientRect();
			let destination;
			if (position.top < 0) {
				destination = position.top * -1 - 250
			} else {
				destination = position.top - 100
			}
      scrollTo({
        top: destination,
        behavior: "smooth",
      });
      return;
    }
		if (window.innerWidth >= 1280 && el.id === "kontakt") {
			scrollTo({
				top: document.body.scrollHeight,
				behavior: "smooth",
			});
			return
		}
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<div class="border-transparent border-b-2 hover:border-black" on:click>
  <a
    class="cursor-pointer"
    href={href ? href : null}
    on:click|preventDefault={scrollIntoView}>{text}</a>
</div>
