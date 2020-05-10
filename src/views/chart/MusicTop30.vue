<template>
  <div>
    <el-table
      :data="musicData"
      style="width: 100%">
      <el-table-column
        prop="musicName"
        label="名字"
        width="180">
      </el-table-column>
      <el-table-column
        prop="singerName"
        label="歌手"
        width="180">
      </el-table-column>
      <el-table-column
        prop="musicDurationMinute"
        label="时长">
      </el-table-column>
      <el-table-column
        label="链接">
        <template slot-scope="scope">

          <a :href="scope.row.musicUrl">{{scope.row.musicUrl}}</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getMusicTypeResult, getResult,getMusicTop30CommentResult } from '../../api/common'

  export default {
    name: 'MusicTop30',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        musicData:[]
      }
    },
    mounted() {
      this.getTheChangeResult()
    },
    methods:{
      async getTheChangeResult(){
        const res = await getMusicTop30CommentResult();
        console.log(res.data)
        this.musicData = res.data;
      }

    }
  }
</script>


<style scoped>

</style>
