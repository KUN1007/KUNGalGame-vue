<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <!-- 单个帖子 -->
  <div class="single-topic">
    <!-- 帖子的名字 -->
    <div class="topic-name">
      啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
    </div>
    <!-- 帖子的其它信息 -->
    <div class="v-l-c-t">
      <!-- 浏览数 -->
      <span><Icon icon="ic:outline-remove-red-eye" />1007</span>
      <!-- 点赞数 -->
      <span><Icon icon="line-md:thumbs-up-twotone" />1007</span>
      <!-- 评论数 -->
      <span><Icon icon="fa-regular:comment-dots" />1007</span>
      <!-- 推贴数 -->
      <span><Icon icon="bi:rocket" />1007</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 单个帖子 */
.single-topic {
  flex-shrink: 0;
  height: 37px;
  border-bottom: 1px solid var(--kungalgame-blue-4);
  margin: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 帖子的名字 */
.topic-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 帖子的其它信息 */
.v-l-c-t {
  flex-shrink: 0;
}
/* 版权 */
.copyright {
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
