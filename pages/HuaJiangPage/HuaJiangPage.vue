<template>
	<view>
		<view>
			<text class="guetTitle">桂电畅行证</text>
			<text class="huajiangTitle">花江检查点</text>
		</view>
		<view>
			<PassCard :name="name"></PassCard>
		</view>
		
		<view>
			<view class="rowCard">
				<CheckCar firstText='核酸检测 >' secondText='近48小时无核酸记录' thirdText='近4天未检测' iconUrl='/static/test-tube.png'></CheckCar>
				<CheckCar firstText='行程记录 >' secondText='未核验行程卡' thirdText='近4天未核验' iconUrl='/static/location-history.png'></CheckCar>
			</view>
		</view>
		
		<view>
			<AntiScamCard></AntiScamCard>
		</view>
		
		<view>
			<AgreeCard></AgreeCard>
		</view>
		
		<view class="bottomView">
			<BottomCard></BottomCard>
		</view>
		
	</view>
</template>

<script>
	import PassCard from "@/components/Card/PassCard.vue"
	import CheckCar from "../../components/Card/CheckCard.vue"
	import AntiScamCard from "@/components/Card/AntiScamCard.vue"
	import AgreeCard from '@/components/Card/AgreeCard.vue'
	import BottomCard from '@/components/Card/BottomCard.vue'
	export default {
		data() {
			return {
				name:'彭于晏'
			}
		},
		methods: {
			
		},
		components:{
			PassCard,
			CheckCar,
			AntiScamCard,
			AgreeCard,
			BottomCard
		},
		onLoad(option) {

			let ori = option.name.substring(0,option.name.length - 1);
			this.name = option.name.replace(ori,"*".repeat(option.name.length-1));
		}
	}
</script>

<style>
page{
	background-color: #09BA08;
}

.uni-stat__select {
	padding: 0%;
}

.uni-stat__select{
	border: none;
}

.guetTitle{
	margin-top: 6%;
	display: flex;
	justify-content: center;
	color: white;
	font-size: 32rpx;
	font-weight: 100;
}

.huajiangTitle{
	margin-top: 3%;
	display: flex;
	justify-content: center;
	color: white;
	font-size: 40rpx;
}


.rowCard{
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-right: 3%;
	margin-left: 3%;
	margin-top: 3%;
	width: 94%;
}

.bottomView{
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 120rpx;
}

</style>
