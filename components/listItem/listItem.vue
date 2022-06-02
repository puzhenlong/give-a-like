<template>
	<view>
		<view class="language_item" v-for="(item,index) in languages" @tap="switchLanguage(index)">
			<view class="left">
				<u-avatar
				:src="item.url" 
				size="22"
				></u-avatar>	
				<text>{{item.text}}</text>
			</view>
			<view class="right">
				<u-icon name="arrow-right" size="20"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"listItem",
		data() {
			return {
				
			};
		},
		props:{
			languages:{
				type: Array,
				default:function(){
					return []
				}
			}
		},
		methods:{
			switchLanguage(index){
				this.$emit('switchLanguage',index)
			}
		}
		
	}
</script>

<style lang="scss">
.language_item{
				display: flex;
				justify-content: space-between;
				padding: 40rpx 0;
				.left{
					display: flex;
					align-items: center;
					justify-content: space-between;
					text{
						margin-left: 20rpx;
					}
				}
			}
</style>