<script>
	import {converted, to } from "./component/store.js";
	import Header from "./layout/header.svelte";
	import Card from "./layout/Card.svelte";
	import InputAmount from "./component/InputAmount.svelte";
	import OptionCoin from "./component/OptionCoin.svelte";
	import ButtonConvert from "./component/ButtonConvert.svelte";
</script>

<Header title="MoneyConverter">
	<Card>
		<div class="container-input">
			<div class="input-group">
				<label>Amount</label>
				<InputAmount />
			</div>

			<div class="input-group">
				<label>From</label>
				<OptionCoin output="from" />
			</div>
			<div class="input-group">
				<label>To</label>
				<OptionCoin output="to" />
			</div>
		</div>

		<div class="container-value">
			{$to === 'BRL' ? 'R$' : '$'}<b>{$converted}</b>
		</div>

		<ButtonConvert/>
	</Card>
</Header>



<style>
	.container-input {
		width: 100%;
		min-height: 100px;
		display: flex;
		justify-content: center;
		padding: 10px;
	}
	.input-group {
		display: flex;
		flex-direction: column;
		text-align: left;
		margin: 10px;
	}
	.input-group label {
		font-weight: bold;
	}
	.container-value {
		width: 100%;
		padding: 10px;
		font-weight: bold;
	}
	.container-value b {
		font-size: 40px;
	}
	@media only screen and (max-width: 700px) {
        .container-input {
			display: block;
		}
   }

</style>