<template>
	<view class="home">
			<u-popup 
			:show="show1" 
			@close="close"
			:closeOnClickOverlay="true"
			@open="openPopup" 
			mode="right">
			            <view style="width: 90vw;">
			                <view class="select_tit">
			                	<view class="goback" @tap="goBack">
			                		<u-icon name="arrow-left" size="20"></u-icon>
			                	</view>
								<text>{{$t("common.choose_lau")}}</text>
			                </view>
							<view class="languages">
								<listItem :languages="languages" @switchLanguage="switchLanguage"></listItem>
							</view>
			            </view>
			</u-popup>
		<toggleLanguage></toggleLanguage>
		<view class="home_body">
			<view class="banner">
				<u-swiper
				    :list="list1"
				    ></u-swiper>
			</view>
			<view class="notice">
				<u-notice-bar 
				:text="text1" 
				color="#555555"
				bgColor="transparent"></u-notice-bar>
			</view>
			<view class="menus">
				<view class="box1">
					<text>{{$t("home.charge_center")}}</text>
				</view>
				<view class="box2">
					<text>{{$t("home.immediate_withdraw")}}</text>
				</view>
				<view class="box3">
					<text style="word-break:break-all;">{{$t("home.promote_award")}}</text>
				</view>
			</view>
			<view class="invite_box"> 
				<image src="../../static/home/invite.png" mode="widthFix" style="width: 100%;"></image>
			</view>
			<view class="hall">
			<view class="tit">
				{{$t('home.task_hall')}}
			</view>
			<view class="task_hall">
				<view class="left location" @tap="enterYoutube(0)">
					<view class="box">
						<text>YouTube</text>
						<text class="like">{{$t("common.like")}}&nbsp;&nbsp;{{$t("common.follow")}}</text>
					</view>
				</view>
				<view class="right">
					<view class="right_top location" @tap="enterYoutube(1)">
						<view class="box">
							<text>Facebook</text>
							<text class="like">{{$t("common.share")}}</text>
						</view>
					</view>
					<view class="right_bottom location">
						<view  class="tiktok" @tap="enterYoutube(2)">
							<view class="box">
								<text>TikTok</text>
								<text class="like" style="font-size: 8px;">{{$t("common.like")}}&nbsp;&nbsp;{{$t("common.follow")}}</text>
							</view>
						</view>
						<view style="width: 48%;" class="ins location" @tap="enterYoutube(3)">
							<view class="box">
								<text>instagram</text>
								<text class="like" style="font-size: 8px;">{{$t("common.like")}}&nbsp;&nbsp;{{$t("common.follow")}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="tit">
				{{$t('home.Merchant_hall')}}
			</view>
			<view class="release_hall">
				<view class="left location">
					<view class="box">
						<text>YouTube</text>
						<text class="like">{{$t("common.like")}}&nbsp;&nbsp;{{$t("common.follow")}}</text>
					</view>
				</view>
				<view class="right">
					<view class="right_top location">
						<view class="box">
							<text>Facebook</text>
							<text class="like">{{$t("common.share")}}</text>
						</view>
					</view>
					<view class="right_bottom">
						<view  class="tiktok location">
							<view class="box">
								<text>TikTok</text>
								<text class="like" style="font-size: 8px;">{{$t("common.like")}}&nbsp;&nbsp;{{$t("common.follow")}}</text>
							</view>
						</view>
						<view style="width: 48%;" class="ins location">
							<view class="box">
								<text>instagram</text>
								<text class="like" style="font-size: 8px;">{{$t("common.like")}}&nbsp;&nbsp;{{$t("common.follow")}}</text>
							</view>
						</view>
					</view>
				</view>
			 </view>
			</view>
			<view class="List">
				<view class="box">
					<u-tabs
					:list="tabs" 
					@click="click"></u-tabs>
				</view>
				<view class="vip" v-show="current === 0">
					<tabList class="tablist" v-for="(item,index) in 4">
						<template #left>
							<view class="left">
								<u-avatar :src="src"></u-avatar>
							</view>
						</template>
						<template #center>
							<view class="center" style="margin-left: 20rpx;">
								<view class="vip_id">
									{{$t('home.vip_item')}}：****5668
								</view>
								<view class="tips">
									{{$t('home.Finish_task')}}
								</view>
							</view>
						</template>
						<template #right>
							<view class="right">
								<view class="money">
									<image 
									src="../../static/home/income.png" 
									style="width: 18px;margin-right: 6rpx;"
									mode="widthFix"></image>
									<text>$60.00</text>
								</view>
							</view>
						</template>
					</tabList>
				</view>
				<view class="business" v-show="current === 1">
					<tabList class="tablist" v-for="(item,index) in 4">
						<template #left>
							<view class="left">
								<u-avatar :src="src1"></u-avatar>
							</view>
						</template>
						<template #center>
							<view class="center" style="margin-left: 20rpx;">
								<view class="vip_id">
									{{$t("home.Merchant_item")}}：****5210
								</view>
								<view class="tips">
									{{$t("home.Finish_task")}}
								</view>
							</view>
						</template>
						<template #right>
							<view class="right">
								<view class="money">
									<image 
									src="../../static/home/income.png" 
									style="width: 18px;margin-right: 6rpx;"
									mode="widthFix"></image>
									<text>$60.00</text>
								</view>
							</view>
						</template>
					</tabList>
				</view>
			</view>
		</view>
		<view class="invite" v-show="show">
			<u-popup 
			:show="show"
			 @close="close" 
			 mode="center"
			 >
				<view class="panel">
					<view class="close" @tap="closePanel">
						X
					</view>
					<view class="center">
						<view class="title">
							{{$t("home.invite_friend")}}
						</view>
						<view class="body">
							<view class="sub_tit">
								{{$t("home.join_us")}}
							</view>
							<view class="qr_code">
								<image 
								src="../../static/home/ewm@3x.png" 
								style="width: 400rpx;"
								mode="widthFix"></image>
							</view>
							<view class="rec_code">
								<text>{{$t("home.rec_code")}}：4524772</text>
								<view class="copy">
									<image 
									src="../../static/home/copy.png" 
									style="width: 30rpx"
									mode="widthFix"></image>
									<text style="color: #0509C0;margin-left: 10rpx;">{{$t("home.copy_code")}}</text>
								</view>
								<a href="www.baidu.com">https://www.baidu.com</a>
								<view class="copy_link">
									<image 
									src="../../static/home/copy.png" 
									style="width: 30rpx"
									mode="widthFix"></image>
									<text style="color: #0509C0;margin-left: 10rpx;">{{$t("home.copy_link")}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list1: [
						'https://cdn.uviewui.com/uview/swiper/swiper1.png',
						'https://cdn.uviewui.com/uview/swiper/swiper2.png',
						'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				        ],
				text1: this.$t("home.notice"),
				tabs: [{
							name: this.$t("home.vip_list"),
						}, {
							name: this.$t("home.Merchant_list"),
						}],
				current:0,
				src:'../../static/mine/avatar.jpeg',
				src1:'../../static/home/avatar2.jpeg',
				show:false,
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
			click(item) {
							this.current = item.index
						},
			close() {
					  this.show = false
					},
			closePanel(){
				this.show = false
			},
			openPopup(){
				this.show1 = true
			},
			goBack(){
				this.show1 = false
			},
			switchLanguage(index){
				if(index == 0 ){
					this.$i18n.locale = 'en'
				}else{
					this.$i18n.locale = 'tr'
				}
				this.show1 = false
			},
			enterYoutube(index){
				uni.navigateTo({
					url: '/pages/vipTask/vipTask?index=' + index,
					
				})
			}
			
		}
	}
</script>

<style lang="scss">
	.u-notice__left-icon{
		color: red;
	}
.location{
		position: relative;
		.box{
			position: absolute;
			display: flex;
			flex-direction: column;
			top: 10rpx;
			left: 20rpx;
			text{
				padding: 6rpx 0;
				&:first-child{
					font-size: 14px;
				}
			}
			.like{
				color: #777777;
				font-size: 12px;
			}
		}
	}
.home{
	height: 100vh;
	width: 100%;
	position: relative;
	font-size: 14px;
	
	.home_body{
		padding: 0 20rpx;
		.banner{
			width: 100%;
			margin: 0 auto;
		}
		.notice{
			margin-top: 20rpx;
		}
		.menus{
			justify-content: space-between;
			display: flex;
			overflow: hidden;
			height: 140rpx;
			color: #fff;
			font-size: 12px;
			.box1{
				width: 230rpx;
				background: url("../../static/home/task.png");
				background-size: 100% 100%;
			}
			.box2{
				width: 230rpx;
				background: url("../../static/home/withdraw.png");
				background-size: 100% 100%;
			}
			.box3{
				width: 230rpx;
				background: url("../../static/home/reward.png");
				background-size: 100% 100%;
			}
			.box1
			,.box2
			,.box3{
				display: flex;
				justify-content: center;
				align-items: center;
				}
		}
		.hall{
			padding: 0 0 30rpx;
		.tit{
			padding:  30rpx 0;
			color: #333333;
		}
		.task_hall{
		}
		.task_hall,
		.release_hall
		{	
			height: 340rpx;
			display: flex;
			justify-content: space-between;
			.left{
				width: 38%;
				background: url("../../static/home/YouTube.png") no-repeat;
				background-size: 100% 100%;
			}
			.right{
				width: 60%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.right_top{
					background: url("../../static/home/Facebook.png") no-repeat;
					background-size: 100% 100%;
					height: 48%;
				}
				.right_bottom{
					display: flex;
					width: 100%;
					height: 48%;
					justify-content: space-between;
					.tiktok{
						background: url("../../static/home/TikTok.png") no-repeat;
						background-size: 100% 100%;
						height: 100%;
						width: 48%;
					}
					.ins{
						background: url("../../static/home/instagram.png") no-repeat;
						background-size: 100% 100%;
						width: 48%;
					}
				}
			}
		}
		}
		.List{
			width: 100%;
			.box{
				width: 60%;
				margin: 0 auto;
			}
			.vip,
			.business
			{
				.tablist{
					.center{
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						view{
							padding: 10rpx 0;
						}
						.tips{
							color: #999999;
							font-size: 10px;
						}
					}
					.right{
						.money{
							background-color: #05C060;
							padding: 12rpx 36rpx;
							border-radius: 40rpx;
							color: #fff;
							display: flex;
							justify-content: space-between;
							align-items: center;
							font-size: 12px;
						}
					}
				}
			}
		}
	}
	.invite{
		width: 100%;
		.panel{
			background: url('../../static/home/ewm_bg@3x.png');
			background-size: 100% 100%;
			position: relative;
			.close{
				width: 80rpx;
				height: 80rpx;
				padding-right: 10rpx;
				position: absolute;
				top: 0;
				right: 0;
				color: #fff;
				text-align: right;
			}
			.center{
				width: 600rpx;
				height: 1000rpx;
				// background-color: yellow;
				.title{
					font-size: 20px;
					display: flex;
					margin-top: 60rpx;
					justify-content: center;
					color: #fff;
				}
				.body{
					background-color: rgba(0, 0, 0, .1); 
					width: 80%;
					margin: 0 auto;
					margin-top: 40rpx;
					color: #fff;
					font-size: 16px;
					display: flex;
					padding: 20rpx;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					.sub_tit{
						text-align: center;
					}
					.qr_code{
						margin-top: 30rpx;
					}
					.rec_code{
						white-space: nowrap;
						display: flex;
						flex-direction: column;
						align-items: center;
						font-size: 12px;
						.copy{
							display: flex;
							padding: 20rpx;
							justify-content: center;
							align-items: center;
							font-size: 12px;
						}
						a{
							text-decoration: none;
							color: #fff;
						}
						.copy_link{
							padding: 20rpx;
							font-size: 12px;
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
				}
			}
		}
	}
}
</style>
