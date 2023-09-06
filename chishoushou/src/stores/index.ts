import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 用户信息
export const userInfoData = defineStore("userInfo", {
  // @ts-ignore
  persist: {
    enabled: true,//开启数据持久化
    strategies: [
      {
        key: 'userInfo',//给一个要保存的名称
        storage: sessionStorage,//sessionStorage / localStorage 存储方式
      }
    ]
  },
  state: () => ({
    userInfo: {},
    functionConfig: [],
    userTravelConfig: [],
    unReadMessageNum:0,//消息未读数量
  }),
  getters: {

  },
  actions: {
    setData(data: any) {
      this.userInfo = data;
    },
    setFunctionConfig(data: any) {
      this.functionConfig = data;
    },
    setUserTravelConfig(data: any) {
      this.userTravelConfig = data;
    },
    setUnReadMessageNum(data: any){
      this.unReadMessageNum = data
    },

  },
})
