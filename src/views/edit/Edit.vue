<script setup lang="ts">
import { reactive, ref } from 'vue'
import WangEditor from '@/components/WangEditor.vue'
import Tags from './components/Tags.vue'
import Button from './components/Button.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

const emit = defineEmits(['tags', 'article'])

interface Topic {
  id: ''
  time: ''
  authorId: ''
}

const topicInfo = reactive({
  title: '',
  articleHtml: '',
  articleText: '',
  tags: [],
})

const submit = () => {
  // 在这里执行表单提交的逻辑，可以发送网络请求等操作
}
</script>

<template>
  <div class="root">
    <!-- 内容区容器 -->
    <form class="container" @submit.prevent="submit">
      <!-- 内容区容器 -->
      <div class="content">
        <!-- 内容区的头部 -->
        <div class="header">
          <!-- 帖子的标题 -->
          <div class="title">
            <input type="text" placeholder="请输入帖子的标题（40字以内）" />
          </div>
        </div>
        <!-- 编辑器 -->
        <WangEditor class="editor" />
      </div>

      <!-- 内容区的底部 -->
      <div class="content-footer">
        <Tags />

        <Button />
      </div>
    </form>
    <!-- 版权 -->
    <KUNGalgameFooter style="margin: 0 auto" />
    <span style="margin: 0 auto; color: var(--kungalgame-font-color-3)"
      >Editor powered by wangEditor</span
    >
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
}

.root {
  height: 100vh;
  min-height: 1200px;
  display: flex;
  flex-direction: column;
}

/* 内容部分的总容器 */
.container {
  width: 80%;
  max-width: 1500px;
  margin: 0 auto;
  /* 容器的阴影 */
  box-shadow: var(--shadow);
  background-color: var(--kungalgame-trans-white-2);
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-1);
  padding: 10px;
}

/* 容器的顶部 */
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 帖子的发布标题 */
.title {
  width: 100%;
}

/* 帖子标题的输入框 */
.title input {
  color: var(--kungalgame-font-color-2);
  /* 距离外轮廓的距离 */
  padding: 7px;
  /* 内边距盒子 */
  box-sizing: border-box;
  width: 100%;
  /* 标题输入字体大小 */
  font-size: 40px;
  border: 1px solid var(--kungalgame-blue-4);
  background-color: var(--kungalgame-white);
  margin-bottom: 10px;
}

/* 标题输入框 focus 之后的样式 */
.title input:focus {
  box-shadow: 0px 0px 5px var(--kungalgame-blue-4);
}

.content-footer {
  /* 距离内容区的距离 */
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 1000px) {
  .container {
    width: 100%;
  }
}
</style>
