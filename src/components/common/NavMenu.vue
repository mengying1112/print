<template>
    <el-container class='home_container'>
        <el-header>
            <div>
                <span>悦享印</span>
            </div>
            <!-- <div >
                <el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
            </div>           -->
            <drawer></drawer>
        </el-header>

        <!-- 页面主体区域 -->
        <el-container class='body_box'>
            <!-- 左边侧边栏 -->
            <el-aside width="200px">  
                <el-menu  @select='handleSelect' background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-location"></i>
                        <span slot="title">概况</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">待打任务</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">扫描文件</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">作业记录</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <!-- 右边主体 -->
            <el-main>
                     <router-view/>
            </el-main>
        </el-container>
        

    </el-container>
</template>

<script>
import Drawer from './Drawer'

export default {
    name: 'NavMenu',
    methods: {
        handleSelect(key, keyPath) {
            switch(key) {
                case '1':
                    this.$router.push('/overview').catch(err => {})
                    break;
                case '2':
                    this.$router.push('/myDocument').catch(err => {})
                    break;
                case '3':
                    this.$router.push('/scanFile').catch(err => {})
                    break;
                case '4':
                    this.$router.push('/dealDetail').catch(err => {})
                    break;
            }
        }
    },
    components: {
        Drawer
    }

}
</script>

<style scoped>
    .home_container{
        height: 100%;
    }

    .el-header{
        background-color: #373D41;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 20px;
    }

    .el-aside{
        background: #545c64;
    
    }

    .el-menu{
        height: 100%;
    }

    .el-main{
        background: #eaedf1;
    }

</style>