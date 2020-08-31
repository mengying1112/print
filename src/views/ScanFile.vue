<template>
    <div>
        <div class='scanFile_date'>
            <date-picker @dateValue='dateValue'>
              <!-- <el-button  type="primary">查询</el-button> -->
            </date-picker>
            <div class='btn_box'>
              <el-button  type="primary" @click='selectByDate'>查询</el-button>
              <el-button type="primary">批量下载</el-button>
              <el-button type="primary">批量删除</el-button>
            </div>
        </div>
        <!-- <table-vue :config="this.config"> -->
        <table-vue :tableData="tableData">
            <el-table-column  type="selection" show-overflow-tooltip width="50">
            </el-table-column>
            <el-table-column prop="fileName" label="名称" width="180" align="center">
            </el-table-column>
            <el-table-column prop="fileSize" label="大小" width="180" align="center">
            </el-table-column>
            <el-table-column prop="color" label="颜色" width="180" align="center">
            </el-table-column>
            <el-table-column prop="scanTime" label="扫描时间" width="180" align="center">
            </el-table-column>
            <el-table-column prop="pages" label="页数"  align="center">
            </el-table-column>
            <el-table-column prop="resolutionRatio" label="分辨率"  align="center">
            </el-table-column>
            <el-table-column prop="operation" label="操作"  align="center">
            </el-table-column>
        </table-vue>
    </div>
</template>

<script>
import DatePicker from '../components/common/DatePicker'
import TableVue from '../components/common/TableVue'
import api from '../axios/api.js'

export default {
    name: 'ScanFile',
    components: {
        DatePicker,
        TableVue
    },
    data() {
        return {
            // config: []
            tableData: [],
            time1: '',
            time2: '',
            selectedData: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData:function() {
            // api.mockdata('/scanFile')
            api.mockdata('/info')
            .then(res => {
                console.log(res)
                this.tableData = res.infoList
            })
        },
        //取得日期框选择的日期
        dateValue(dateValue){
            console.log(dateValue)
            this.time1 = dateValue[0]
            this.time2 = dateValue[1]
            console.log('time1'+this.time1)
            console.log('time2'+this.time2)
        },
        //按日期筛选数据 
        selectByDate(){
            api.mockdata('/info')
            .then(res => {
                //获取数据
                this.selectedData = res.infoList
                //清空数组，方便重新赋值
                this.tableData.splice(0,this.tableData.length)
                //筛选日期
                for(let i=0;i<this.selectedData.length;i++){
                    if(this.time1 <= this.selectedData[i].scanTime && this.selectedData[i].scanTime <= this.time2){
                        //把符合条件的数据赋给数组，显示出来
                        this.tableData.push(this.selectedData[i])
                    }
                }

            })
    
        }
    }
}
</script>

<style scoped>
    .scanFile_date{
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
</style>