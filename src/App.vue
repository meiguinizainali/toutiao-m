<template>
  <div id="app">

  <router-view></router-view>
  <h1>黑马头条

    <div class="box" style="padding:20px; ">
  hello world
</div>
  </h1>
  <!-- button 按钮 -->
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <!-- 单元格 -->
  <van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
<!-- <ToDo></ToDo> -->
   </div>
</template>
<script>
// import ToDo from './components/ToDo.vue'
export default {
  name: 'App'
  // components: { ToDo }
}
</script>

<style lang="less">
.box{
  height: 200px;
  width: 200px;
  background-color: pink;
}
</style>
