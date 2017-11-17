<template>
    <section class="container">
         <main class="page-wrap">
             <h1 class="page-title">
                 {{title}}
             </h1>
             <div class="flex dashboard-row">
                <div class="flex-item card" v-bind:id="qqq">
                    <div class="card-hd">
                        <h2>
                            {{msg}}
                        </h2>
                    </div>    
                    <div class="card-bd p-10">
                    
                    </div>
                </div>
                <div class="flex-item card" v-on:click='ccc'>
                    <div class="card-hd">
                        <h2>
                            {{msg.split('').reverse().join('') }}
                        </h2>
                    </div>    
                    <div class="card-bd">

                    </div>
                </div>
                <div class="flex-item card">
                    <div class="card-hd">
                        <h2>
                            标题
                        </h2>
                    </div>    
                    <div class="card-bd">

                    </div>
                </div>
             </div>
             
             <div v-for="title in list" class="flex dashboard-row">
                <div class="flex-item card">
                    <div class="card-hd">
                        <h2>
                            {{title}}
                        </h2>
                    </div>    
                    <div class="card-bd">

                    </div>
                </div>                       
             </div>
             
         </main>    
     </section> 
</template>
<script>
    import Data1 from '../assets/data/data.json'
    let sb = '标题11';
    export default {
        "name":"content",
        data(){
            return {
                'msg':sb,
                'title':'控制台',
                'list':Data1.like,
                'qqq':'idddd'
            }
        },
        methods:{
            ccc(){
                this.msg = "改了过后的"
            }    
        }
    } 
    
</script>