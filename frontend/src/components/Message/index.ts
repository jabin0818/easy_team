import { createVNode, render } from 'vue'
// import { debugWarn, isClient, isElement, isFunction, isNumber, isString, isVNode } from '@element-plus/utils'
// import { messageConfig } from '@element-plus/components/config-provider'
import MessageConstructor from './index.vue'
// import { messageDefaults, messageTypes } from './message'
import { instances } from './instance'

// import type { MessageContext } from './instance'
import type { AppContext } from 'vue'
// import type {
//   Message,
//   MessageFn,
//   MessageHandler,
//   MessageOptions,
//   MessageParams,
//   MessageParamsNormalized,
//   messageType
// } from './message'

let seed = 1

export const messageTypes = ['success', 'info', 'warning', 'error'] as const

// 标准化配置
// const normalizeOptions = (params?: MessageParams) => {
//   const options: MessageOptions =
//     !params || isString(params) || isVNode(params) || isFunction(params) ? { message: params } : params

//   const normalized = {
//     ...messageDefaults,
//     ...options
//   }

//   if (!normalized.appendTo) {
//     normalized.appendTo = document.body
//   } else if (isString(normalized.appendTo)) {
//     let appendTo = document.querySelector<HTMLElement>(normalized.appendTo)

//     // should fallback to default value with a warning
//     if (!isElement(appendTo)) {
//       debugWarn('ElMessage', 'the appendTo option is not an HTMLElement. Falling back to document.body.')
//       appendTo = document.body
//     }

//     normalized.appendTo = appendTo
//   }

//   return normalized as MessageParamsNormalized
// }

const closeMessage = (instance) => {
  const idx = instances.indexOf(instance)
  if (idx === -1) return

  instances.splice(idx, 1)
  const { handler } = instance
  handler.close()
}

const createMessage = ({ ...options }, context?: AppContext | null) => {
  const id = `message_${seed++}`
  const userOnClose = options.onClose

  const container = document.createElement('div')

  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose?.()
      closeMessage(instance)
    },

    // 清除消息元素以防止mem泄漏
    onDestroy: () => {
      render(null, container)
    }
  }
  const vnode = createVNode(MessageConstructor, props, { default: () => props.message })
  vnode.appContext = context || message._context
  render(vnode, container)
  // 当调用close函数时，实例将删除此项
  document.body.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  const handler = {
    // 与其直接调用onClose函数，不如设置该值，以便我们可以拥有完整的生命周期
    // 对于out组件，这样就不会跳过所有关闭步骤。
    close: () => {
      vm.exposed!.visible.value = false
    }
  }

  const instance = {
    id,
    vnode,
    vm,
    handler,
    props: (vnode.component as any).props
  }

  return instance
}

const message = (options = {}, context) => {
  //   const normalized = normalizeOptions(options)

  const instance = createMessage(options, context)

  instances.push(instance)
  return instance.handler
}

messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    return message({ ...options, type }, appContext)
  }
})

export function closeAll(type?: messageType): void {
  for (const instance of instances) {
    if (!type || type === instance.props.type) {
      instance.handler.close()
    }
  }
}

message.closeAll = closeAll
message._context = null

export default message
