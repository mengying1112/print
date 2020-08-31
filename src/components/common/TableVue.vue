<template>
    <div class='table_container'>
        <el-table :data="tableData" border>
            <slot></slot>
        </el-table>
        </div>
</template>

<script>
export default {
    name: 'TableVue',
    props: {
        tableData:Array
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    .table_container{
        position: absolute;
        top: 30%;
        left: 15%;
        width: 80%;
        }
</style>