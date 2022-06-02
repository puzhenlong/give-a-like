<template>
	<view class="myteam">
		<view class="header">
			<tabList>
				<template #left>
					<view>
						<u-icon name="arrow-left" size="20"></u-icon>
					</view>
				</template>
				<template #center>
					<view>
						<text>我的团队</text>
					</view>
				</template>
				<template #right>
					<view></view>
				</template>
			</tabList>
		</view>
		<view class="top">
			<view class="grade_data">
				<view class="box">
					<image src="../../static/myteam/dl01.png" mode="widthFix" style="width: 146rpx;"></image>
					<text>一级成员（有效）</text>
					<view class="">
						89（82）
					</view>
				</view>
				<view class="box">
					<image src="../../static/myteam/dl02.png" mode="widthFix" style="width: 120rpx;"></image>
					<text>一级成员（有效）</text>
					<view class="">
						12（9）
					</view>
				</view>
				<view class="box">
					<image src="../../static/myteam/dl03.png" mode="widthFix" style="width: 100rpx;"></image>
					<text>一级成员（有效）</text>
					<view class="">
						77（75）
					</view>
				</view>
			</view>
			<view class="btn">
				邀请好友
			</view>
			<view class="tips">
				<u-icon name="info-circle" size="14" color="#CCCCCC"></u-icon>
				<text>有效即有效人数（成功充值的成员视为有效人数）</text>
			</view>
		</view>
		<view class="team_body">
			<view class="head">
			<view class="subsection">
				<u-subsection 
				:list="list" 
				bgColor="#fff"
				mode="subsection"
				activeColor="#05C060"
				@change="sectionChange"
				:current="current"></u-subsection>
				<view class="box" v-show="current == 0">
					
				</view>
				<view class="box" v-show="current == 1">
					
				</view>
				<view class="box" v-show="current == 2">
					
				</view>
			</view>
			<view class="sort">
				<text>按账户余额排序</text>
				<image src="../../static/myteam/sort.png" mode="widthFix" style="width: 40rpx;"></image>
			</view>
			</view>
			<view class="table">
				<u-list>
					<u-list-item
					>
						ID
					</u-list-item>
					<u-list-item
					>
						ID
					</u-list-item>
					<u-list-item
					>
						ID
					</u-list-item>
					<u-list-item
					>
						ID
					</u-list-item>
					<u-list-item
					>
						ID
					</u-list-item>
				</u-list>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				  list: ['一级', '二级', '三级'],
				  current: 0
			};
		},
		methods:{
			sectionChange(index) {
							this.current = index;
							console.log(index)
						}
		}
	}
</script>

<style lang="scss">
.myteam{
	background: url("../../static/myteam/bg.png") no-repeat;
	background-size: 100% auto;
	padding-top: 100rpx;
	background-color: #eee;
	.top{
		background: #fff;
		padding: 40rpx 20rpx 30rpx;
		width: 90%;
		margin: 50rpx auto 0;
		border-radius: 20rpx;
		.grade_data{
			display: flex;
			justify-content: space-around;
			// padding-bottom: 20rpx;
			.box{
				font-size: 12px;
				display: flex;
				flex-direction: column;
				align-items: center;
				text{
					margin: 20rpx 0;
				}
				}
		}
		.btn{
			width: 80%;
			background: #05C060;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			margin: 0 auto;
			color: #fff;
			margin-top: 20rpx;
			font-size: 14px;
			border-radius: 20rpx;
			}
			.tips{
				font-size: 12px;
				display: flex;
				justify-content: center;
				padding: 20rpx 0;
				color: #CCCCCC;
				}
	}
	.team_body{
		background-color: pink;
		padding: 30rpx 20rpx;
		width: 90%;
		margin: 0 auto;
		.head{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.subsection{
				width: 60%;
				
			}
			.sort{
				display: flex;
				align-items: center;
				font-size: 12px;
				color: #666666;
			}
		}
		
	}
}
</style>
