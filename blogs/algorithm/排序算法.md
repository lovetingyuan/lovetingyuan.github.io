[comment]: <algorithm> (title: '快排，堆排和归并排序', keywords: '快速排序，优先队列，大根堆', date: '2020-7-30')

## 快排，堆排，归并排序

>  关于算法的js实现可以参考[javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md)，这里面有相当丰富的基于JavaScript的数据结构和算法实现。

| 排序算法 | 平均时间复杂度 |	最坏时间复杂度 | 空间复杂度 | 是否稳定 |
| ---- | ---- | ---- | ---- | ---- | 
| 冒泡排序 | O（n2）| O（n2）| O（1） | 是 |
| 选择排序 | 	O（n2） | 	O（n2） | 	O（1）	 | 不是  |
| 直接插入排序 | 	O（n2） | 	O（n2） | 	O（1） | 	是 |
| 归并排序 | 	O(nlogn) | 	O(nlogn) | 	O（n） | 	是 |
| 快速排序	 | O(nlogn) | 	O（n2） | 	O（logn） | 	不是 |
| 堆排序 | 	O(nlogn) | 	O(nlogn)	| O（1） | 	不是 |
| 希尔排序 | 	O(nlogn) | 	O（ns） | 	O（1） | 	不是 |
| 计数排序 | 	O(n+k)	 | O(n+k) | 	O(n+k) | 	是 |
| 基数排序 | 	O(N∗M) | 	O(N∗M) | 	O(M) | 	是 |

快排，堆排，归并排序是众多排序算法里时间复杂度和空间复杂度比较好的三种，它们的时间复杂度都是O(nlogn)。

其中归并排序的空间复杂度对数组来讲是On，可以通过“手摇算法”降为O（1），但会增加运行时间；对链表则是Ologn，可以通过递归改循环降低为O（1）。

快排和归并排序都是分治算法的典型应用，堆排序是优先队列的一种应用。

其中快排的实际性能表现通常是最好的，但如果原本数据就比较有序那么快排的时间复杂度会退化，这种情况可以采用随机化选取标定值的方法规避。

下面是用JS实现的三种排序算法代码：

* 快速排序

```javascript
// 这是个递归的过程，每次我们选一个元素作为标定值
// 然后一次遍历使得所有小于标定值的元素都位于它的左边，大于它的值位于它的右边
// 上面这个过程是快排的核心，通常有三种方式可以实现：首尾指针、前后指针、挖坑法
// 然后递归左右两个子数组进行上面的过程，这里采用了原地算法

// 首尾指针法
function quickSort (array, startIndex = 0, endIndex = array.length - 1) {
  if (endIndex <= startIndex) return array
  const target = array[startIndex] // 选第一个值作为标定值，也可以选最后的值
  let left = startIndex, right = endIndex
  while (left < right) {
    // right指针找到第一个小于标定值的值，left指针找到第一个大于标定值的值然后交换
    if (array[left] > target && array[right] < target) {
      [array[left], array[right]] = [array[right], array[left]]
    } else {
      // 注意这里一定要先判断右边的指针，因为选了最左边的作为标定值
      array[right] >= target ? right-- : left++
    }
  }
  [array[left], array[startIndex]] = [target, array[left]]
  quickSort(array, startIndex, left - 1)
  quickSort(array, left + 1, endIndex)
  return array
}

// 前后指针法
function quickSort (array, startIndex = 0, endIndex = array.length - 1) {
  if (endIndex <= startIndex) return array
  const target = array[endIndex] // 选最后边的值作为标定值，也可以选第一个
  let j = startIndex // j表示等待交换的位置
  for (let i = startIndex; i <= endIndex; i++) {
    if (array[i] <= target) { // 如果遇到比标定值小或等于的值就与j处的元素交换并且j + 1
      [array[i], array[j]] = [array[j], array[i]]
      j++
    }
  }
  quickSort(array, startIndex, j - 2)
  quickSort(array, j, endIndex)
  return array
}
```

* 堆排序

```javascript
// 首先要将数组构造成大/小根堆，根节点为最大值或最小值的二叉树结构
// 然后依次取根节点和末尾节点交换，交换之后需要保持当前的数组依旧是堆
var maxheapsort = (list) => {
  // maxheapit 用来使以某个节点为根节点的子树成为大根堆
  const maxheapit = (parentindex, heapsize) => {
    const leftindex = parentindex * 2 + 1
    const rightindex = leftindex + 1
    // 比较父节点，左右子节点这三个，选最大的那个作为新的父节点
    // 如果是子节点做了父节点，那么就要继续维护那个子节点成为堆
    let maxindex = leftindex < heapsize && list[leftindex] > list[parentindex] ? leftindex : parentindex
    maxindex = rightindex < heapsize && list[rightindex] > list[maxindex] ? rightindex : maxindex
    if (maxindex !== parentindex) {
      [list[parentindex], list[maxindex]] = [list[maxindex], list[parentindex]]
      maxheapit(maxindex, heapsize)
    }
  }
  let heapsize = list.length
  // 自底向上构造大根堆，就从最后的父节点开始向前遍历
  for (let i = Math.floor(list.length / 2) - 1; i >= 0; i--) {
    maxheapit(i, heapsize)
  }
  // 依次交换根节点到首位，然后维护大根堆性质
  for (let i = heapsize - 1; i >= 0; i--) {
    [list[i], list[0]] = [list[0], list[i]]
    maxheapit(0, --heapsize)
  }
  return list
}
```

* 归并排序

```javascript
// 同样是递归的过程，把数组分成左右两列分别归并排序
// 然后合并左右两个有序数组为新的数组并返回
function mergeSort (array, start = 0, end = array.length - 1) {
  if (array.length <= 1) return array
  if (end === start) return [array[start]]
  const middle = Math.floor((end - start) / 2) + start
  const left = mergeSort(array, start, middle)
  const right = mergeSort(array, middle + 1, end)
  const merged = []
  let i = 0, j = 0
  while (i < left.length || j < right.length) {
    if (i < left.length && j < right.length) {
      merged.push(left[i] > right[j] ? right[j++] : left[i++])
    } else {
      merged.push(i < left.length ? left[i++] : right[j++])
    }
  }
  return merged
}
```

由于递归在运行中有其自身的切换、调用以及栈空间开销，所以我们还可以用非递归的形式实现上面的归并排序算法（前提是算法本身能比较容易的将递归改为循环迭代并且不会对代码可读性产生太大的影响）

```javascript
// 循环的形式实现归并排序，此时我们需要按照“自底向上”的方向求解问题
function mergeSort(array) {
  const length = array.length
  let i = 0, len = 1, merged = [] // len维护每次的合并区间长度
  while (len < length) {
    while (i < length) {
      let [a, b, c, d] = [i, i + len, i + len, i + len * 2]
      if (b >= length) c = b = length - 1
      if (d > length) d = length
      while (a < b || c < d) {
        if (a < b && c < d) {
          merged[i++] = array[a] < array[c] ? array[a++] : array[c++]
        } else {
          merged[i++] = a < b ? array[a++] : array[c++]
        }
      }
    }
    [array, merged] = [merged, array] // 这里只使用了一个On的额外数组
    len = len * 2, i = 0
  }
  return array
}
```
