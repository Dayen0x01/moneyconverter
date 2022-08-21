<script>
    import { from, to } from "./store.js";

    let coins = [['BRL','Brazilian Real'], ['USD', 'US Dollar']];
    export let output = "from";

    let index = 1;
	let onChangeIndex = 1
	
	const onChange = () => {
		onChangeIndex = index;
        let code = coins[onChangeIndex - 1][0];

        if(output === "from") {
            from.update(n => code);
        }
        else {
            to.update(n => code);
        }
	}

</script>

<select bind:value={index} on:change={onChange}>
    {#each coins as coin, i}
        <option value={i + 1}>{coin[0]} - {coin[1]}</option>
    {/each}
</select>

<style>
    select {
        height: 40px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 5px;
        margin-top: 5px;
        background-color: #fff;
        min-width: 200px;
    }
</style>