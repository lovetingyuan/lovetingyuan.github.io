function permuteUnique(nums) {
  const result = []
  const currentPermutation = []

  nums.sort((a, b) => a - b) // 对数组进行排序，确保重复数字相邻

  function generatePermutations() {
    if (currentPermutation.length === nums.length) {
      result.push(currentPermutation.map((index) => nums[index])) // 将当前排列加入结果数组
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (
        currentPermutation.includes(i) ||
        (i > 0 && nums[i] === nums[i - 1] && !currentPermutation.includes(i - 1))
      ) {
        continue
      }

      currentPermutation.push(i) // 将当前下标添加到当前排列中

      generatePermutations() // 递归生成下一个数字

      currentPermutation.pop() // 移除当前排列的最后一个下标
    }
  }

  generatePermutations()
  return result
}
function permuteUnique2(nums) {
  const result = []
  const stack = []
  const used = new Array(nums.length).fill(false)
  let currentPermutation = []
  let i = 0

  nums.sort((a, b) => a - b) // 对数组进行排序，确保重复数字相邻

  while (true) {
    if (!used[i]) {
      stack.push(i)
      currentPermutation.push(nums[i])
      used[i] = true

      if (stack.length === nums.length) {
        result.push([...currentPermutation]) // 将当前排列加入结果数组
      } else {
        i = 0
        continue
      }
    }

    if (i === nums.length - 1 && stack.length > 0) {
      const lastUsedIndex = stack.pop()
      used[lastUsedIndex] = false
      currentPermutation.pop()
      i = lastUsedIndex + 1
    } else {
      i++
    }

    if (stack.length === 0) {
      break
    }
  }

  return result
}

const nums = [1, 2, 2]
const permutations = permuteUnique2(nums)
console.log(permutations)
