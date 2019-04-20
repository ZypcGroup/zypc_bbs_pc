<template>
    <div>
        <head-place title="写文章"></head-place>
        <div>
            <span>a</span>
            <span>b</span>
            <span>c</span>
            <span>d</span>
        </div>
    </div>
</template>

<script>
import headPlace from '@/components/headerwrite.vue'

export default {
    components: {
        headPlace
    },
    methods: {
        getCG () {
            this.$axios.get("http://gank.io/api/data/Android/10/1").then( (res) => {
                console.log(res)
            })
        }
    },
    mounted: function() {
        this.getCG()
    }
}
</script>

<style>

</style>
