<template>
  <div class="my-5 flex flex-row items-center gap-10">
    <span>
      <a href="https://leetcode.cn/u/lovetingyua" target="_blank">主页</a>
      &
      <a href="https://leetcode.cn/problemset/algorithms/" target="_blank">题库</a>
      &
      <a href="https://doocs.github.io/leetcode/lc/1/" target="_blank">全解</a>
    </span>
    <div class="flex gap-4">
      <label>
        全部
        <input type="radio" name="status" v-model="status" value="all" />
      </label>
      <label>
        ✅({{ solvedCount }})
        <input type="radio" name="status" v-model="status" value="solved" />
      </label>
      <label>
        🤔
        <input type="radio" name="status" v-model="status" value="unsolved" />
      </label>
    </div>
    <div class="mr-16 flex gap-5">
      <label>
        全部
        <input type="radio" name="level" v-model="level" value="all" />
      </label>
      <label>
        <span class="text-[#00af9b]">简单 </span>
        <input type="radio" name="level" v-model="level" value="easy" />
      </label>
      <label>
        <span class="text-[#ffb800]">中等 </span>
        <input type="radio" name="level" v-model="level" value="medium" />
      </label>
      <label>
        <span class="text-[#ff2d55]">困难 </span>
        <input type="radio" name="level" v-model="level" value="hard" />
      </label>
    </div>
  </div>
  <div data-leetcode-problems-filter v-html="css"></div>
</template>

<script setup>
import { nextTick, ref, watchEffect } from 'vue'
const status = ref('all')
const level = ref('all')
const css = ref('')
const solvedCount = ref(0)
watchEffect(() => {
  const styles = [
    '[data-leetcode-problems-filter] + table tr:has([data-status="solved"]) { background-color: #cfffe5; }',
    '[data-leetcode-problems-filter] + table [data-level] { font-weight: bold }'
  ]
  if (status.value === 'solved') {
    styles.push(
      '[data-leetcode-problems-filter] + table tr:has([data-status="unsolved"]) { display: none }'
    )
  } else if (status.value === 'unsolved') {
    styles.push(
      '[data-leetcode-problems-filter] + table tr:has([data-status="solved"]) { display: none }'
    )
  }
  const easy =
    '[data-leetcode-problems-filter] + table tr:has([data-level="easy"]) { display: none }'
  const medium =
    '[data-leetcode-problems-filter] + table tr:has([data-level="medium"]) { display: none }'
  const hard =
    '[data-leetcode-problems-filter] + table tr:has([data-level="hard"]) { display: none }'

  if (level.value === 'easy') {
    styles.push(medium, hard)
  } else if (level.value === 'medium') {
    styles.push(easy, hard)
  } else if (level.value === 'hard') {
    styles.push(easy, medium)
  }
  css.value = `<style>${styles.join('\n')}</style>`
  nextTick().then(() => {
    solvedCount.value = document.querySelectorAll(
      '[data-leetcode-problems-filter] + table [data-status="solved"]'
    ).length
  })
})
</script>
