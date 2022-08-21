<script>
    import { amount, from, to, converted } from "./store.js";

    function Convert() {
        if($from !== $to) {
            getCallbackAPI().then(x => { 
                let price = x;
                let result = $amount * price;
                $converted = result;
            });
        }
        else {
            $converted = $amount;
        }
    }

    async function getCallbackAPI() {
        let response = await fetch(`https://economia.awesomeapi.com.br/json/last/${$from}-${$to}`);
        let data = await response.json();
        let price = $to === 'USD' ? data.BRLUSD.bid : data.USDBRL.bid;
        return price;
    }

</script>


<button class="solid-button" on:click={Convert}>CONVERT</button>

<style>
	.solid-button {
		width: 350px;
		height: 60px;
		border-radius: 5px;
		margin-top: 10px;
		cursor: pointer;
		transition: 0.5s;
		background-color: #245DAA;
		border: none;
		font-weight: bold;
		color: #fff;
		font-size: 15px;
	}
	.solid-button:hover {
		background-color: #2A65B1;
	}
    @media only screen and (max-width: 700px) {
        .solid-button {
            width: 100%;
        }
    }
</style>