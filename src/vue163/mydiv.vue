<template>
    <div>
        <h1>
            {{msg}}
        </h1>
        <chiil :suizi='erzi'>
          <slot>
              <p>匿名插槽</p>
          </slot>      
        </chiil>
        <slot name='title'>实名插槽：title</slot>
        <slot name='color'>实名插槽：color</slot>
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