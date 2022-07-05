<template>
	<view class="container">
		<view class="textContainer">
			<text class="agreeText">已同意</text>
			<text class="lienceText">桂电学生桂电学生临时通行证（备案  </text>
		</view>
		<text class="zhiText">制）</text>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				value: 0,
				selectContents: [{
						value: 0,
						text: "桂电学生桂电学生临时通行证s（备案制）"
					},
					{
						value: 1,
						text: "桂电学生桂电学生临时通行证"
					}
				]
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
		border: none;
		text-align: center;
		flex-direction: column;
		background-color: white;
		border-radius: 8rpx;
		margin-top: 3%;
		margin-left: 3%;
		margin-right: 3%;
	}

	.textContainer {
		margin-top: 20rpx;
		flex-direction: row;
		justify-content: center;
		text-align: center;
	}

	.agreeText {
		margin-top: 5rpx;
		margin-right: 4px;
		text-align: center;
		height: fit-content;
		border-radius: 7rpx;
		width: 100rpx;
		color: white;
		background-color: #0ABF5E;
		font-size: 25rpx;
	}

	.lienceText {
		color: black;
		text-align: center;
		font-weight: 500;
		font-size: 30rpx;
		position: relative;
	}

	/* .lienceText::after{
	width: 0;
	height: 0;
	border: 10px solid transparent;
	border-left-color:red;
	content:'';
	position: absolute;
	left: 100px;
	top: 10px;
	transform: rotate(90deg);
} */
	.lienceText::after,
	.lienceText::before {
		width: 0;
		height: 0;
		border: 7px solid transparent;
		border-left-color: red;
		position: absolute;
		content: "";
	}

	.lienceText::before {
		top: 9rpx;
		left: 480rpx;
		border-left-color: #85888b;
		transform: rotate(90deg);
	}

	.lienceText::after {
		top: 6rpx;
		left: 480rpx;
		border-left-color:white;
		transform: rotate(90deg);
	}

	.zhiText {
		margin-top: 0%;
		margin-bottom: 20rpx;
		font-size: 30rpx;
	}
</style>
