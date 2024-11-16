<script setup lang="ts">
import Message from '@/components/Noice/index.vue'
import { ref } from 'vue'
import { useLangStore } from '@/store/modules/langStore/langStore'
import { LangEnum } from '@/enums/styleEnum'
import { useI18n } from 'vue-i18n'
import { StorageEnum } from '@/enums/storageEnum'
import { useDesignStore } from '@/store/modules/designStore/designStore'
import { setHtmlTheme } from '@/utils'
import { ThemeEnum } from '@/enums/styleEnum'

const designStore = useDesignStore()

const { TEAM_DESIGN_STORE } = StorageEnum

const langStore = useLangStore()
const { locale } = useI18n()

const visible = ref(false)
function changeVisible() {
  visible.value = false
}
const handleSelect = (key: LangEnum) => {
  locale.value = key
  langStore.changeLang(key)
}

function changeTheme(): void {
  designStore.changeTheme()
  setHtmlTheme()
}
</script>
<template>
  <div class="navbar border-b border-base-300 bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl normal-case">daisyUI</a>
      <div class="hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li tabindex="0">
            <details>
              <summary>Parent</summary>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end gap-2">
      <!-- 搜索框 -->
      <div class="form-control relative w-80">
        <input
          id="search"
          type="text"
          :placeholder="$t('global.search')"
          class="input input-bordered pl-12 md:w-auto"
        />
        <label for="search">
          <i
            class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 w-5 -translate-y-2/4 select-none text-center"
          ></i>
        </label>
      </div>
      <!-- 消息通知 -->
      <button
        class="btn btn-circle btn-ghost"
        @click="
          () => {
            visible = !visible
          }
        "
      >
        <div class="indicator">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg> -->
          <i class="fa-regular fa-bell h-5 w-5 text-xl"></i>
          <span class="badge indicator-item badge-primary badge-xs"></span>
        </div>
      </button>
      <!-- 主题切换 -->
      <button class="btn btn-circle btn-ghost" @click="changeTheme">
        <label class="swap-active swap-rotate swap h-full w-full">
          <i
            class="fa-regular fa-sun h-5 w-5 text-xl"
            :class="[designStore.themeName === ThemeEnum.LIGHT ? 'swap-off' : 'swap-on']"
          ></i>
          <i
            class="fa-regular fa-moon h-5 w-5 text-xl"
            :data-n="designStore.themeName"
            :class="[designStore.themeName === ThemeEnum.LIGHT ? 'swap-on' : 'swap-off']"
          ></i>
        </label>
      </button>
      <!-- 多语言 -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-circle btn-ghost m-1">
          <i class="fa-solid fa-language text-xl"></i>
        </label>
        <ul tabindex="0" class="menu dropdown-content rounded-box z-[100] mt-3 w-52 bg-base-100 p-2 shadow">
          <li>
            <a @click="handleSelect(LangEnum.ZH)">
              <span
                class="badge badge-outline badge-sm !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                >ZH</span
              >
              简体中文
            </a>
          </li>
          <li>
            <a @click="handleSelect(LangEnum.ZH)">
              <span
                class="badge badge-outline badge-sm !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                >ZH</span
              >
              繁體中文
            </a>
          </li>
          <li>
            <a @click="handleSelect(LangEnum.EN)">
              <span
                class="badge badge-outline badge-sm !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                >EN</span
              >
              English
            </a>
          </li>
        </ul>
      </div>
      <!-- 用户头像 -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="avatar btn btn-circle btn-ghost m-1">
          <div class="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul tabindex="0" class="menu dropdown-content rounded-box menu-sm z-[100] mt-3 w-52 bg-base-100 p-2 shadow">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  <Message :visible="visible" @changeVisible="changeVisible"></Message>
</template>
