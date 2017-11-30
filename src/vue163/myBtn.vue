<template>
    <div>
        <button type="button" @click="total()">点击了{{counter}}次</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                counter:0
            }    
        },
        methods:{
            total(){
                this.counter++;
                
                //通知外界调用了该方法
                this.$emit('total');
            }    
        }
    }
</script>
<style>
    button{
        margin-top: 20px;
    }
</style>