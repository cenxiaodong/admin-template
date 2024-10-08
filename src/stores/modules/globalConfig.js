import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalConfigStore = defineStore(
  'globalConfig',
  () => {
    // 菜单栏折叠字段
    const collapsed = ref(false)
    // 切换状态
    function toggle(state) {
      collapsed.value = !collapsed.value
    }
    return { collapsed, toggle }
  },
  {
    // persist: true
  }
)
