<template>
    <div class='login_container'>
        <div class='login_box'>
            <div>企业个人登录</div>
            <el-form ref='loginFormRef' :model="loginForm" :rules='loginFormRules' label-width="80px" class='login_form'>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" type='password'></el-input>
                </el-form-item>
                 <el-form-item class='btn'>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import api from '../axios/api.js'

export default {
    name: 'Login',
    data() {
        return {
            //登录表单数据绑定对象
            loginForm: {
                username: '',
                password: ''
            },
            //表单验证规则
            loginFormRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 1, max: 10, message: '长度在 1 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            },
            tableData: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData:function() {
            api.mockdata('/login')
            .then(res => {
                console.log(res)
                console.log('+++++++++++')
                // this.tableData = res.loginList
                this.tableData = res.users

            console.log('BBB'+ this.tableData[0].username)
            })
        },
        login() {
            var flag = 0
            for(let i=0;i<this.tableData.length;i++){
                console.log('username：'+ this.tableData[i].username + ',password:' + this.tableData[i].password)
                if (this.loginForm.username == this.tableData[i].username &&
                    this.loginForm.password == this.tableData[i].password){

                        this.$router.push('/home/' + this.loginForm.username)

                        //用户名传到state
                        this.$store.commit('setUsername', this.loginForm.username)
                        flag = 1
                        break;
                }
            }
            if(flag == 0){
                alert('账号密码错误')
            
            }
        }
    }
}
</script>

<style  scoped>
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
    }

    .login_box{
        width:450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align:center
    }

    .login_form{
        position: absolute;
        bottom: 30%;
        width: 90%;
    }

    .btn{
        position: absolute;
        left: 30%;
    }
</style>