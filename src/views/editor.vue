<template>
    <div class="writePlace">
        <head-place class="head" title="草稿箱"></head-place>
        <div class="write">
            <h2>在此处输入标题:</h2>
            <hr>
            <el-input placeholder="在此处输入标题" v-model="title" class="input_place"></el-input>
            <hr>
            <h3>在此处输入正文：</h3>
            <div class="edit_container">
                <quill-editor 
                    v-model="content" 
                    ref="myQuillEditor" 
                    :options="editorOption" 
                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">
                </quill-editor>
            </div>
            <el-button type="primary" class="submitButton" @click="submit">点击发布</el-button>
            <div class="bottomShow">
                <p>共{{contentLength}}个字，还能输入{{10000 - contentLength}}个字</p>       
            </div>
        </div>
    </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import headPlace from '@/components/headerwrite.vue'

export default {
    components: {
        quillEditor,
        headPlace
    },
    data() {
        return {
            content: '',
            contentLength: 0,
            editorOption: {},
            title:'',
            count: 0 
        }
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){
            // 加两个判断一个提交，一个存草稿
            console.log('asa')
        }, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){
            this.contentLength = this.content.length
            this.$store.state.writestate = 1
            this.$store.state.writedMessage = this.content
        }, // 内容改变事件
        submit() {
            console.log('11')
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    }
}
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
    h1, h2, h3 {
        margin-left: 10px;
        margin-top:10px;
    }
    .write {
        margin-top: 60px;
        margin-left: 1%;
        width: 98%;
    }
    .writePlace {
        background-color: white;
        border-radius: 5px;
    }
    .edit_container {
        background-color: white;
        text-align: center;
        margin-top: 5px;
    }
    .input_place {
        width: 99%;
        margin-left: 0.5%;
    }
    .ql-editor ,.ql-blank {
        height: 480px;
        border: 1px solid;
    }
    .bottomShow {
        float: right;
        margin-right: 20px;
        color: peru
    }
    .head {
        position: fixed;
        width: 100%;
        margin-top: -70px;
    }
    .submitButton {
        margin-left: 45%;
        margin-top: 8px;
    }
</style>
