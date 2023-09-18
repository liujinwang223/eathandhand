<template>
  <div class="login">
    <div class="loginLayout">
      <a-row class="grid-demo" align="center">
        <a-col :span="6" offset="6">
          <a-image
              width="200"
              title="吃手手后台管理系统"
              description="嘿嘿嘿！ 吃手手"
              :src="CSSIcon"
          />
        </a-col>
        <a-col :span="9">
          <div>
            <a-card title="用户登录" :bordered="false" :style="{ width: '100%' }">
              <template #extra>
                <a-link @click="inputKey">二维码登录</a-link>
              </template>
              <a-form :model="form"  @submit="handleSubmit">
                <a-form-item field="用户名" tooltip="输入用户名和密码即可登陆" label="用户名">
                  <a-input
                      v-model="form.name"
                      placeholder="请输入用户账号信息"
                  />
                </a-form-item>
                <a-form-item field="post" label="密码：">
                  <a-input-password  v-model="form.post" placeholder="请输入密码" />
                </a-form-item>
                <a-form-item field="isRead">
                  <a-checkbox v-model="form.isRead">点击记录用户信息 </a-checkbox>
                </a-form-item>
                <a-form-item>
                  <a-button html-type="submit" type="primary">点击登陆</a-button>
                </a-form-item>
              </a-form>
            </a-card>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import CSSIcon from '../../assets/icon/img.png';
import { Notification } from '@arco-design/web-vue';
import {useRouter} from "vue-router"
const router = useRouter();
const form = ref({
  name: '',
  post: '',
  isRead: false,
}); //提交所用的表单
let staticUserList=[
    {user:'杨洋',pwd:"123456"},
    {user:'刘金旺',pwd:"123456"},
    {user:'刘昴',pwd:"668668"},
]
// 登陆
const handleSubmit=(data:any)=>{
  let user=form.value.name;
  let pwd=form.value.post;
  if(user=='刘昴'&&pwd=='668668'){
    router.push('/home')
    Notification.info({
      title: '登陆成功',
      content:`欢迎您！ ${user}`,
    })
  }else{
    Notification.error('登陆失败！，请检查用户名和密码');
  }
  console.log(data);
}
// 键入登陆信息
const inputKey =()=>{
  form.value.name='刘昴';
  form.value.post='668668';
  form.value.isRead=true;
}
</script>


<style scoped>
  .login{
    width: 100vw;
    height: 100vh;
    background: #42B49A;
    display: flex;
  }
  .loginLayout{
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    margin-top: 35vh;
    width: 100%;
  }
</style>
