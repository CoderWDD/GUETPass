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
		<modal v-if="show" title="输入名字" confirm-text="确定" @confirm="confirm"> 
			<input type='text' placeholder="请输入名字" v-model="name" />
		</modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				show: true,
			}
		},
		methods: {
			Scan(){
				let name = this.name;
				uni.scanCode({
					success:function(res){
						console.log('条码类型' + res.scanType);
						console.log('条码内容' + res.result);
						if(res.result === 'https://yq.guet.edu.cn/s/tHB4C'){
							uni.redirectTo({
								url:'/pages/HuaJiangPage/HuaJiangPage?name=' + name
							})
						}
					}
				})
			},
			confirm() {
				console.log(this.name);
				this.show = false;
			}
		},
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
