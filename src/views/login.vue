<template>
  <div>
    <h1>这是登录页</h1>
     <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" style="250px">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" style="250px">
             <el-input type='password' v-model="ruleForm.password"></el-input>
         </el-form-item>
     </el-form>
     <el-button type="primary" style="width:180px" @click="toHome">登录跳转home</el-button>
  </div>
</template>
<script>
// import request from '../api/index'
export default {
  name:"home",
  data(){
      return {
          ruleForm:{
              username:'',
              password:'',
          },
          rules:{},
      }
  },
  created(){
    //   request({
    //       method:'POST',
    //       url:'/login',
    //       params:{
    //           username:'admin',
    //           password:'123456'
    //       }
    //   })
  },
  methods:{

    //   去首页
    toHome(){
        console.log(this.$http,"查看this.$http");
        this.$http.manageRt.postHttp(this.ruleForm).then(res=>{
          console.log(res.data,"查看res");
          if(res.data.meta.status == 200){
              this.$router.push({
                  path:'/home'
              })
          }
        })
    }
  }
}
</script>
<style lang="less" scoped>

</style>