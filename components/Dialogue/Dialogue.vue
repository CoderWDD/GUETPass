<template>
	<view class="dialogue">

	</view>
</template>

<script>
	export default {
		name: "Dialogue",
		data() {
			return {

			};
		}
	}
</script>

<style>
	.dialogue {
		position: relative;
		height: 70px;
		width: auto;
		background-color: white;
		text-align: center;
	}

	.dialogue::after {
		content: '';
		position: absolute;
		left: 20%;
		top: 69px;
		right: auto;
		height: 2px;
		width: 80%;
		background-color: gainsboro;
	}
</style>
