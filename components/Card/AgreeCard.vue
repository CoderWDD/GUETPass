<template>
	<view class="container">
		<view class="textContainer">
			<text class="agreeText">已同意</text>
			<text class="lienceText">桂电学生桂电学生临时通行证（备案</text>
		</view>
		<text class="zhiText">制）</text>
	</view>
	
</template>

<script>
	export default{
		data (){
			return{
				value : 0,
				selectContents:[
					{value: 0, text: "桂电学生桂电学生临时通行证s（备案制）"},
					{value: 1, text: "桂电学生桂电学生临时通行证"}
				]
			}
		}
	}
</script>

<style>
@import url('@/pages/HuaJiangPage/PingFangSC_Regular.css');
.container{
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

.textContainer{
	margin-top: 20rpx;
	flex-direction: row;
	justify-content: center;
	text-align: center;
}

.agreeText{
	margin-top: 5rpx;
	text-align: center;
	height: fit-content;
	border-radius: 7rpx;
	width: 100rpx;
	color: white;
	background-color: #0ABF5E;
	font-size: 25rpx;
}

.lienceText{
	color: black;
	text-align: center;
	font-family: PingFangSCRegular;
	font-weight: 500;
	font-size: 30rpx;
}

.dropIcon{
	float: right;
	width:40px;
	height:40px;
	top: 0;
	right: 0;
}

.zhiText{
	margin-top: 0%;
	margin-bottom: 20rpx;
}

</style>