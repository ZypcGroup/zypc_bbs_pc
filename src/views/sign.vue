<template>
    <div class="loginPlace">
         <img :src="this.img" class="imgPlace" >
        <el-input
            placeholder="手机号"
            v-model="input"
            clearable
            class="inputPlace">
        </el-input>
        <el-input
            placeholder="密码"
            v-model="input"
            clearable
            class="inputPlace">
        </el-input>
        <el-row>
            <el-button type="primary" class="signBtnPlace" @click="sendMessage()">立即登录</el-button>
        </el-row>
        <router-link to="/find"><span class="remember">?忘记密码</span></router-link>
        <span class="signPlace">注册</span>
    </div>
</template>

<script>
import titimg from '../assets/title.png'

export default {
    data() {
      return {
        input: '',
        img: titimg
      }
    },
    methods: {
        // sendPassword() { 
        // },
        setRouter() {
            this.$router.push({path: '/editor'})
        }
    },
    mounted: function() {
    }
}
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
    .imgPlace {
        margin-left: 85px;
        margin-top: 10px;
    }
    .loginPlace{
        width: 20%;
        height:300px;
        background-color: white;
        border-radius: 5px;
        margin-left:40%;
        margin-top: 200px;
    }
    .inputPlace{
        width: 90%;
        margin-left: 5%;
        margin-top: 10px;
    }
    .remember{
        color: blue;
        margin-left: 20px;
    }
    .signPlace{
        color: blue;
        margin-left: 150px;
    }
    .signBtnPlace {
        width: 90%;
        margin-left: 5%;
        margin-top: 15px;
    }
    a {
        text-decoration: none;
    }
</style>
