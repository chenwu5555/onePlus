<template>
  <div>
    <h1>hello word</h1>
    <el-button type="danger" @click="toReturn">退出登录</el-button>
  </div>
</template>
<script>
export default {
  name:"home",
  data(){
    return {
    }
  },
  methods:{
    toReturn(){
      this.$router.push({
        path:"/login",
      })
    }
  }
}
</script>