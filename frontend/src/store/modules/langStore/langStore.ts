import { defineStore } from 'pinia'
// import { lang } from '@/settings/designSetting'
import { LangStateType } from './langStore.d'
import { LangEnum } from '@/enums/styleEnum'
import { setLocalStorage, getLocalStorage, reloadRoutePage } from '@/utils'
import { StorageEnum } from '@/enums/storageEnum'
// import { useSettingStore } from '@/store/modules/settingStore/settingStore'

const { TEAM_LANG_STORE } = StorageEnum
const storageLang: LangStateType = getLocalStorage(TEAM_LANG_STORE)

const lang = LangEnum.ZH

// 语言
export const useLangStore = defineStore({
  id: 'useLangStore',
  state: (): LangStateType =>
    storageLang || {
      lang
    },
  getters: {
    getLang(): LangEnum {
      return this.lang
    }
  },
  actions: {
    changeLang(lang: LangEnum): void {
      // const settingStore = useSettingStore()
      if (this.lang === lang) return
      this.lang = lang
      setLocalStorage(TEAM_LANG_STORE, this.$state)

      // if (settingStore.getChangeLangReload) {
      //   reloadRoutePage()
      // }
    }
  }
})
