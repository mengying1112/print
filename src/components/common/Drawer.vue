<template>
    <div>
        <div class="block" @click='drawer = true'>
            <!-- <el-avatar :size="30" :src="circleUrl" >
            </el-avatar> -->
            {{getUsername}}
            <el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
        </div>
        <el-drawer :visible.sync='drawer' :with-header="true" size='15%' >
            <div class='drawer_box'>
                <span class='drawer_text'>可用余额:{{count}}</span><br>
                <!-- <span class='drawer_count'>100000.00</span><br> -->
                <router-link to='' >个人中心</router-link><br>
                <router-link to='' >个人资料</router-link><br>
                <router-link to='/login' >退出登录</router-link>
            </div>
        </el-drawer> 
    </div>
</template>

<script>
export default {
    name: 'Drawer',
    data() {
        return {
            drawer: false,
            count: 10000.00
        }
    },
    computed: {
        getUsername(){
           return this.$store.state.username
        }
    }
}
</script>

<style scoped>
    .drawer_box{
        text-align: center;
        position: absolute;
        left: 15%;
        height: 121px;
        flex-direction: column;
        display: flex;
        justify-content: space-between;
            
    }

    .drawer_text{
        font-size: 15px;
        color: black;
    }

    .drawer_count{
        font-size: 15px;
        color: red;
    }

    a { 
        text-decoration: none;
        font-size: 15px;
        color: black;
    }
    .router-link-active {
        text-decoration: none;
        
    }
</style>