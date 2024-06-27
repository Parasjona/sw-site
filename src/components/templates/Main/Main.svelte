<main>
	<slot name="content">Content slot</slot>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		scroll-behavior: smooth;
		width: 100%;
		height: 100vh;
		overflow: auto;
	}
</style>
