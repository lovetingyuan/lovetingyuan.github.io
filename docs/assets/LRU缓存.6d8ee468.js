var n=`<p>\u4E3B\u8981\u662F\u5FC5\u987B\u4F7F\u7528\u53CC\u6307\u9488\u94FE\u8868\uFF0C\u8FD9\u4E2A\u662F\u5173\u952E</p>
<pre><code class="language-js">/**
 * lru
 */
var ListNode = function (key, value) {
  this.key = key
  this.value = value
  this.next = null
  this.prev = null
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.cache = {}
  this.count = 0
  this.head = new ListNode()
  this.tail = new ListNode()
  this.head.next = this.tail
  this.tail.prev = this.head
}

LRUCache.prototype._insertToHead = function (node) {
  const realHead = this.head.next
  this.head.next = node
  node.prev = this.head
  node.next = realHead
  realHead.prev = node
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (key in this.cache) {
    const node = this.cache[key]
    const { prev, next } = node
    prev.next = next
    next.prev = prev
    this._insertToHead(node)
    return node.value
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (key in this.cache) {
    this.cache[key].value = value
    this.get(key)
  } else {
    const node = new ListNode(key, value)
    this.cache[key] = node
    this._insertToHead(node)
    if (this.count &lt; this.capacity) {
      this.count += 1
    } else {
      const { prev, key } = this.tail.prev
      prev.next = this.tail
      this.tail.prev = prev
      delete this.cache[key]
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
</code></pre>
`;export{n as default};
