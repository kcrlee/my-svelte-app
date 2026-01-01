<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button
	type="button"
	onclick={async ()=>{

		const req = await fetch("/api")
		const data = await req.json()
		console.log(data)
}}
>
	Test
</button>
