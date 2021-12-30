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
      // 分页参数
      paging:{
        query:'',
        pagenum:1,
        pagesize:10,
      }
    }
  },
  created(){
    this.getUserData()
  },
  methods:{
    getUserData(){
      this.$http.manageRt.getHttp(this.paging).then(res =>{
        if(res.data.meta.status === 200){
          this.$message.success(res.data.meta.msg)
        }else{
          this.$message.error(res.data.meta.msg)
        }
      })
    },
    toReturn(){
      this.$router.push({
        path:"/login",
      })
    }
  }
}
</script>