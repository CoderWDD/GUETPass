<template>
	<view>
		<view class="wx_nav">
			<uni-icons type="scan" @click="Scan"></uni-icons>
			<text>微信</text>
		</view>
		<view class="container">
			<Dialogue></Dialogue>
			<Dialogue></Dialogue>
			<Dialogue></Dialogue>
			<Dialogue></Dialogue>
			<Dialogue></Dialogue>
			<Dialogue></Dialogue>
			<Dialogue></Dialogue>
			<Dialogue></Dialogue>
			<Dialogue></Dialogue>
			<Dialogue></Dialogue>
			<Dialogue></Dialogue>
			<Dialogue></Dialogue>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: []
			}
		},
		methods: {
			Scan(){
				uni.scanCode({
					success:function(res){
						console.log('条码类型' + res.scanType);
						console.log('条码内容' + res.result);
						if(res.result === 'wxp://f2f61yJcOA5TQY-YdVQ71J40b8DJbSuK2_DkjfefQQmWz57QgydbiAyZMbcyDfTkGK-5'){
							uni.switchTab({
								url:'/pages/AddressBook/AddressBook'
							})
						}
					}
				})
			}
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			if(e.float == "left"){
				uni.scanCode({
					success:function(res){
						console.log('条码类型' + res.scanType);
						console.log('条码内容' + res.result);
					}
				})
			}
		}
	}
</script>

<style>
.container{
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
}
.wx_nav{
	text-align: center;
	height: 160rpx;
	width: 100%;
	line-height: 160rpx;
	font-size: 13px;
	display: flex;
	justify-content: center;
}
</style>
