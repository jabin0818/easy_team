<script setup lang="ts">
import LayoutHeader from '@/layout/components/LayoutHeader/index.vue'
import DashboardLayoutMain from './layout/components/DashboardLayoutMain/index.vue'
import DashboardLayoutSider from './layout/components/DashboardLayoutSider/index.vue'
</script>

<template>
  <LayoutHeader></LayoutHeader>
  <div class="flex">
    <DashboardLayoutSider></DashboardLayoutSider>
    <DashboardLayoutMain></DashboardLayoutMain>
  </div>
</template>
