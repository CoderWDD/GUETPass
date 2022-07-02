<script>
	export default {
		onLaunch() {
			const systemInfo = wx.getSystemInfoSync();
			const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
			// 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
			this.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height +
				systemInfo.statusBarHeight;
			this.globalData.menuBotton = menuButtonInfo.top - systemInfo.statusBarHeight;
			this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
			this.globalData.menuHeight = menuButtonInfo.right;
		},
		globalData: {
			navBarHeight: 0, // 导航栏高度
			menuBotton: 0, // 胶囊距底部间距（保持底部间距一致）
			menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
			menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
