<template>
	<view class="mine">
		<view class="green_area">
			<view class="user_info">
				<view class="left">
					<view class="avatar">
						<u-avatar :src="src" size="60"></u-avatar>
					</view>
					<view class="info">
						<view class="id" style="font-size: 14px;">
							<text>ID: Mattie123</text>
							<image src="../../static/mine/Vip1.png" mode="widthFix" style="width: 12px;height: 12px;margin-left: 4px;"></image>
						</view>
						<view class="invt_code">
							{{$t("mine.virtual_money")}}：5.00rs
						</view>
						<view class="invt_code">
							{{$t("mine.vip_grade")}}：VIP1
						</view>
					</view>
				</view>
				<view class="right">
					<view class="btn">
						<u-button 
						:text="$t('mine.quite_login')" 
						shape="circle" 
						size="mini"
						:customStyle="{'height': '26px','width': '60px'}"
						color="rgba(255,255,255,.1)"></u-button>
					</view>
				</view>
			</view>
			<view class="wallet">
				<view class="wallet_header">
					<view class="left">
						<text style="color: #999999;">{{$t("mine.balance")}}：</text>
						<text style="color: #05C060;">$3638.69</text>
					</view>
					<view class="right">
						<u-tag :text="$t('mine.mywallet')" size="mini" type="success"></u-tag>
					</view>
				</view>
				<view class="wallet_body" style="white-space: nowrap;">
					<u-steps current="0" :dot="true" activeColor="#05C060">
							<u-steps-item :title="$t('mine.banned_num')" ></u-steps-item>
							<u-steps-item :title="$t('mine.limit')" ></u-steps-item>
							<u-steps-item :title="$t('mine.good')" ></u-steps-item>
							<u-steps-item :title="$t('mine.excellent')" ></u-steps-item>
					</u-steps>
				</view>
			</view>
			<view class="grade_charge">
				<view class="charge_item">
					<view>VIP2</view>
					<view style="font-size: 12px;padding: 10rpx 0;">50.00rs</view>
					<u-button
					:text="$t('mine.fast_charge')" 
					shape="circle" 
					size="mini"
					:customStyle="{'height': '22px','width': '60px','marginTop': '5rpx'}"
					color="rgba(0,0,0,.1)"></u-button>
				</view>
				<view class="charge_item">
					<view>VIP3</view>
					<view style="font-size: 12px;padding: 10rpx 0;">100.00rs</view>
					<u-button
					:text="$t('mine.fast_charge')"
					shape="circle" 
					size="mini"
					:customStyle="{'height': '22px','width': '60px','marginTop': '5rpx'}"
					color="rgba(0,0,0,.1)"></u-button>
				</view>
				<view class="charge_item">
					<view>VIP4</view>
					<view style="font-size: 12px;padding: 10rpx 0;">200.00rs</view>
					<u-button
					:text="$t('mine.fast_charge')"
					shape="circle" 
					size="mini"
					:customStyle="{'height': '22px','width': '60px','marginTop': '5rpx'}"
					color="rgba(0,0,0,.1)"></u-button>
				</view>
				<view class="charge_item">
					<view>VIP5</view>
					<view style="font-size: 12px;padding: 10rpx 0;">400.00rs</view>
					<u-button
					:text="$t('mine.fast_charge')"
					shape="circle" 
					size="mini"
					:customStyle="{'height': '22px','width': '60px'}"
					color="rgba(0,0,0,.1)"></u-button>
				</view>
			 </view>	
		</view>
		<view class="money_info">
			<u-grid
					:border="true"
					@click="click"
					col="2"
			        >
					<u-grid-item
							v-for="(baseListItem,baseListIndex) in baseList"
							:key="baseListIndex"
							:customStyle="{'padding':'20rpx 0','fontSize': '12px'}"
					>
						<view style="font-size: 16px;color: #05C060;">
							{{baseListItem.name}}
						</view>
						<text style="color: #666666;">{{baseListItem.title}}</text>
					</u-grid-item>
			</u-grid>
		</view>
		<view class="menus">
			<List :list="list" @getIndex="enterInner"></List>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseList: [{
							name: '$120.36',
							title: this.$t("mine.today_income")
							},
							{
								name: '$255.34',
								title: this.$t("mine.week_income")
							},
							{
								name: '$656.77',
								title: this.$t("mine.invest")
							},
							{
								name: '$3698.68',
								title: this.$t("mine.total_income")
							},
				            ],
				src: '../../static/mine/avatar.jpeg',
				list:[
					{
						name: this.$t("mine.invite_friend"),
						url:'../../static/mine/invite.png',
						isActive:false
					},
					{
						name: this.$t("mine.my_team"),
						url:'../../static/mine/team.png',
						isActive:false
					},
					{
						name: this.$t("mine.team_commission"),
						url:'../../static/mine/commission.png',
						isActive:false
					},
					{
						name: this.$t("mine.inviter_award"),
						url:'../../static/mine/reward.png',
						isActive:false
					},
					{
						name: this.$t("mine.robot"),
						url:'../../static/mine/robot.png',
						isActive:true
					},
					{
						name:this.$t("mine.receive_record"),
						url:'../../static/mine/record.png',
						isActive:false
					},
					{
						name:this.$t("mine.download"),
						url:'../../static/mine/cloud.png',
						isActive:false
					},
				]
			};
		},
		methods:{
			click(name) {
				console.log(name)
			            },
			enterInner(index){
				console.log(index)
				switch(index){
					case 0 :
						uni.navigateTo({
							url: "/pages/inviteFriends/inviteFriends",
							success(e) {
								console.log(e)
							},
							fail(err) {
								console.log(err)
							}
						})
						break;
					case 1 :
						uni.navigateTo({
							url: "/pages/myTeam/myTeam"
						})
						break;
					case 2 : 
						uni.navigateTo({
							url: "/pages/teamCommission/teamCommission"
						})
						break;
					case 3 :
						uni.navigateTo({
							url: "/pages/inviterReward/inviterReward"
						})
						break;
					case 4 :
						uni.navigateTo({
							url: "/pages/robot/robot"
						})
						break;
				}
			}
		},
		onLoad() {
		}
	}
