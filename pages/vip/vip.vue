<template>
	<view class="vip">
		<view class="head">
			<toggleLanguage></toggleLanguage>
		</view>
		<view class="vip_card">
			<grade-card class="card_item1"></grade-card>
			<grade-card class="card_item2"></grade-card>
			<grade-card class="card_item3"></grade-card>
			<grade-card class="card_item4"></grade-card>
			<grade-card class="card_item5"></grade-card>
			<grade-card class="card_item6"></grade-card>
		</view>
	</view>
</template>

<script>
	import gradeCard from './components/gradeCard.vue'
	export default {
		components:{
			gradeCard
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.vip{
	height: 100vh;
	font-size: 14px;
	
	.vip_card{
		padding: 0 20rpx;
		.card_item1{
			background: url('../../static/vip/vip0@3x.png');
			background-size: 100% 100%;
		}
		.card_item2{
			background: url('../../static/vip/VIP1@3x.png');
			background-size: 100% 100%;
		}
		.card_item3{
			background: url('../../static/vip/VIP2@3x.png');
			background-size: 100% 100%;
		}
		.card_item4{
			background: url('../../static/vip/VIP3@3x.png');
			background-size: 100% 100%;
		}
		.card_item5{
			background: url('../../static/vip/VIP4@3x.png');
			background-size: 100% 100%;
		}
		.card_item6{
			background: url('../../static/vip/VIP5@3x.png');
			background-size: 100% 100%;
		}
	}
}
</style>
