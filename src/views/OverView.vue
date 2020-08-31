<template>
    <div class='overview_container'>
        <date-picker>
        </date-picker>
            <el-button slot='button' type="primary">查询</el-button>
    </div>
</template>

<script>
import DatePicker from '../components/common/DatePicker'

export default {
    name: 'OverView',
    components: {
        DatePicker
    }
}
</script>

<style scoped>
    .overview_container{
        width: 1000px;
        height: 200px;
        border: 1px solid #d1e6da;
        position: absolute;
        top: 10%;
        left: 30%;
    }

    .el-button{
        position: absolute;
        top: 10%;
        left: 65%;
    }
</style>