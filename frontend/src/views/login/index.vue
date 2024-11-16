<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { routerTurnByName } from '@/utils'
import { PageEnum } from '@/enums/pageEnum'

// 国际化
const t = window['$t']

const schema = yup.object({
  account: yup
    .string()
    .required(t('global.form_account_req'))
    .min(3, t('global.form_account_min', { num: '3' }))
    .max(50, t('global.form_account_max', { num: '50' })),
  password: yup
    .string()
    .required(t('global.form_psd_req'))
    .min(6, t('global.form_psd_min', { num: '6' }))
    .max(20, t('global.form_psd_max', { num: '20' }))
})

const { values, errors, handleSubmit, isSubmitting, defineInputBinds } = useForm({
  validationSchema: schema
  // initialValues: {
  //   account: '1353115324@qq.com',
  //   password: '123456'
  // }
})

const onSubmit = handleSubmit((values, { resetForm }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resetForm()
      console.log('Submitted', JSON.stringify(values, null, 2))
      resolve()
    }, 2000)
  })
})

const account = defineInputBinds('account')

const password = defineInputBinds('password')

const eyeOpen = ref(false)

function handleChangeInputType() {
  eyeOpen.value = !eyeOpen.value
}

function goRegister() {
  routerTurnByName(PageEnum.BASE_REGISTER_NAME)
}
</script>
<template>
  <!-- 登录 -->
  <div class="flex h-screen items-center justify-center">
    <div class="mx-auto my-10 w-96 rounded-xl bg-white p-8 shadow shadow-slate-300">
      <div class="mb-8 flex justify-center">
        <img
          class="w-24"
          src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
          alt=""
        />
      </div>
      <form @submit="onSubmit">
        <div class="flex flex-col rounded-md text-sm">
          <div class="mb-5">
            <input
              v-bind="account"
              type="text"
              :placeholder="$t('global.form_account')"
              class="input input-bordered w-full max-w-xs outline-none transition-all focus:outline-none"
              :class="[
                errors.account
                  ? 'border-error'
                  : 'hover:border-primary focus:border-primary focus:ring-1 focus:ring-sky-500'
              ]"
            />
            <div class="text-error">{{ errors.account }}</div>
          </div>
          <div>
            <div class="relative">
              <input
                v-bind="password"
                :type="eyeOpen ? 'text' : 'password'"
                :placeholder="$t('global.form_password')"
                class="input input-bordered w-full max-w-xs pr-12 outline-none transition-all focus:outline-none"
                :class="[
                  errors.password
                    ? 'border-error'
                    : 'hover:border-primary focus:border-primary focus:ring-1 focus:ring-sky-500'
                ]"
              />
              <i
                class="fa-regular absolute right-4 top-1/2 w-5 -translate-y-2/4 cursor-pointer select-none text-center"
                :class="[eyeOpen ? 'fa-eye' : 'fa-eye-slash']"
                @click="handleChangeInputType"
              ></i>
            </div>
            <div class="text-error">{{ errors.password }}</div>
          </div>
        </div>
        <button class="btn btn-neutral mt-5 w-full">{{ isSubmitting ? '登录中...' : '登录' }}</button>
      </form>
      <div class="mt-5 flex justify-between text-sm text-gray-600">
        <div>
          <label for="remember" class="flex">
            <input type="checkbox" id="remember" class="checkbox checkbox-sm mr-2" />
            <!-- Remember me -->
            {{ $t('global.form_remember_me') }}
          </label>
        </div>
        <div>
          <a href="#" class="font-medium text-primary">
            <!-- Forgot Password? -->
            {{ $t('global.form_forgot_password') }}
          </a>
          <!-- <a href="#">Sign up</a> -->
        </div>
      </div>
      <div class="mt-5 flex justify-center text-sm">
        <p class="text-gray-400">使用其它方式登录</p>
      </div>
      <div class="mt-5 flex justify-center gap-4">
        <div class="cursor-pointer">
          <i class="fa-brands fa-weixin hover:text-primary"></i>
        </div>
        <div class="cursor-pointer">
          <i class="fa-brands fa-qq hover:text-primary"></i>
        </div>
        <div class="cursor-pointer">
          <i class="fa-brands fa-github hover:text-primary"></i>
        </div>
        <div class="cursor-pointer">
          <i class="fa-brands fa-weibo hover:text-primary"></i>
        </div>
      </div>
      <div class="mt-5 flex text-center text-sm text-gray-400">
        <p class="w-full text-center">
          还没有账号?
          <a href="javascript:;" class="inline-flex items-center space-x-1 font-medium text-primary" @click="goRegister"
            ><span>立马注册一个 </span>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                /></svg></span
          ></a>
        </p>
      </div>
    </div>
  </div>
</template>
