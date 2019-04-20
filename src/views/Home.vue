<template>
    <div>
        <head-place class="head"></head-place>
        <div class="con_main">
            <!-- <content-place class="main"></content-place> -->
            <router-view class="main"></router-view>
            <login-place class="login" v-if="this.$store.state.haveLogined"></login-place>
        </div>
    </div>
</template>

<script>
import headPlace from '../components/head.vue'
import loginPlace from '../components/login.vue'
import contentPlace from '../components/content.vue'
import axios from 'axios'

export default {
    data () {
        return {
        }
    },
    components: {
        headPlace,
        loginPlace,
        contentPlace
    },
    methods: {
        sendCGmessage() {
            // this.$axios.post(url,this.$store.state).then().catch()
        },
        writeMessage() {
            console.log('login',this.$store.state.stateLogin)
        }
    },
    mounted: function () {
        this.writeMessage()
    }
}
</script>   

<style scope="this api replaced by slot-scope in 2.5.0+">
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .head {
        position: fixed;
        width: 100%;
        margin-top: -70px;
        z-index: 100;
    }
    .main {
        float: left;
        width: 50%;
        margin-left: 20%;
    }
    .login {
        float: left;
        margin-left: 1%;
    }
    .con_main {
        margin-top: 60px;
    }
    @media screen and (min-width: 700px) and (max-width: 900px) {
        .main {
            width: 80%;
            margin-left: 10%;
        }
        .login {
            float: left;
            margin-left: 30%;
            margin-top: 20px;
        }
    }
    @media screen and (min-width: 600px) and (max-width: 700px) {
        .main {
            width: 90%;
            margin-left: 5%;
        }
        .login {
            float: left;
            margin-left: 30%;
            margin-top: 20px;
        }
    }
    @media screen and (min-width: 300px) and (max-width: 600px) {
        .main {
            width: 90%;
            margin-left: 5%;
        }
        .login {
            float: left;
            margin-left: 20%;
            margin-top: 20px;
        }
    }
</style>
