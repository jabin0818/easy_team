<script lang="ts" setup>
import CreateModal from '@/components/CreateModal/index.vue'
import { ref, getCurrentInstance } from 'vue'
const createModal = ref(null)
const cns = getCurrentInstance()

function showModal() {
  cns.appContext.config.globalProperties.$message({
    message: '登录成功',
    type: 'info'
    // duration: 0
  })
  // createModal.value && createModal.value.showModal()
}
</script>
<template>
  <aside class="h-[1000px] w-[400px] bg-white p-4">
    <div>
      <button class="btn btn-primary" @click="showModal">Button</button>
    </div>
    <div>
      <ul class="menu rounded-box bg-base-200 lg:menu-horizontal">
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Inbox
            <span class="badge badge-sm">99+</span>
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Updates
            <span class="badge badge-warning badge-sm">NEW</span>
          </a>
        </li>
        <li>
          <a>
            Stats
            <span class="badge badge-info badge-xs"></span>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="steps steps-vertical">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose plan</li>
        <li class="step">Purchase</li>
        <li class="step">Receive Product</li>
      </ul>
    </div>
  </aside>
  <CreateModal ref="createModal"></CreateModal>
</template>
