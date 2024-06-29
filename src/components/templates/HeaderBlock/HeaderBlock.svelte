<script></script>

<div class="header-wrapper">
	<slot />
</div>

<style>
	.header-wrapper {
		display: flex;
		justify-content: space-between;
		padding: 20px 0;

		@media (max-width: 700px) {
			padding: 10px 0;
		}
	}
</style>
