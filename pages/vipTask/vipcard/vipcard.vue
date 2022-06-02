<template>
	<view class="vipcard">
		<view class="vip0 box" @click="enterTaskList(0)">
			<view class="tit">
				VIP0
			</view>
			<text>每日收益：$0.3</text>
			<view :class="{current : current_grade == 0}" v-show="current_grade == 0">
				当前等级
			</view>
		</view>
		<view class="vip1 box" @click="enterTaskList(1)">
			<view class="tit">
				VIP1
			</view>
			<text>每日收益：$0.3</text>
			<view :class="{current : current_grade == 1}" v-show="current_grade == 1">
				当前等级
			</view>
		</view>
		<view class="vip2 box" @click="enterTaskList(2)">
			<view class="tit">
				VIP2
			</view>
			<text>每日收益：$0.3</text>
			<view :class="{current : current_grade == 2}" v-show="current_grade == 2">
				当前等级
			</view>
		</view>
		<view class="vip3 box" @click="enterTaskList(3)">
			<view class="tit">
				VIP3
			</view>
			<text>每日收益：$0.3</text>
			<view :class="{current : current_grade == 3}" v-show="current_grade == 3">
				当前等级
			</view>
		</view>
		<view class="vip4 box" @click="enterTaskList(4)">
			<view class="tit">
				VIP4
			</view>
			<text>每日收益：$0.3</text>
			<view :class="{current : current_grade == 4}" v-show="current_grade == 4">
				当前等级
			</view>
		</view>
		<view class="vip5 box" @click="enterTaskList(5)">
			<view class="tit">
				VIP5
			</view>
			<text>每日收益：$0.3</text>
			<view :class="{current : current_grade == 5}" v-show="current_grade == 5">
				当前等级
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:{
			current_grade:{
				type: Number,
				default: 0
			}
		},
		methods:{
			enterTaskList(index){
				this.$emit("enterTaskList",index)
			}
		}
	}
</script>

<style lang="scss">
.vipcard{
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	.box{
		width: 48%;
		display: flex;
		position: relative;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 240rpx;
		margin-bottom: 12rpx;
		color: #fff;
		.current{
			position: absolute;
			left: 0;
			top: 30rpx;
			padding: 8rpx 16rpx;
			border-radius: 0 30rpx 30rpx 0;
			background: rgba(0, 0, 0, .2);
			font-size: 10px;
		}
		text{
			font-size: 12px;
		}
		.tit{
			font-size: 24px;
			font-style: italic;
		}
	}
	.vip0{
		background: url("../../../static/viptask/vip0.png") no-repeat;
		background-size: 100% 100%;
	}
	.vip1{
		background: url("../../../static/viptask/VIP1.png") no-repeat;
		background-size: 100% 100%;
	}
	.vip2{
		background: url("../../../static/viptask/VIP2.png") no-repeat;
		background-size: 100% 100%;
	}
	.vip3{
		background: url("../../../static/viptask/vip3.png") no-repeat;
		background-size: 100% 100%;
	}
	.vip4{
		background: url("../../../static/viptask/vip4.png") no-repeat;
		background-size: 100% 100%;
	}
	.vip5{
		background: url("../../../static/viptask/VIP5.png") no-repeat;
		background-size: 100% 100%;
	}
	
}
</style>
