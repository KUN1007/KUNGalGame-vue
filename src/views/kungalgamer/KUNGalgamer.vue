<script setup lang="ts">
// 导入左侧交互部分
import NavBar from './components/NavBar.vue'
// 导入头部
import Header from './components/Header.vue'
// 导入通用 Footer
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

// 导入请求函数
import { getSingleKUNGalgamerApi } from '@/api/kungalgamer/index'

getSingleKUNGalgamerApi(1).then((userData) => {
  console.log(userData)
})
</script>

<template>
  <div class="root">
    <!-- 信息区域容器 -->
    <div class="container">
      <Header />
      <!-- 内容区 -->
      <div class="content">
        <NavBar />
        <RouterView />
      </div>
    </div>
    <!-- 版权 -->
    <KUNGalgameFooter style="margin: 0 auto; padding-bottom: 17px" />
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
/* 页面头部 */
.container {
  /* 内容区占整个页面的比例 */
  width: 60%;
  height: 70%;
  /* 内容区的最大宽度和高度 */
  max-width: 1350px;
  max-width: 1200px;
  /* 背景色和边框阴影 */
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-4);
  box-shadow: var(--shadow);
  border-radius: 7px;
  /* 居中 */
  margin: auto;
  /* 竖直方向弹性盒 */
  display: flex;
  flex-direction: column;
  /* 用户页面的所有字体颜色 */
  color: var(--kungalgame-font-color-3);
}
.content {
  /* 使帖子不溢出 */
  height: 1px;
  flex-grow: 1;
  display: flex;
}
</style>
