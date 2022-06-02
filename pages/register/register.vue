<template>
	<view class="register">
		<view class="main_body">
			<view class="logo">
				<image 
				src="../../static/register/welcome.png" 
				style="width: 140px;"
				mode="widthFix"></image>
			</view>
			<u--form
				labelPosition="left"
				labelAlign="left"
				:errorType="errorType"
				:model="model1"
				labelWidth=80
				:rules="rules"
				style="width: 80%;margin: 0 auto;"
				ref="uForm"
			>
				<u-form-item
					leftIcon="../../static/register/recommend.png"
					prop="userInfo.invite_code"
					labelWidth="28"
					:leftIconStyle="{'height':'12px','width':'12px'}"
					borderBottom
					ref="item1"
				>
					<u--input
						v-model="model1.userInfo.invite_code"
						:placeholder="$t('register.code_rec')"
						border="none"
					></u--input>
				</u-form-item>
				<u-form-item
					leftIcon="../../static/register/phone.png"
					prop="userInfo.phone"
					labelWidth="28"
					:leftIconStyle="{'height':'12px','width':'12px'}"
					borderBottom
					ref="item1"
				>
					<u--input
						v-model="model1.userInfo.phone"
						:placeholder="$t('register.phone_prompt')"
						border="none"
					></u--input>
				</u-form-item>
				<u-form-item
					prop="code"
					labelWidth="28"
					leftIcon="../../static/register/code.png"
					:leftIconStyle="{'height':'12px','width':'12px'}"
					borderBottom
				>
					<u--input
						v-model="model1.code"
						border="none"
						:placeholder="$t('register.code_prompt')"
					></u--input>
					<u-button
						slot="right"
						@tap="getCode"
						:text="tips"
						type="success"
						size="mini"
						:disabled="disabled1"
					></u-button>
				</u-form-item>
				<u-form-item
					prop="userInfo.pwd"
					leftIcon="../../static/register/lock.png" 
					:leftIconStyle="{'height':'12px','width':'12px'}"
					labelWidth="28"
					borderBottom
					ref="item1"
				>
					<u--input
						v-model="model1.userInfo.pwd"
						border="none"
						:password="true"
						:placeholder="$t('register.pwd_prompt')"
					></u--input>
				</u-form-item>
				<u-form-item
					prop="userInfo.pwd"
					leftIcon="../../static/register/lock.png"
					:leftIconStyle="{'height':'12px','width':'12px'}"
					labelWidth="28"
					borderBottom
					ref="item1"
				>
					<u--input
						v-model="model1.userInfo.pwd1"
						border="none"
						:password="true"
						:placeholder="$t('register.pwd_prompt1')"
					></u--input>
				</u-form-item>
				<u-code
					ref="uCode"
					@change="codeChange"
					seconds="20"
					:endText="$t('login.code_prompt6')"
					:startText="$t('login.code_get')"
					:changeText="$t('login.code_prompt5')"
					@start="disabled1 = true"
					@end="disabled1 = false"
				></u-code>
			</u--form>	
			<view class="protocol">
				<u-checkbox-group
				            v-model="checkboxValue1"
				            placement="column"
				            @change="checkboxChange"
							shape="circle"
							size="14"
							activeColor="#05C060"
				        >
				            <u-checkbox
				                :customStyle="{marginBottom: '8px'}"
				                v-for="(item, index) in checkboxList1"
				                :key="index"
								:labelSize="12"
				                :label="item.name"
				                :name="item.name"
				            >
				            </u-checkbox>
				 </u-checkbox-group>
			</view>
			<view class="submit" style="width: 80%;margin: 60rpx auto;">
				<u-button 
				type="primary" 
				color="#05C060"
				@click="submit"
				style="margin-bottom: 10rpx;"
				:text="$t('login.register')"
				></u-button>
				<view class="toLogin" @click="goLogin">
					<view style="color: #666666;">已有账号？</view>
					<view style="color: #05C060;">立即登录</view>
				</view>
			</view>
		</view>
		<view class="bottom">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model1:{
					userInfo:{
						invite_code:'',
						phone: '', 
						pwd: '',
						pwd1:''
					},
					code: '',
				},
				src: '../../static/register/welcome.png',
				rules: {
						'userInfo.invite_code': [
							{
								type: 'string',
								required: true,
								message: this.$t('register.rec_code'),
								trigger: ['blur']
							}
						],
						'userInfo.phone' : [
							{
								required:true,
								message: this.$t('register.phone_prompt'),
								trigger:['blur']
							},
							{
								// 自定义验证函数，见上说明
								validator: (rule, value, callback) => {
									// 上面有说，返回true表示校验通过，返回false表示不通过
									// uni.$u.test.mobile()就是返回true或者false的
									return uni.$u.test.mobile(value);
								},
								message: this.$t("register.phone_prompt1"),
								// 触发器可以同时用blur和change
								trigger: ['change','blur'],
							}
						],
							'code': [
								{
									type: 'string',
									required: true,
									len: 4,
									message: this.$t('register.code_prompt1'),
									trigger: ['blur']
									}
							],
							'userInfo.pwd': [
								{
									required:true,
									message: this.$t('register.phone_prompt'),
									trigger:['blur']
								},
								{
									type: 'string',
									required: true,
									pattern: /^[0-9a-zA-Z]*$/g,
									// 正则检验前先将值转为字符串
									transform(value) {
										return String(value);
									},
									message: this.$t('register.pwd_prompt1'),
									trigger: ['blur', 'change']
								}
							]
						},
						disabled1: false,
						tips: '',
						errorType:'toast',
						checkboxValue1:[],
						// 基本案列数据
						checkboxList1: [{
								name: '我已阅读并同意服务协议',
								disabled: false
							}
						],
				}		
				
	},
		methods:{
			codeChange(text) {
				this.tips = text;
			},
			checkboxChange(n) {
			            console.log('change', n);
			        },
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: this.$t('login.code_prompt2')
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast(this.$t('login.code_prompt3'));
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast(this.$t('login.code_prompt4'));
				}
			},
			goLogin(){
				uni.navigateTo({
					url:'/pages/login/login',
					success(e) {
						console.log(e)
					},
					fail(err) {
						console.log(err)
					}
				})
			},
			submit() {
						this.$refs.uForm.validate().then(res => {
							// uni.$u.toast('校验通过')
						}).catch(errors => {
							// uni.$u.toast('校验失败')
						})
					}
		}
	}
</script>

<style lang="scss">
.register{
	position: relative;
	height: 100vh;
	.main_body{
		width: 100%;  
		height: 80%;
		padding: 200rpx 0 0;
		.protocol{
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 80%;
			margin: 0 auto;
			padding: 40rpx 0px 0rpx;
		}
		.logo{
			display: flex;
			justify-content: center;
			align-items: center;
			padding:  0 0 40px;
		}
		.submit{
			.toLogin{
				width: 50%;
				margin: 0rpx auto 0;
				font-size: 12px; 
				z-index: 999;
				view{
					display: inline-block;
					height: 80rpx;
					line-height: 80rpx;
				}
			}
		}
	}
	.bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: url('../../static/register/bg.png') no-repeat;
		background-size: 100% 100%;
		height: 20%;
		
	}
}

</style>
