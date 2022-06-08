function waitFor(condition, callback, timeout) {
  const timerCallback = () => {
    const ready = condition()
    if (ready) {
      callback(ready)
      clearInterval(timer)
    }
  }
  const timer = setInterval(timerCallback, 1000)
  setTimeout(timerCallback)
  if (timeout) {
    setTimeout(() => {
      clearInterval(timer)
    }, timeout)
  }
}

function onUrlChange(url, callback) {
  if (typeof url === 'function') {
    callback = url
    url = null
  }
  let pathname = ''
  const main = () => {
    if (pathname !== location.pathname) {
      pathname = location.pathname
      if (!url || url.test(pathname)) {
        callback(pathname)
      }
    }
  }
  setInterval(main, 1000)
  main()
}

function waitForDom(selector, callback, timeout) {
  waitFor(
    () => {
      return document.querySelector(selector)
    },
    callback,
    timeout
  )
}

function loadScript(url) {
  const script = document.createElement('script')
  script.src = url
  script.setAttribute('crossorigin', 'anonymous')
  document.head.appendChild(script)
  return new Promise((resolve, reject) => {
    script.onload = resolve
    script.onerror = reject
  })
}

function scheduleTasks(tasks, maxNum) {
  return new Promise((resolve) => {
    let [current, finished] = [0, 0]
    const total = tasks.length
    const doTask = () => {
      tasks[current++]?.().finally(() => {
        ++finished === total ? resolve() : doTask()
      })
    }
    while (maxNum-- > 0) doTask()
  })
}

function injectStyle(css) {
  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)
}

function post(url, payload) {
  return fetch(url, {
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  }).then((r) => r.json())
}

function h(tag, props, children = []) {
  const element = document.createElement(tag)
  if (props) {
    for (let key in props) {
      if (typeof props[key] === 'function') {
        element.addEventListener(key, props[key])
      } else {
        element.setAttribute(key, props[key])
      }
    }
  }
  if (typeof children === 'string') {
    element.innerHTML = children
  }
  if (Array.isArray(children)) {
    for (let child of children) {
      element.appendChild(child)
    }
  }
  element.mount = function (selector) {
    if (typeof selector === 'string') {
      if (document[selector]) {
        document[selector].appendChild(this)
      } else {
        document.querySelector(selector).appendChild(this)
      }
    } else {
      selector.appendChild(this)
    }
    return this
  }
  return element
}

window.ty = {
  waitFor,
  waitForDom,
  onUrlChange,
  loadScript,
  injectStyle,
  scheduleTasks,
  post,
  h,
}
