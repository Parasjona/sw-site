<script lang="ts">
</script>

<div class="badge">
	<slot />
</div>

<style>
	.badge {
		height: 25px;
		width: 25px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Century Gothic Bold';
		font-size: 17px;
		border-radius: 50%;
		background-color: var(--yellow);
	}
</style>
