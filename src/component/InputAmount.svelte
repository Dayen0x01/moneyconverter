<script>
    import { amount } from "./store.js";

    let amountFormatted = null;
    let currencyInput;

    const handleChange = () => {
        let cleanedInput = formatNumber(currencyInput.value);

        amountFormatted = cleanedInput;

        $amount = amountFormatted;
     };

     function formatNumber(n) {
        return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

</script>

<input type="tel" placeholder="0.00" value={amountFormatted} bind:this={currencyInput} on:input={handleChange} />

<style>
    input {
		height: 40px;
		border-radius: 5px;
		border: 1px solid #ccc;
		padding: 5px;
		margin-top: 5px;
	}
</style>