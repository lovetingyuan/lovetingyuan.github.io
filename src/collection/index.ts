const collection = import.meta.glob<string>('./*.txt', {
  eager: true,
  query: '?raw',
  import: 'default'
})

const result: Record<string, { title: string; url: string; description?: string }[]> = {}

const lists = Object.keys(collection).sort((a, b) => {
  return parseInt(a) - parseInt(b)
})
for (const cate of lists) {
  const cate2 = cate.slice(2, -4)
  result[cate2] = collection[cate]
    .trim()
    .split('\n')
    .map((v) => {
      // eslint-disable-next-line prefer-const
      let [title, url] = v.split(': ').map((v) => v.trim())
      let description = ''
      if (title.includes('(')) {
        const [, title2, description2] = title.match(/(.+)\((.+)\)/) || []
        if (title2 && description2) {
          ;[title, description] = [title2, description2]
        }
      }
      return {
        title,
        url,
        description
      }
    })
}

export default result
