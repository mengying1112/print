<template>
    <!-- <div class='overview_container'> -->
        <div class="date_box">
            <span class="demonstration">查询：</span>
            <el-date-picker
            @change='selectDate'
            format="yyyy-MM-dd" 
            value-format="yyyy-MM-dd"
            v-model="value"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
            </el-date-picker>
            <slot></slot>
        </div>
        <!-- <el-button type="primary">查询</el-button> -->
        <!-- <slot name='button'></slot> -->
    <!-- </div> -->
</template>

<script>
export default {
    name: 'DatePicker',
    data() {
        return {
            value: ''
        }
    },
    methods: {
        selectDate(){
            // console.log(this.value)
            this.$emit('dateValue', this.value)
        }
    }
}
</script>

<style scoped>
    .overview_container{
        width: 1000px;
        height: 200px;
        border: 1px solid #ffeeff;
        position: absolute;
        top: 10%;
        left: 30%;
    }

    .date_box{
        position: absolute;
        top: 10%;
        left: 20%;
        
    }
</style>