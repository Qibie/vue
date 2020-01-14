<template>
  <div id="app">
    <!-- 顶部栏区域 -->
    <mt-header title="信息管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 路由组件的出口 -->
    <router-view />

    <!-- 顶部栏 -->
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
*{
  padding:0;
  margin:0;
}
</style>
