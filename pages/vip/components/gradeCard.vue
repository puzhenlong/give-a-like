<template>
	<view class="gradeCard">
		<view class="box">
			<!-- <image src="../../../static/vip/vip0@3x.png" mode="widthFix" style="width: 100%;"></image> -->
			<view class="current_grade" v-if="isCurrent">
				当前等级
			</view>
			<view class="detail">
				<view class="vip_id">
					VIP0
				</view>
				<view class="money">
					<view class="everyday">
						{{$t("vip.day_income")}}: $3
					</view>
					<view class="cost">
						{{$t("vip.cost")}}： $800.00
					</view>
				</view>
			</view>
			<view class="validity">
				<u-button :text="$t('vip.immediate_join')" size="mini" color="rgba(0,0,0,.4)"></u-button>
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCurrent:false
			};
		}
	}
</script>

<style lang="scss">
.gradeCard{
	padding: 6rpx 20rpx;
	margin-bottom: 20rpx;
	.box{
		position: relative;
		// background-color: pink;
		height: 260rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40rpx;
		.detail{
			.vip_id{
				font-size: 30px;
				font-style: italic;
				color: #fff;
			}
			.money{
				color: #fff;
				.everyday{
					font-size: 10px;
					padding: 20rpx 0;
				}
				.cost{
					font-size: 12px;
				}
			}
		}
	}
}
</style>
