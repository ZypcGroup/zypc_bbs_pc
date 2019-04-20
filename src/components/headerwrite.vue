<template>
    <div id="top">
        <div class="title_main">
            <router-link to="/home"
                 v-bind:class="{'active':this.$route.path==='/'||this.$route.path==='/home'}">
                 <img :src="this.img" class="title_img">
            </router-link> 
            <div class="i_p_ed">
                <router-link to="/caogao"><i class="el-icon-edit">{{title}}</i></router-link>
            </div>
            <div class="logined_sign">
                <span>用户名</span>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
import titimg from '../assets/title.png'
import inputButton from '../components/input.vue'

export default {
    props: {
        title: String
    },
    data () {
        return {
            img: titimg
        }
    },
    components: {
        inputButton
    }
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
    /* 设置首页路由距离 */
    .title_span_first {
        margin-left: 30px;
        margin-top: -27px;
        font-size: 17px;
        display: inline-block;
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
    /* 设置顶部高度 */
    #top {
        height: 60px;
        background-color: white;
    }
    .el-icon-edit{
        color: rgb(37, 110, 110);
        font-size: 19px;
    }
    .i_p_ed {
        display: inline-block;
        position: absolute;
        margin-left: 35%;
        margin-top: 20px;
    }
    .logined_sign {
        display: inline-block;
        position: absolute;
        margin-left: 45%;
        margin-top: 18px;
    }
    @media screen and (min-width: 500px) and (max-width: 800px) {
        .i_p {
            display: inline-block;
            position: absolute;
            margin-left: 29%;
            margin-top: 20px;
        }
        .logined_sign {
            display: inline-block;
            position: absolute;
            margin-left: 45%;
            margin-top: 18px;
        }
    }
    @media screen and (min-width: 400px) and (max-width: 500px) {
        .i_p {
            display: inline-block;
            position: absolute;
            margin-left: 10%;
            margin-top: 20px;
        }
        .logined_sign {
            display: inline-block;
            position: absolute;
            margin-left: 45%;
            margin-top: 18px;
        }
    }
</style>
