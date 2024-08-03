<script>
	import { copy } from 'svelte-copy';
</script>

<div class="wrapper">
	<div class="header-text">Поддержать проект можно рублем</div>
	<div class="sub-header-text">СБП "Сбербанк"<br />Роман Сергеевич М.</div>
	<div
		class="copy-text"
		use:copy={'+79119998933'}
		on:svelte-copy={() => alert('Номер телефона скопирован')}
	>
		+7 911 999 89 33<br />скопировать номер телефона
	</div>
	<div
		class="copy-text"
		use:copy={'2202206314670147'}
		on:svelte-copy={() => alert('Номер карты скопирован')}
	>
		2202206314670147<br />скопировать номер карты
	</div>
	<div class="comment-text">
		Просьба писать в комментарии к переводу<br />"на развитие Snake Way"
	</div>
</div>

<style>
	.wrapper {
		text-align: center;
		padding: 50px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		font-family: 'Century Gothic';
	}
	.header-text {
		margin-bottom: 20px;
		font-size: 35px;
		@media (max-width: 640px) {
			font-size: 20px;
		}
	}
	.sub-header-text {
		margin-bottom: 20px;
		font-size: 30px;
		@media (max-width: 640px) {
			font-size: 15px;
		}
	}
	.comment-text {
		margin-top: 20px;
		font-family: 'Century Gothic Bold';
		font-size: 20px;
		@media (max-width: 640px) {
			font-size: 13px;
		}
	}
	.copy-text {
		width: 500px;
		box-sizing: border-box;
		padding: 5px 10px;
		border: 20px solid rgb(230, 230, 230);
		background-color: rgb(204, 204, 204);
		margin-bottom: 10px;
		cursor: pointer;
		font-size: 25px;
		&:hover {
			background-color: rgb(145, 145, 145);
		}
		@media (max-width: 640px) {
			width: 90%;
			font-size: 13px;
			border-width: 10px;
		}
	}
</style>
