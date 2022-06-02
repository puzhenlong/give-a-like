<template>
	<view class="tabList">
		<slot name="left"></slot>
		<slot name="center"></slot>
		<slot name="right"></slot>
	</view>
</template>

<script>
	export default {
		name:"tabList",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.tabList{
	display: flex;
	align-items: flex-start; 
	// align-items: center; 
	justify-content: space-between;
	padding: 20rpx 30rpx;
	// background-color: #fff;
	
	
}
</style>