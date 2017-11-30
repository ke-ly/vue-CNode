<template>
    <div>
        <h1>
            {{msg}}
        </h1>
        <chiil :suizi='erzi'></chiil>
    </div>
</template>
<style lang="scss">
    h1{
        line-height: 2
    }
</style>
<script>
    import chiil from './chiil'
    export default {
        props:['msg','erzi'],
        components:{
            chiil   
        }
    }
</script>