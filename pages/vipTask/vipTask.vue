<template>
	<view class="vipTask">
		<view class="head">
			<toggleLanguage></toggleLanguage>
		</view>
		<view class="banner">
			<u-swiper
			    :list="list1"
			    ></u-swiper>
		</view>
		<view class="body">
			<u-tabs :list="list2" @change="toggleTab" style="margin-bottom: 10rpx;" :current="current"></u-tabs>
			<view class="youtube" v-show="current === 0">
				<vipcard :current_grade="current_grade" @enterTaskList="enterTaskList"></vipcard>
			</view>
			<view class="Facebook" v-show="current === 1">
				<vipcard :current_grade="current_grade1" @enterTaskList="enterTaskList"></vipcard>
			</view>
			<view class="TikTok" v-show="current === 2">
				<vipcard :current_grade="current_grade2" @enterTaskList="enterTaskList"></vipcard>
			</view>
			<view class="instagram" v-show="current === 3">
				<vipcard :current_grade="current_grade3" @enterTaskList="enterTaskList"></vipcard>
			</view>
		</view>
	</view>
</template>

<script>
	import vipcard from './vipcard/vipcard.vue'
	export default {
		components:{
			vipcard
		},
		data() {
			return {
				current_grade:0,
				current_grade1:2,
				current_grade2:1,
				current_grade3:4,
				list1: [
						'https://cdn.uviewui.com/uview/swiper/swiper1.png',
						'https://cdn.uviewui.com/uview/swiper/swiper2.png',
						'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				        ],
				current: 0,
				list2: [{
							name: 'YouTube'
						}, {
							name: 'Facebook',
						}, {
							name: 'TikTok'
						}, {
							name: 'instagram'
						}
						],
			};
		},
		methods:{
			toggleTab(e){
				this.current = e.index
			},
			enterTaskList(){
				const index = this.current
				uni.navigateTo({
					url:"/pages/selectTask/selectTask?index="+index
				})
			}
		},
		onLoad(option) {
			this.current = parseInt(option.index)
		}
	}
</script>

<style lang="scss">

</style>
