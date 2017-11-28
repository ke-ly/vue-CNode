<template>
    
    <div class="gg">
       <nnn/>
        <h1>
            {{title}}
        </h1>
    </div>    
</template>
<script>
    import nnn from './navbar';
    export default {
        data(){
            return {
                title:'新手入门'
            }
        },
        components:{
            nnn   
        }
    }
</script>
<style lang="scss">    
    .gg {       
        
        h1{
            padding: 50px;
            text-align: center;
            font-weight: 400;
            font-size: 20px;
        }
    }       
</style>