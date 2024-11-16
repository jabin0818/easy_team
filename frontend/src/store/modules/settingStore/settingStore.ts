import { defineStore } from 'pinia'
import { themeName } from '@/settings/designSetting'
import { SettingStateType } from './settingStore.d'
import { setLocalStorage, getLocalStorage } from '@/utils'
import { StorageEnum } from '@/enums/storageEnum'
import { ThemeEnum } from '@/enums/styleEnum'

const { TEAM_DESIGN_STORE } = StorageEnum

const storageDesign = getLocalStorage(TEAM_DESIGN_STORE)
export const useSettingStore = defineStore({
  id: 'useSettingStore',
  state: (): SettingStateType =>
    storageDesign || {
      // 主题名称
      themeName: (themeName && ThemeEnum.DARK) || ThemeEnum.LIGHT
    },
  getters: {},
  actions: {
    // 切换主题
    changeTheme(): void {
      this.themeName = this.themeName === ThemeEnum.DARK ? ThemeEnum.DARK : ThemeEnum.LIGHT
      // setLocalStorage(TEAM_DESIGN_STORE, this.$state)
    }
  }
})
