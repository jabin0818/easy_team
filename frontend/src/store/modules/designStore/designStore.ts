import { defineStore } from 'pinia'
import { themeName } from '@/settings/designSetting'
import { DesignStateType } from './designStore.d'
import { setLocalStorage, getLocalStorage } from '@/utils'
import { StorageEnum } from '@/enums/storageEnum'
import { ThemeEnum } from '@/enums/styleEnum'

const { TEAM_DESIGN_STORE } = StorageEnum

const storageDesign = getLocalStorage(TEAM_DESIGN_STORE)
export const useDesignStore = defineStore({
  id: 'useDesignStore',
  state: (): DesignStateType => ({
    // 主题名称
    themeName: storageDesign || (themeName && ThemeEnum.LIGHT) || ThemeEnum.DARK
  }),
  getters: {},
  actions: {
    // 切换主题
    changeTheme(): void {
      this.themeName = this.themeName === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT
      setLocalStorage(TEAM_DESIGN_STORE, this.$state.themeName)
    }
  }
})
