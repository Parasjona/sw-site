<main>
	<slot name="header"></slot>
	<slot name="content">Content slot</slot>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		scroll-behavior: smooth;
		height: 100vh;
		overflow: auto;
		padding: 0 40px;

		@media (max-width: 700px) {
			padding: 0 20px;
		}
	}
</style>
