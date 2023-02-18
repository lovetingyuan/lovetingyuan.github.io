import { ref } from 'vue'

export const hasUpdate = ref<boolean | (() => void)>(false)
