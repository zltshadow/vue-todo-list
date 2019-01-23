<template>
  <section class="container">
    <!--最外层容器-->
    <section class="menu">
      <!--左边的容器 里面加上组件 menus-->
      <menus></menus> <!-- * -->
    </section>
    <section class="content-container">
      <!--右边的容器 里面加上组件 todo-->
      <todo></todo>
    </section>
  </section>
</template>
<script>
import menus from './menus'
import todo from './todo'
export default {
  components: {
    menus, // 菜单
    todo // 待办
  }
}
</script>
<style lang="less">
@import "../common/style/layouts.less";
</style>
