<script setup lang="ts">
import logo from '@/assets/logo.svg'
</script>

<template>
  <header class="header">
    <div class="logo">
      <img :src="logo" alt="Vue logo" />
    </div>
    <el-button>退出</el-button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
}

.logo {
  width: 40px;
  height: 34px;
}
</style>
