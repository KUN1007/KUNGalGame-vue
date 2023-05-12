// KUNGalgame 设置面板的 store
import { ref } from 'vue'
import { defineStore } from 'pinia'
import kungalgameSettings from '@/config/setting-panel'

export const useSettingsPanelStore = defineStore('settings', () => {
  const showSettings = ref<boolean>(kungalgameSettings.showSettings)
  const showDarkMode = ref<boolean>(kungalgameSettings.showDarkMode)
  const pageWidth = ref<number>(kungalgameSettings.pageWidth)
  const kungalgameBackground = ref<number>(
    kungalgameSettings.kungalgameBackground
  )
  const fixLoli = ref<boolean>(kungalgameSettings.fixLoli)

  return {
    showSettings,
    showDarkMode,
    pageWidth,
    kungalgameBackground,
    fixLoli,
  }
})
