<template>
    <div class='welcome_container'>企业个人中心
        <div class='btn'>
            <el-button @click='btnClick' type="primary">查看本月使用数据</el-button>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Welcome',
    methods: {
        btnClick() {
            this.$router.push('/overview').catch(err => {})
        }
    }
}
</script>

<style scoped>
    .welcome_container{
        width:450px;
        height: 300px;
        border-radius: 3px;
        position: absolute;
        left: 55%;
        top: 40%;
        transform: translate(-50%, -50%);
        text-align:center;
        font-size: 30px;
    }

    .btn{
        border-radius: 3px;
        position: absolute;
        left: 33%;
        top: 50%;
    }

</style>