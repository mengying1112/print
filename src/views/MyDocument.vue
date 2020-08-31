<template>
    <div>
        <div class='myDocument_date'>
            <date-picker>
              <!-- <el-button  type="primary">查询</el-button> -->
            </date-picker>
            <div class='btn_box'>
              <el-button  type="primary">查询</el-button>
            </div>
        </div>
        <!-- <table-vue :config="this.config.tableData"> -->
        <table-vue :tableData="showTable">
            <el-table-column width="50">
            </el-table-column>
            <el-table-column prop="fileName" label="文件名"  align="center">
            </el-table-column>
            <el-table-column prop="fileSize" label="文件大小" width="180" align="center">
            </el-table-column>
            <el-table-column prop="uploadTime" label="上传时间" width="180" align="center">
            </el-table-column>
            <el-table-column prop="pages" label="页数" align="center">
            </el-table-column>
            <el-table-column prop="operation" label="操作"  align="center">
            </el-table-column>
        </table-vue>
        <el-pagination
            @current-change = 'handleCurrentChange'
            background
            layout="prev, pager, next"
            :page-size = 'pageSize'
            :total="this.tableData.length">
        </el-pagination>
    </div>
</template>

<script>
import DatePicker from '../components/common/DatePicker'
import TableVue from '../components/common/TableVue'
import api from '../axios/api.js'

export default {
    name: 'MyDocument',
    components: {
        DatePicker,
        TableVue
    },
    data() {
        return {
            tableData: [],
            pageSize: 4,
            currentPage: 1

        }
    },
    created() {
        this.getData()
    },
    computed: {
        showTable() {
            return this.tableData.slice(
                (this.currentPage - 1) * this.pageSize,
                this.currentPage * this.pageSize)
        }
    },
    methods: {
        getData:function() {
            api.mockdata('/myDocument')
            .then(res => {
                console.log(res)
                console.log('+++++++++++')
                this.tableData = res.data
            })
        },
        //设置当前页为点击页
        handleCurrentChange(currentPage){
            this.currentPage = currentPage
        }
    }
}
</script>

<style scoped>
    .myDocument_date{
        height: 100px;
        position: absolute;
        left: 15%;
        width: 80%;
        background-color: #d1e6da;      
    }

    .btn_box {
      /* padding: 20px; */
      /* margin: 0; */
      position: absolute;
      top: 10%;
      left: 60%

    }

    .el-pagination{
        position: absolute;
        top: 70%;
        left: 60%;
    }
</style>