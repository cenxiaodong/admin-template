<script setup>
// 菜单切换开关
import CollapseToggle from './components/CollapseToggle.vue'
// 面包屑
import Breadcrumb from './components/Breadcrumb.vue'
import { AntdIcon } from '@/utils/antdIcon'
</script>
<template>
  <a-layout-header>
    <div class="header-left">
      <CollapseToggle />
      <Breadcrumb />
    </div>
    <div class="header-right">
      <a-avatar style="background-color: #87d068">
        <template #icon>
          <AntdIcon icon="UserOutlined"></AntdIcon>
        </template>
      </a-avatar>
    </div>
  </a-layout-header>
</template>
<style lang="scss" scoped></style>
