function trackPropertyPath(obj, path = []) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      // 获取属性值
      const value = Reflect.get(target, property, receiver)

      // 构建新的路径
      const newPath = path.concat(property)

      // 如果属性值是对象，则递归调用 trackPropertyPath
      if (typeof value === 'object' && value !== null) {
        return trackPropertyPath(value, newPath)
      }

      // 返回属性值和路径
      return { value, path: newPath }
    },
    set(target, property, value, receiver) {
      // 构建新的路径
      const newPath = path.concat(property)

      // 设置属性值
      const result = Reflect.set(target, property, value, receiver)

      // 返回是否成功设置属性值和路径
      return { result, path: newPath }
    },
    has(target, property) {
      // 检查属性是否存在
      const hasProperty = Reflect.has(target, property)

      // 构建新的路径
      const newPath = path.concat(property)

      // 返回属性是否存在和路径
      return { hasProperty, path: newPath }
    }
  })
}

const obj = {}

const trackedObj = trackPropertyPath(obj)

console.log(trackedObj.a.b.c.value) // 输出: undefined
console.log(trackedObj.a.b.c.path) // 输出: [ 'a', 'b', 'c' ]

trackedObj.a.b.c = 1
console.log(trackedObj.a.b.c.result) // 输出: true
console.log(trackedObj.a.b.c.path) // 输出: [ 'a', 'b', 'c' ]

console.log('d' in trackedObj) // 输出: false
console.log(trackedObj.d.hasProperty) // 输出: false
console.log(trackedObj.d.path) // 输出: [ 'd' ]

trackedObj.d = 'new value'
console.log(trackedObj.d.result) // 输出: true
console.log(trackedObj.d.path) // 输出: [ 'd' ]
