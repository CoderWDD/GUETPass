<template>
	<view class="container">
		<text class="firstText">{{firstText}}</text>
		<image class="iconView" :src="iconUrl"></image>
		<text class="secondText">{{secondText}}</text>
		<text class="thirdText">{{thirdText}}</text>
	</view>
</template>

<script>
	export default{
		props: [
			'firstText',
			'secondText',
			'thirdText',
			'iconUrl'
		]
	}
</script>

<style>

.container{
	border-radius: 8rpx;
	display: flex;
	flex-direction: column;
	background-color: white;
	width: 340rpx;
	height: 300rpx;
}

.firstText{
	font-size: 33rpx;
	margin-left: 20rpx;
	margin-top: 20rpx;
}

.iconView{
	display: flex;
	justify-content: center;
	border:0;
	margin-top: 20rpx;
	margin-left: 35%;
	padding:0;
	max-width:40px;
	width:e-xpression(this.width>40px?"40px":this.width);
	max-height:40px;
	height:e-xpression(this.height>40px?"40px":this.height);
	text-align: center;
}

.secondText{
	color: #9E9E9EFF;
	margin-top: 20rpx;
	text-align: center;
	font-weight: 500;
	font-size: 30rpx;
}

.thirdText{
	color: black;
	margin-bottom: 20rpx;
	text-align: center;
	font-weight: 500;
	font-size: 30rpx;
}

</style>