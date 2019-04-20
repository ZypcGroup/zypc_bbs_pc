<template>
    <div class="findPlace">
        <h2 class="hPlace">重置密码</h2>
        <el-input
            placeholder="手机号"
            v-model="inputID"
            clearable
            class="IDPlace">
        </el-input>
        <el-input
            placeholder="请输入验证码"
            v-model="inputYZ"
            clearable
            class="YZIDPlace">
        </el-input>
        <el-row>
            <el-button type="primary" class="YZBtnPlace" @click="sendMessage()">获取验证码</el-button>
        </el-row>
        <el-input
            placeholder="请输入新密码"
            v-model="inputPassword"
            clearable
            class="IDPlace">
        </el-input>
        <el-row>
            <el-button type="primary" class="TPlace" @click="sendMessage()">确定修改</el-button>
        </el-row>
        <router-link to="/home"><span class="goBack">返回首页</span></router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputID:'',
            inputYZ:'',
            inputPassword:''
        }
    },
    methods:{
        sendMessage() {
            console.log("a")
        }
    }
}
</script>

<style>
    .findPlace {
        float: left;
        background-color: white;
        width: 35%;
        margin-left: 32.5%;
        margin-top: 100px;
        border-radius: 5px;
        height: 400px;
    }
    .hPlace {
        margin-left: 40%;
        margin-top: 20px;
    }
    .IDPlace {
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
    }
    .YZIDPlace {
        width: 69%;
        margin-left: 5%;
         margin-top: 20px;
    }
    .YZBtnPlace {
        float: left;
        margin-left: 74%;
        margin-top: -40px;
    }
    .TPlace {
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
    }
    .goBack {
        margin-left: 44%;
        text-decoration: none;
        color: blue;
    }
</style>
