<template>
    <div>
        <input type="text" :value="suizi">
        <slot>slot的默认文字</slot>  
    </div>      
</template>
<script>
    export default {
        props:['suizi']
    }
</script>