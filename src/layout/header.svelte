<script>
    export let title;
</script>

<div class="header">
    <div class="title">{title}</div>
    <slot></slot>
</div>


<style>
	.header {
		background-image: url('../assets/wave.jpg');
		background-repeat: no-repeat;
		height: 300px;
		width: 100%;
		text-align: center;
        padding: 50px 10px 10px 10px;
	}
    .title {
        color: #fff;
        font-weight: bold;
        font-size: 40px;
    }
</style>