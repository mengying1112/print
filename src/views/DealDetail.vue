<template>
    <div>
        <div class='dealDetail_date'>
            <date-picker>
              <!-- <el-button  type="primary">查询</el-button> -->
            </date-picker>
            <div class='select_box'>
                <span class="demonstration">作业类型：</span>
                <el-select v-model="value_select" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class='btn_box'>
              <el-button  type="primary">查询</el-button>
            </div>
        </div>
        <table-vue :config="this.config">
            <el-table-column  type="selection" show-overflow-tooltip width="50">
            </el-table-column>
            <el-table-column prop="dealTime" label="作业时间"  align="center">
            </el-table-column>
            <el-table-column prop="type" label="类型"  align="center">
            </el-table-column>
            <el-table-column prop="fileName" label="文件名" align="center">
            </el-table-column>
            <el-table-column prop="pages" label="页数"  align="center">
            </el-table-column>
        </table-vue>
    </div>
</template>

<script>
import DatePicker from '../components/common/DatePicker'
import TableVue from '../components/common/TableVue'

export default {
    name: 'DealDetail',
    components: {
        DatePicker,
        TableVue
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '所有类型'
        }, {
          value: '选项2',
          label: '复印'
        }, {
          value: '选项3',
          label: '打印'
        }, {
          value: '选项4',
          label: '扫描'
        }, {
          value: '选项5',
          label: '其他'
        }],
        value_select: '',
        config: []

      }
    }
}
</script>

<style scoped>
    .dealDetail_date{
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
      left: 90%

    }

    .select_box{
        /* padding: 20px; */
        position: absolute;
        top: 10%;
        left: 60%
    }
</style>