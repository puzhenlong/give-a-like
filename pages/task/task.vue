<template>
	<view class="task">
		<view class="head">
			<toggleLanguage></toggleLanguage>
		</view>
		<view class="task_body">
			<u-tabs :list="list2" @change="toggleTab"></u-tabs>
			<view class="progress list" v-show="current == 0">
				<tabList class="tablist" v-for="(item,index) in 4">
					<template #left>
						<view class="left">
							<u-avatar :src="src"></u-avatar>
						</view>
					</template>
					<template #center>
						<view class="center">
							<view class="tit">
								YouTube{{$t("task.task_Require")}}：Praise and concern
							</view>
							<view class="time">
								{{$t("task.create")}}：2022.02.23  14:31:02
							</view>
							<!-- <view class="time">
								{{$t("task.review")}}：2022.02.23  16:15:36
							</view> -->
							<view class="link" style="white-space: nowrap;">
								<a href="www.baidu.com">{{$t("task.open_link")}}</a>
								<text>｜</text>
								<text>{{$t("task.copy_link")}}</text>	
							</view>
						</view>
					</template>
					<template #right>
						<view class="right">
							<view class="price" style="white-space: nowrap;">
								{{$t("task.unit_price")}}
							</view>
							<view class="money">
								usdt10
							</view>
							<view class="upload">
								<u-upload
									:fileList="fileList3"
									@afterRead="afterRead"
									@delete="deletePic"
									name="3"
									multiple
									:maxCount="1"
									:previewFullImage="true"
								></u-upload>
							</view>
							<view class="submit">
								<u-button 
								shape="circle"
								size="mini"
								color="#05C060"
								:customStyle="{'height': '20px','width': '46px'}"
								:text="$t('task.submit')"></u-button>
							</view>
						</view>
					</template>
				</tabList>
			</view>
			<view class="Under_review list" v-show="current == 1">
				<tabList class="tablist" v-for="(item,index) in 4">
					<template #left>
						<view class="left">
							<u-avatar :src="src1" size="30"></u-avatar>
						</view>
					</template>
					<template #center>
						<view class="center">
							<view class="tit">
								YouTube{{$t("task.task_Require")}}：Praise and concern
							</view>
							<view class="time">
								{{$t("task.create")}}：2022.02.23  14:31:02
							</view>
							<view class="link" style="white-space: nowrap;">
								<a href="www.baidu.com">{{$t("task.open_link")}}</a>
								<text>｜</text>
								<text>{{$t("task.copy_link")}}</text>	
							</view>
						</view>
					</template>
					<template #right>
						<view class="right">
							<image src="../../static/task/aduit.png" mode="widthFix" style="width: 120rpx;"></image>
						</view>
					</template>
				</tabList>
			</view>
			<view class="Completed list" v-show="current == 2">
				<tabList class="tablist" v-for="(item,index) in 4">
					<template #left>
						<view class="left">
							<u-avatar :src="src1" size="30"></u-avatar>
						</view>
					</template>
					<template #center>
						<view class="center">
							<view class="tit">
								YouTube{{$t("task.task_Require")}}：Praise and concern
							</view>
							<view class="time">
								{{$t("task.create")}}：2022.02.23  14:31:02
							</view>
							<view class="link" style="white-space: nowrap;">
								<a href="www.baidu.com">{{$t("task.open_link")}}</a>
								<text>｜</text>
								<text>{{$t("task.copy_link")}}</text>	
							</view>
						</view>
					</template>
					<template #right>
						<view class="right">
							<image src="../../static/task/finish.png" mode="widthFix" style="width: 120rpx;"></image>
						</view>
					</template>
				</tabList>
			</view>
			<view class="failed list" v-show="current == 3">
				<tabList class="tablist" v-for="(item,index) in 4">
					<template #left>
						<view class="left">
							<u-avatar :src="src1" size="30"></u-avatar>
						</view>
					</template>
					<template #center>
						<view class="center">
							<view class="tit">
								YouTube{{$t("task.task_Require")}}：Praise and concern
							</view>
							<view class="time">
								{{$t("task.create")}}：2022.02.23  14:31:02
							</view>
							<view class="link" style="white-space: nowrap;">
								<a href="www.baidu.com">{{$t("task.open_link")}}</a>
								<text>｜</text>
								<text>{{$t("task.copy_link")}}</text>	
							</view>
						</view>
					</template>
					<template #right>
						<view class="right">
							<image src="../../static/task/defeat.png" mode="widthFix" style="width: 120rpx;"></image>
						</view>
					</template>
				</tabList>
			</view>
			<view class="malice list" v-show="current == 4">
				<tabList class="tablist" v-for="(item,index) in 4">
					<template #left>
						<view class="left">
							<u-avatar :src="src1" size="30"></u-avatar>
						</view>
					</template>
					<template #center>
						<view class="center">
							<view class="tit">
								YouTube{{$t("task.task_Require")}}：Praise and concern
							</view>
							<view class="time">
								{{$t("task.create")}}：2022.02.23  14:31:02
							</view>
							<view class="link" style="white-space: nowrap;">
								<a href="www.baidu.com">{{$t("task.open_link")}}</a>
								<text>｜</text>
								<text>{{$t("task.copy_link")}}</text>	
							</view>
						</view>
					</template>
					<template #right>
						<view class="right">
							<image src="../../static/task/Malevolence.png" mode="widthFix" style="width: 120rpx;"></image>
						</view>
					</template>
				</tabList>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list2: [{
							name: this.$t("task.processing")
						}, {
							name: this.$t("task.under_review"),
							badge: {
								value: 1,
							}
						}, {
							name: this.$t("task.completed")
						}, {
							name: this.$t("task.failed")
						},{
							name: this.$t("task.malicious")
						}
						],
				current:0,
				src: '../../static/task/YouTube.png',
				src1: '../../static/task/YouTube.png',
				fileList3: [{
							url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						}],
			};
		},
		methods:{
			toggleTab(e){
				this.current = e.index
			},
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
		}
	}
</script>

<style lang="scss">
.task{
	height: 100vh;
	width: 100%;
	position: relative;
	font-size: 14px;
	.task_body{
		.list{
			.tablist{
				display: flex;
				.left{
					margin-right: 10rpx;
					display: flex;
					align-self: flex-start;
				}
				.center{
					font-size: 12px;
					width: 70%;
					align-self: flex-start;
					view{
						padding: 6rpx 0;
					}
					.link{
						width: 60%;
						display: flex;
						color: #05C060;
						a{
							text-decoration: none;
							color: #05C060;
						}
					}
					.time{
						color: #999999;
					}
				}
				.right{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					font-size: 12px;
					view{
						padding: 6rpx 0;
					}
					}
			}
		}
	}
}
</style>
