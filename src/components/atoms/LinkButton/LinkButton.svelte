<script lang="ts">
	export let href: string = '#';
</script>

<a {...$$restProps} {href} target="_self">
	<div>
		<slot />
	</div>
</a>

<style>
	a {
		all: unset;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		cursor: pointer;
		box-sizing: border-box;
		text-align: center;
		width: 168px;
		height: 57px;

		border: var(--link-button-border);
		border-radius: var(--link-button-border-radius);
		box-shadow: var(--link-button-shadow);

		background-color: var(--yellow);
		color: var(--red);

		font-family: 'Texas Tango';
		font-size: 32px;

		&:hover {
			border: none;
			box-shadow: var(--hover-shadow);
		}
		&:active {
			border: none;
			box-shadow: var(--active-shadow);
		}
	}
</style>
