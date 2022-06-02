<template>
	<view class="list">
		<view class="list_item" v-for="(item,index) in list" :key="index" @tap="enterInner(index)">
			<view class="left">
				<image :src="item.url" mode="widthFix" style="width: 20px;"></image>
			</view>
			<view class="center">
				{{item.name}}
			</view>
			<text v-if="item.isActive" style="white-space: nowrap;position: absolute;right: 40px;color: #999999;">{{$t("mine.open")}}</text>
			<view class="right">
				<u-icon name="arrow-right" color="#555555"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"List",
		props:{
			list:{
				type: Array,
				default(){
					return []
				}
			}
		},
		mounted() {
		},
		data() {
			return {
				
			};
		},
		methods:{
			enterInner(index){
				this.$emit('getIndex',index)
			}
		}
		
	}
</script>

<style lang="scss" scoped>
.list{
	.list_item{
		display: flex;
		height: 80rpx;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		font-size: 14px;
		padding: 12rpx 0;
		position: relative;
		.left{
			width: 12%;
			display: flex;
			height: 100%;
			justify-content: center;
			align-items: center;
		}
		.center{
			width: 68%;
		}
		.right{
			width: 20%;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			
		}
	}
}
</style>