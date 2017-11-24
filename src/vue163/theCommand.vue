<template>
    <div class="mingling">
        <h3>
            <p>{{fullName}}</p>
            <a href="javascript:" @click='deal'>
                调用计算属性的set方法
            </a>
        </h3>
        <fieldset>
            <legend>
                录入系统
            </legend>
            <div>
                <label for="">
                    姓名：
                </label>
                <input type="text" v-model="newStudents.name">
            </div>
            <div>
                <label for="">
                    年龄：
                </label>   
                <input type="number" v-model="newStudents.age">
            </div>
            <div>
                <label for="">
                    性别：
                </label>
                <select name="" id="" v-model="newStudents.sex">
                    <option value="男">男</option>
                    <option value="女">女</option>
                </select>
            </div>
            <div>
                <label for="">
                    手机：
                </label>
                <input type="tel" v-model="newStudents.tel">
            </div>
            <div>
                <button type="button" @click="addStudent">
                    创建新用户
                </button>
            </div>
        </fieldset>    
        
        <div class="">
            <table>
                <thead>
                    <tr>
                        <th>
                           姓名 
                        </th>
                        <th>
                            年龄
                        </th>
                        <th>
                           性别 
                        </th>
                        <th>
                           手机 
                        </th>
                        <th>
                            操作
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,i) in students">
                        <td>{{item.name}}</td>
                        <td>{{item.age}}</td>
                        <td>{{item.sex}}</td>
                        <td>{{item.tel}}</td>
                        <td>
                             <a href="javascript:" @click="delStudent(i)">
                                 删除
                             </a>   
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>    
</template>
<script>
    export default {
        data(){
            return{
                firstName:"zhang",
                lastName:"sanfeng",
                students:[
                    {
                        name:"张三",
                        age:15,
                        sex:'男',
                        tel:'15786485145'
                    },
                    {
                        name:"李四",
                        age:18,
                        sex:'男',
                        tel:'18786485145'
                    },
                    {
                        name:"王五",
                        age:14,
                        sex:'女',
                        tel:'13990457671'
                    },
                    {
                        name:"李刘",
                        age:16,
                        sex:'男',
                        tel:'15748751242'
                    },
                ],
                newStudents:{
                    name:"",
                    age:0,
                    sex:'男',
                    tel:''
                }
            }
        },
        methods:{
            addStudent(){
                if(this.newStudents.name == ""){
                    alert(11)
                    return;
                }                
                if(parseInt(this.newStudents.age) < 6){
                    alert(22)
                    return;
                }
                if(this.newStudents.tel == ""){
                    alert(33)
                    return;
                }
                
                this.students.unshift(this.newStudents);
                this.newStudents = [
                    {
                        name:"",
                        age:0,
                        sex:'男',
                        tel:''
                    }    
                ]
            },
            delStudent(e){
                this.students.splice(e,1);
            },
            deal(){
                this.fullName = 'Token Lily'    
            }
        },
        computed:{//计算属性              
            fullName:{
                get(){//计算属性的get方法
                    return `${this.firstName} ${this.lastName}`;
                },
                set(str){
                    let arr = str.split(' ');
                    this.firstName = arr[0];
                    this.lastName = arr[1];
                }
            }
        }
    }   
</script>
<style lang="scss" type="text/css">
    $white:#ffffff;
    
    .mingling>*{
        width: 600px;
        margin: 100px auto;
        padding: 20px;
        background-color: $white;
    }
    .mingling h3{
        a{
            font-size: 14px;
            text-decoration: underline;
        }
    }
    legend{
        padding: 0 10px;
    }
    input,select,button{
        padding: 10px;
    }
    table{
        width: 100%;  
        border-collapse: collapse;
    }
    thead th{
        background: #f1f1f1;
    }
    th,td{
        text-align: left;
        padding: 10px;
        border: 1px solid #d9d9d9;
    }
    fieldset div{
        margin-bottom: 15px;
    }
</style>