</script>

<style lang="scss">
// .u-icon__icon{
// 		font-size: 15px!important;
// 		// color: #05C060!important;
// 		}
.mine{
	// height: 100vh;
	position: relative;
	overflow: hidden;
	background-color: #F7F7F7;
	.green_area{
	background: url('../../static/mine/wd_bg.png') no-repeat;
	background-size: 100% 100%;
	padding-bottom: 20rpx;
	.user_info{
		padding: 40rpx 30rpx 0;
		display: flex;
		// height: 560rpx;
		.left{
			width: 50%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 280rpx;
			color: #ffffff;
			view{
				padding: 10rpx 0;
			}
			.avatar{
				width: 40%;
				margin-right: 20rpx;
			}
			.info{
				width: 60%;
				white-space: nowrap;
				.invt_code{
					background-color: rgba(0, 0, 0, .1);
					margin-bottom: 10rpx;
					border-radius: 30rpx;
					padding: 10rpx 24rpx;
					font-size: 10px;
					color: #eeeeee;
					display: flex;
					justify-content: center;
					align-items: center;
					}
			}
		}
		.right{
			width: 50%;
			height: 280rpx;
			position: relative;
			.btn{
				width: 50%;
				position: absolute;
				right: 10%;
				top: 20%;
			}
		}
	}
	.wallet{
		
		width: 96%;
		font-size: 14px;
		background-color: #ffffff;
		padding-bottom: 30rpx;
		border-radius: 30rpx ;
		margin: 0 auto;
		.wallet_header{
			padding: 30rpx 80rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.wallet_body{
			margin-top: 30rpx;
			// padding: 0 20rpx;
		}
	}
	.grade_charge{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.charge_item{
			width: 23%;
			padding: 30rpx 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			// padding: 30rpx 30rpx;
			position: relative;
			&:after{
				content: '';
				position: absolute;
				right: 0;
				top: 0;
				display: block;
				width: 1px;
				height: 100%;
				// background-image: radial-gradient( #000 60%,transparent 40%)
			}
			color: #ffffff;
			view{
				margin-top: 5rpx;
			}
		}
		
	}
}
	.money_info{
		width: 100%;
		// margin-top: 248rpx; 
		background-color: #ffffff;
		box-shadow:0px 13px 10px -15px #ccc;
	}
	.menus{
		margin-top: 20rpx;
	}
}
</style>
