<script lang="ts" setup>
import { computed, onMounted, ref, watch, PropType } from 'vue'
import { useEventListener, useResizeObserver, useTimeoutFn } from '@vueuse/core'
import { getLastOffset, getOffsetOrSpace } from './instance'

defineOptions({
  name: 'Alert'
})

const props = defineProps({
  // id，不可自定义，只用于计算top值
  id: {
    type: String,
    default: ''
  },
  // 是否将文本居中
  center: {
    type: Boolean,
    default: false
  },
  // 显示持续时间，毫秒。如果设置为0，则不会自动关闭
  duration: {
    type: Number,
    default: 3000
  },
  // 自定义图标组件类名，覆盖`type`
  icon: {
    type: String,
    default: ''
  },
  // 消息文本
  message: {
    type: String,
    default: '',
    required: true
  },
  // 关闭警告提示的回调
  onClose: {
    type: Function,
    default() {
      return 'close'
    }
  },
  // 是否显示关闭按钮
  showClose: {
    type: Boolean,
    default: false
  },
  // 关闭按钮文本
  closeText: {
    type: String,
    default: 'close'
  },
  // 是否显示确认按钮
  showConfirm: {
    type: Boolean,
    default: false
  },
  // 确认按钮文本
  confirmText: {
    type: String,
    default: 'confirm'
  },
  // 类型
  type: {
    type: String as PropType<'success' | 'error' | 'warning' | 'info' | 'loading'>,
    default: 'info'
  },
  // 设置到视口顶部的距离
  offset: {
    type: Number,
    default: 16
  }
})
const visible = ref(false)

// 用于计算lastOffset
const height = ref(0)

let stopTimer: (() => void) | undefined = undefined

const messageRef = ref<HTMLDivElement>()

const typeClassMap = {
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
  info: 'alert-info',
  loading: 'alert-loading'
}
const typeIconMap = {
  success: 'fa-circle-check',
  warning: 'fa-triangle-exclamation',
  error: 'fa-circle-xmark',
  info: 'fa-circle-info',
  loading: 'fa-loading'
}

const typeClass = computed(() => {
  const type = props.type
  return typeClassMap[type]
})

const typeIcon = computed(() => {
  const type = props.type
  return typeIconMap[type]
})
const lastOffset = computed(() => getLastOffset(props.id))
// 用于计算lastOffset
const bottom = computed((): number => height.value + offset.value)

const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value)

const customStyle = computed(() => ({
  top: `${offset.value}px`
}))
function startTimer() {
  if (props.duration === 0) return
  ;({ stop: stopTimer } = useTimeoutFn(() => {
    close()
  }, props.duration))
}

function clearTimer() {
  stopTimer?.()
}

function close() {
  visible.value = false
}

onMounted(() => {
  startTimer()
  //   nextZIndex()
  visible.value = true
})

useResizeObserver(messageRef, () => {
  height.value = messageRef.value!.getBoundingClientRect().height
})

defineExpose({
  visible,
  bottom,
  close
})
</script>

<template>
  <transition name="message-fade" @before-leave="onClose" @after-leave="$emit('destroy')">
    <div
      class="fixed left-1/2 top-2 z-[1000] -translate-x-1/2 [transition:opacity_0.3s,transform_0.4s,top_0.4s]"
      :style="customStyle"
      v-show="visible"
      :id="id"
      ref="messageRef"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="alert" :class="[typeClass]">
        <i class="fa-regular" :class="[typeIcon]"></i>
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>{{ props.message }}</span>
        <div>
          <button class="btn btn-sm">Deny</button>
          <button class="btn btn-primary btn-sm">Accept</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
