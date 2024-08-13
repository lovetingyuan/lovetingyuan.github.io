export function generateColors(inputString: string) {
  // 生成字符串的哈希值
  function hashCode(str: string) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32bit integer
    }
    return Math.abs(hash)
  }

  // 将哈希值转换为HSL颜色
  function hashToHSL(hash: number, saturation: number, lightness: number) {
    const hue = hash % 360
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }

  const hash = hashCode(inputString)

  // 生成暗色（饱和度高，亮度低）
  const darkColor = hashToHSL(hash, 80, 25)

  // 生成亮色（饱和度略低，亮度高）
  const lightColor = hashToHSL(hash + 180, 70, 75)

  return [darkColor, lightColor]
}
