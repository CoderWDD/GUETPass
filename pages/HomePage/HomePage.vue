<template>
	<view>
		<view class="wx_nav">
			<view class="iconfont icon-scan wx_icon" @click="Scan()"></view>
			<view class="wx_text">
				<text>微信</text>
			</view>
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
				navigationBarHeight: 0,
			}
		},
		onLoad() {
			let sysInfo = wx.getSystemInfoSync();
			let menuInfo = wx.getMenuButtonBoundingClientRect();
			let navigationBarHeight = (menuInfo.top - sysInfo.statusBarHeight) * 2 + menuInfo.height;
			this.navigationBarHeight = navigationBarHeight;
		},
		methods: {
			Scan(){
				let name = this.name;
				uni.scanCode({
					success:function(res){
						console.log('条码类型' + res.scanType);
						console.log('条码内容' + res.result);
						if(res.result === 'https://yq.guet.edu.cn/s/tHB4C' || res.result === 'https://yq.guet.edu.cn/s/JbNTR'){
							uni.redirectTo({
								url:'/pages/HuaJiangPage/HuaJiangPage?name=' + name
							})
						}else if (res.result === 'https://yq.guet.edu.cn/s/1M20D7'){
							uni.redirectTo({
								url:'/pages/HoujiePage/HoujiePage?name=' + name
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
	@import url(@/static/icons/iconfont.css);
.container{
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
}
.wx_nav{
	text-align: center;
	height: 200rpx;
	width: 100%;
	line-height: 200rpx;
	font-size: 13px;
	display: flex;
}

.wx_icon{
	margin-left: 8px;
	margin-top: 20px;
}

.wx_text{
	margin-left: 40%;
	margin-top: 20px;
}
</style>
