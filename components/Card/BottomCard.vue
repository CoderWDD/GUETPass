<template>
	<view class="container">
		<button class="btn" @click="BackToHome()">返回首页</button>
		<button class="btn">出行记录</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			BackToHome(){
				uni.switchTab({
					url:'/pages/HomePage/HomePage'
				})
			}
		}
	}
</script>

<style>
	
.container{
	display: flex;
	flex-direction: row;
	position: relative;
	bottom: 0;
	background-color: white;
	height: 100%;
}

.btn{
	height: fit-content;
	width: 40%;
	margin-top: 3%;
	font-size: 30rpx;
}
</style>