<template>
	<view class="container">
		<text class="time">{{time}}</text>
		<text class="lienceText">桂电学生临时通行证（备案制）</text>
		<text class="nameText">{{name}} 可以通行</text>
	</view>
</template>

<script>
	import moment from 'moment'
	export default{
		props:[
			'name'
		],
		data (){
			return{
				time: "",
			}
		},
		created() {

		},
		mounted() {
			setInterval(()=>{
				this.time = moment().format('HH:mm:ss:SS')
			},10)
		},
		methods:[
			
		]
	}
	
</script>

<style>

.container{
	border-radius: 8rpx;
	margin-top: 20rpx;
	margin-left: 3%;
	margin-right: 3%;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: white;
	width: 94%;
}

.time{
	margin-top: 15rpx;
	color: #14B710;
	font-size: 48rpx;
	font-weight: 400;
}

.lienceText{
	margin-top: 10rpx;
	color: #14B710;
	font-size: 48rpx;
	font-weight: 700;
}

.nameText{
	margin-top: 10rpx;
	margin-bottom: 15rpx;
	color: green;
	font-size: 40rpx;
	font-weight: 400;
}
</style>