<template>
    <div class="bbs">
      <div class="simple_head">
        <span class="head_word">热门</span>
        <span class="head_word">|</span>
        <span class="head_word">最新</span>
        <span class="head_word">|</span>
        <span class="head_word">评论</span>
      </div>
      <div class="message"
        v-for="mes in dataList">
        <span class="zhuanlan">专栏·</span>
        <span class="zuozhe">{{mes.type}}</span>
        <!-- <span>时间</span> -->
        <!-- <span>标签</span> -->
        <br>
        <p class="biaoti">{{mes.used}}</p>
        <br>
        <el-button class="dianzan"><i class="el-icon-star-off address"></i></el-button>
        <el-button class="pinglun"><i class="el-icon-edit-outline address"></i></el-button>
      </div>
    </div>
</template>
<script>
import PullTo from 'vue-pull-to'
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      dataList:[],
      page: 0
    }
  },
  components: {
    PullTo
  },
  methods: {
    dataGet() {
      this.$axios.get("http://gank.io/api/data/Android/10/1").then( (res) => {
        this.dataList = res.data.results
      })
    },
    stateChange() {
    },
    loadMore() { 
      var length = document.documentElement.scrollTop
      if (Number(document.documentElement.scrollTop + document.documentElement.clientHeight + 1) >= Number(document.documentElement.scrollHeight)) {
        this.page++
        this.$axios.get("http://gank.io/api/data/Android/10/1").then( (res) => {
        // for循环遍历新获取的对象，然后push一个对象到data的数组中,创建一个push一个
        for(let i = 0; i < 10; i++) {
            var resObject = {
            type: res.data.results[i].type,
            used: res.data.results[i].type
          }
          this.dataList.push(resObject)
        }      
      })
      }
    }
  },
  mounted: function() {
    this.dataGet()
    window.addEventListener('scroll',this.loadMore,true)
  },
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
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .message {
    height: 100px;
    background-color: white;
    border-radius: 5px;
    margin-top: 1px;
  }
  .simple_head {
    background-color: white;
    height: 35px;
    display: table-cell;
    vertical-align: middle;
    border-radius: 5px;
    width: 1000px;
  }
  .head_word {
    padding-left: 10px;
  }
  .zhuanlan {
    position: relative;
    color: red;
    font-size: 10px;
    margin-left: 20px;
    margin-top: 30px;
  }
  .zuozhe {
    color:dimgrey;
    font-size:10px;
  }
  .biaoti {
    margin-left: 20px;
    font-size: 22px;
  }
  .dianzan {
    float: left;
    margin-left: 20px;
    margin-top:-10px;
    height: 20px;
  }
  .address {    
    position: absolute;
    margin-top: -6px;
    margin-left: -6px;
  }
  .pinglun {
    float: left;
    height: 20px;
    margin-top: -10px;
  }
</style>
