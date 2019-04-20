<template>
    <div id="top">
        <div class="title_main">
            <img :src="this.img" class="title_img">
            <span class="title_span_first">
                <router-link to="/home"
                 v-bind:class="{'active':this.$route.path==='/'||this.$route.path==='/home'}">
                首页
                </router-link>
            </span>
            <span class="title_span_first_select">
                <el-dropdown >
                    <span class="el-dropdown-link">首页
                         <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>动态</el-dropdown-item>
                        <el-dropdown-item>话题</el-dropdown-item>
                        <el-dropdown-item>活动</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </span>
            <span class="title_span">
                <router-link to="/home/dynamic"
                 v-bind:class="{'active':this.$route.path==='/dynamic'}">动态</router-link>
            </span>
            <span class="title_span">
                <router-link to="/home/conversation"
                 v-bind:class="{'active':this.$route.path==='/conversation'}">话题</router-link>
            </span>
            <span class="title_span">
                <router-link to="/home/activity"
                 v-bind:class="{'active':this.$route.path==='/activity'}">活动</router-link>
            </span> 
            <div class="in_button">
                <span>
                    <input-button></input-button>
                </span>
                <el-row class="input_button">
                    <el-button icon="el-icon-search"></el-button>
                </el-row>
            </div>
                <div class="i_p">
                   <router-link to="/editor"><i class="el-icon-edit i_place">写文章</i></router-link>
                </div>
                <div v-bind:class="{'ifshow':!this.$store.state.haveLogined,'login_sign':1}">
                    <span class="i_place line">|</span>
                    <span class="i_place">登录</span>
                    <span class="i_place">·</span>
                    <span class="i_place">注册</span>
                </div>
                <div v-bind:class="{'login_sign':1,'ifshow':this.$store.state.haveLogined}">
                    <span class="i_place">大图片</span>
                </div>
        </div>
        <hr>
    </div>
</template>

<script>
import titimg from '../assets/title.png'
import inputButton from '../components/input.vue'

export default {
    data () {
        return {
            img: titimg,
            loginstate: 0
        }
    },
    components: {
        inputButton
    },
    methods: {
        getLoginstate() {
            // this.loginstate = $store.state.stateLogin
            console.log(this.loginstate)
        }
    },
    mounted: function() {
        this.getLoginstate()
    },
}
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
    /*设置图片距离  */
    .title_img {
        margin-top: 10px;
    }
    /* 设置图片左边距 */
    .title_main {
        margin-left: 20%;
    }
    /*  设置其余四个路由边距*/
    .title_span {
        margin-left: 40px;
        margin-top: -27px;
        font-size: 17px;
        display: inline-block;
        vertical-align: middle;
    }
    /* 设置首页路由距离 */
    .title_span_first {
        margin-left: 30px;
        margin-top: -27px;
        font-size: 17px;
        display: inline-block;
        vertical-align: middle;
    }
    .title_span_first_select {
        display: none;
        margin-left: 30px;
        margin-top: -27px;
        font-size: 17px;
        vertical-align: middle;
    }
    /* 设置路由样式 */
    a {
        text-decoration: none;
        color: black;
    }
    /* 路由动态class */
    .active {
        color: rgb(96, 124, 216);
    }
    .ifshow {
        /* display: block; */
        display: none !important;
    }
    /* 设置输入提交样式 */
    .input_button {
        position: absolute;
        margin-left: 150px;
        margin-top: -40px;
        font-size: 17px;
        display: inline-block;
        vertical-align: middle;
        
    }
    .in_button {
        display: inline-block;
        margin-top: -27px;
        width: 150px;
        margin-left: 10%;
        display: inline-block;
        vertical-align: middle;
    }
    /* 设置顶部高度 */
    #top {
        height: 60px;
        background-color: white;
    }
    .i_p {
        display: inline-block;
        position: absolute;
        margin-left: 80px;
        margin-top: 20px;
    }
    .i_place {    
        font-size: 18px;
        color: rgb(109, 201, 201)
    }
    .login_sign {
        display: inline-block;
        position: absolute;
        margin-left: 160px;
        margin-top: 18px;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
        font-size: 18px;
    }
    .el-icon-arrow-down {
        font-size: 18px;
    }
    /* 进行媒体查询 */
    @media screen and (min-width: 1100px) and (max-width: 1200px) {
        .title_main {
            margin-left: 6%;
        }
    }
    @media screen and (min-width: 900px) and (max-width: 1100px) {
        .title_main {
            margin-left: 4%;
        }
        .title_span{
            margin-left: 20px;
        }
        .title_span_first {
            margin-left: 20px;
        }
    }
    @media screen and (min-width: 700px) and (max-width: 900px) {
        .in_button {
            margin-left:4%;
            width: 110px;
        }
        .input_button {
            margin-left: 110px;
        }
        .title_span {
            margin-left: 20px;
        }
        .title_main {
            margin-left: 1%;
        }
        .i_place {
            font-size: 15px;
        }
     }
    @media screen and (min-width: 700px) and (max-width: 750px) {
        .title_span_first {
            display: none;
        }
        .title_span_first_select {
            display: inline-block;
            margin-left: 30px;
            margin-top: -27px;
            font-size: 17px;
            vertical-align: middle;
        }
        .in_button {
            margin-left:7%;
        }
        .title_span {
            display: none;
        }
        .i_place {
            font-size: 16px;
        }
        .title_main {
            margin-left: 2%;
        }
    }
    @media screen and (min-width: 600px) and (max-width: 700px) {
        .title_span_first {
            display: none;
        }
        .title_span_first_select {
            display: inline-block;
            margin-left: 10px;
            margin-top: -27px;
            font-size: 17px;
            vertical-align: middle;
        }
        .in_button {
            margin-left:1%;
        }
        .title_span {
            display: none;
        }
        .i_place {
            font-size: 15px;
        }
        .title_main {
            margin-left: 0;
        }
    }
    @media screen and (min-width: 500px) and (max-width: 600px) {
        .title_span_first {
            display: none;
        }
        .title_span_first_select {
            display: inline-block;
            margin-left: 30px;
            margin-top: -27px;
            font-size: 17px;
            vertical-align: middle;
        }
        .title_span {
            display: none;
        }
        .in_button {
            display: none;
        }
        .title_main {
            margin-left: 4%;
        }
    }
    @media screen and (min-width: 480px) and (max-width: 500px) {
        .title_span_first {
            display: none;
        }
        .title_span_first_select {
            display: inline-block;
            margin-left: 30px;
            margin-top: -27px;
            font-size: 17px;
            vertical-align: middle;
        }
        .title_span {
            display: none;
        }
        .in_button {
            display: none;
        }
        .i_p {
            display: none;
        }
        .line {
            display: none;
        }
        .title_main {
            margin-left: 2%;
        }
    }
    @media screen and (max-width: 480px) {
        .title_span_first_select {
            display: inline-block;
            margin-left: 30px;
            margin-top: -27px;
            font-size: 17px;
            vertical-align: middle;
        }
        .title_span_first{
            display: none;
        }
        .title_span {
            display: none;
        }
        .in_button {
            display: none;
        }
        .i_p {
            display: none;
        }
        .title_main {
            margin-left: 1%;
        }
        .login_sign {
            margin-left: 70px;
        }
        .line {
            display: none;
        }
    }
</style>
