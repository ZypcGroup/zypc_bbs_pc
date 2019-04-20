<template>
    <div class="login">
        <h3 class="left">掘金-juejin.im</h3>
        <p class="left">一个帮助开发者成长的社区</p>
        <el-input v-model="input_a" placeholder="用户名" class="input"></el-input>
        <el-input v-model="input_b" placeholder="手机号" class="input" @blur="sendMessage_phone()"></el-input>
        <el-input type="password" v-model="input_c" placeholder="密码（不少于6位）" class="input"></el-input>
        <el-row class="sub_btn_place">
            <el-button type="primary" class="sub_btn" @click="sendMessage()">立即注册</el-button>
        </el-row>
        <p class="third">第三方登录：</p>
    </div>
</template>

<script>
import { fail } from 'assert';
export default {
    data() {
        return {
             input_a: '',
             input_b: '',
             input_c: ''
        }
    },
    methods: {
        sendMessage_phone () {
            var phone = this.input_b;
            console.log(phone);
            if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){ 
                alert("手机号码有误，请重填");  
                return false; 
            } 
        },
        sendMessage_password () {
            var username = this.input_a;
            if(this.input_c.length < 6) {
                alert("密码在六位或六位以上");
                return false;
            }
        },
        sendMessage () {
            this.sendMessage_password()
            this.$store.state.haveLogined = false
            console.log(this.input_a,this.input_b,this.input_c);
        },
    },
}
</script>

<style>
    .login {
        background-color: white;
        height: 350px;
        width: 250px;
        border-radius: 5px;
        padding-top: 3px;
    }
    .input {
        width: 200px;
        margin-left: 25px;
        margin-top: 8px;
    }
    .left {
        margin-left: 25px;
        margin-top: 5px;
    }
    .sub_btn {
        margin-left: 25px;
        width: 200px; 
    }
    .sub_btn_place {
        margin-top: 10px;
    }
    .third {
        margin-left: 20px;
        font-size: 15px;
        margin-top: 10px;
    }
</style>
