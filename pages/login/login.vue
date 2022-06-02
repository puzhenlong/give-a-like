<template>
	<view class="login">
		<view class="box">
			<view class="logo">
				<image 
				src="../../static/register/welcome.png" 
				style="width: 140px;"
				mode="widthFix"></image>
			</view>
			<view class="toLogin">
				<u--form
					labelPosition="left"
					labelAlign="left"
					:errorType="errorType"
					:model="model2"
					labelWidth=80
					:rules="rules1"
					style="width: 80%;margin: 0 auto;"
					ref="form2"
				>
					<u-form-item
						leftIcon="../../static/login/mobile.png"
						labelWidth="28"
						prop="userInfo.phone"
						borderBottom
						ref="item1"
					>
						<u--input
							v-model="model2.userInfo.phone"
							:placeholder="$t('login.phone_prompt')"
							border="none"
						></u--input>
					</u-form-item>
					<u-form-item
						leftIcon="../../static/login/pwd.png"
						labelWidth="28"
						prop="userInfo.pwd"
						borderBottom
						ref="item1"
					>
						<u--input
							v-model="model2.userInfo.pwd"
							:placeholder="$t('login.pwd_prompt')"
							:password="true"
							border="none"
						></u--input>
					</u-form-item>
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
				<view class="submit" style="width: 80%;margin: 60rpx auto 40rpx;">
					<u-button 
					type="primary" 
					color="#05C060"
					:text="$t('login.name')"
					></u-button>
				</view>
				<view class="toRegister">
					<text>还没账号？</text>
					<text @tap="toRegister" style="color: #57BD6B;">立即注册</text>
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
				model2:{
					userInfo:{
						phone: '',
						pwd: ''
					}
				},
				errorType:'message',
				tips: '',
				disabled1: false,
				rules1:{
					'userInfo.phone' : [
						{
							required:true,
							message: this.$t('login.phone_prompt'),
							trigger:['blur']
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// uni.$u.test.mobile()就是返回true或者false的
								return uni.$u.test.mobile(value);
							},
							message: this.$t('login.phone_prompt1'),
							// 触发器可以同时用blur和change
							trigger: ['change','blur'],
						}
					],
					'userInfo.pwd': [
						{
							type: 'string',
							required: true,
							pattern: /^[0-9a-zA-Z]*$/g,
							// 正则检验前先将值转为字符串
							transform(value) {
								return String(value);
							},
							message: this.$t('login.pwd_prompt1'),
							trigger: ['blur', 'change']
						}
					]
				},
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
			checkboxChange(n) {
			            console.log('change', n);
			        },
			toRegister(){
				uni.navigateTo({
					url:'/pages/register/register'
				})
			}
		}
	}
</script>

<style lang="scss">
.login{
	position: relative;
	height: 100vh;
	.box{
		width: 100%;
		height: 400rpx;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%,-50%);
		.logo{
			display: flex;
			justify-content: center;
			align-items: center;
			padding:  0 0 40px;
		}
		.u-tabs{
			align-items: center;
		}
		.toLogin{
			.protocol{
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 80%;
				margin: 0 auto;
				padding: 30rpx 0px 0rpx;
			}
			.toRegister{
				width: 80%;
				font-size: 12px; 
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
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
