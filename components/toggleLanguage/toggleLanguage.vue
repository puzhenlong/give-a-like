<template>
	<view class="toggle">
		<u-popup
		:show="show1" 
		:closeOnClickOverlay="true"
		@open="openPopup" 
		mode="right">
		            <view style="width: 90vw;">
		                <view class="select_tit">
		                	<view class="goback" @tap="goBack">
		                		<u-icon name="arrow-left" size="20"></u-icon>
		                	</view>
							<text style="white-space: nowrap;">{{$t("common.choose_lau")}}</text>
		                </view>
						<view class="languages">
							<listItem :languages="languages" @switchLanguage="switchLanguage"></listItem>
						</view>
		            </view>
		</u-popup>
		<view class="head">
			<view class="left">
				{{$t('common.join_vip')}}：899
			</view>
			<view class="right" @tap="openPopup">
				{{$t('common.toggle')}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"toggleLanguage",
		data() {
			return {
				show1:false,
				languages:[
					{
						url:'../../static/languages/yingguo.jpeg',
						text:'English'
					},
					{
						url:'../../static/languages/Turkey.jpeg',
						text:'Türkiye'
					},
				]
			};
		},
		methods:{
			openPopup(){
				this.show1 = true
			},
			goBack(){
				this.show1 = false
			},
			switchLanguage(index){
				if(index == 0 ){
					uni.setLocale('en')
					this.$i18n.locale = 'en'
				}else{
					uni.setLocale('tr') 
					this.$i18n.locale = 'tr'
				}
				this.show1 = false
				
			}
		},
	}
</script>

<style lang="scss">
.toggle{
	// height: 100vh;
	width: 100%;
	position: relative;
	font-size: 14px;
	padding: 20rpx 0;
	.head{
		padding: 0 30rpx;
		display: flex;
		margin-top: 100rpx;
		height: 40rpx;
		justify-content: space-between;
		align-items: center;
		
	}
	.u-popup{
		.select_tit{
			margin-top: 100rpx;
			display: flex;
			align-items: center;
			// justify-content: space-between;		
			text{
				font-size: 20px;
				font-weight: 700;
			}
			.goback{
				padding: 30rpx 15rpx;
			}
			}
			.languages{
				margin-top: 30rpx;
				padding: 40rpx 20rpx;
			}
			.language_item{
				justify-content: space-between;
				// margin-top: 30rpx;
				.left{
					display: flex;
					align-items: center;
					justify-content: space-between;
					text{
						margin-left: 20rpx;
					}
				}
			}
			
	}
}

</style>