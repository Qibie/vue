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
  <mt-tabbar v-model="selected">
  <mt-tab-item id="index">
    <img slot="icon" src="./assets/logo.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="vip">
    <img slot="icon" src="./assets/vip.png">
    会员
  </mt-tab-item>
  <mt-tab-item id="shopcart">
    <img slot="icon" src="./assets/cart.png">
    购物车
  </mt-tab-item>
  <mt-tab-item id="search">
    <img slot="icon" src="./assets/search.png">
    查找
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      selected:''
    }
  }
}

</script>
<style>
*{
  padding:0;
  margin:0;
}
</style>
