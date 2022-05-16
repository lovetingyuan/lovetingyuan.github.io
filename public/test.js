// ==UserScript==
// @name         更改leetcode题解代码字体
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://leetcode.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode-cn.com
// @grant        none
// @run-at       document-end
// ==/UserScript==
;(function () {
  'use strict'
  const waitFor = (callback, callback2, timeout) => {
    if (callback()) {
      callback2()
      return
    }
    let timer = setInterval(() => {
      if (callback()) {
        clearInterval(timer)
        callback2()
      }
    }, 500)
    if (timeout) {
      setTimeout(() => {
        clearInterval(timer)
      }, timeout)
    }
  }
  // 保存格式化代码---------------------------------------------------------------
  let _monaco
  Object.defineProperty(window, 'monaco', {
    set(v) {
      _monaco = v
      const createEditor = _monaco.editor.create
      _monaco.editor.create = function (...args) {
        const instance = createEditor.call(this, ...args)
        instance.onKeyDown((e) => {
          if (e.code === 'KeyS' && e.ctrlKey) {
            const code = instance.getValue()
            const formattedCode = window.js_beautify(code, {
              indent_size: 2,
              space_in_empty_paren: true,
              preserve_newlines: true,
              end_with_newline: true,
            })
            instance.setValue(formattedCode)
          }
        })
        return instance
      }
    },
    get() {
      return _monaco
    },
    enumerable: true,
  })
  waitFor(
    () => document.querySelector('.monaco-editor'),
    () => {
      const formatCode = document.createElement('script')
      formatCode.src = 'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.3/beautify.min.js'
      formatCode.setAttribute('crossorigin', 'anonymous')
      document.head.appendChild(formatCode)
    },
    5000
  )

  // 在iframe查看通过题解 ---------------------------------------------------------------
  const pathname = location.pathname
  // if (pathname.startsWith('/problems/') && pathname.endsWith('/submissions/')) {
  const iframe = document.createElement('iframe')
  iframe.src = ''
  document.body.appendChild(iframe)
  iframe.style.cssText = `
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 40vw;
      display: none;
      box-sizing: border-box;
    `
  const closeIframe = document.createElement('button')
  closeIframe.textContent = '关闭'
  closeIframe.style.cssText = `
      position: fixed;
      bottom: 10px;
      right: 10px;
      display: none;
    `
  document.body.appendChild(closeIframe)
  closeIframe.addEventListener('click', () => {
    iframe.style.display = 'none'
    closeIframe.style.display = 'none'
  })
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.textContent.trim() === '通过') {
      closeIframe.style.display = 'inline-block'
      iframe.src = e.target.href
      iframe.style.display = 'block'
      e.preventDefault()
    }
  })
  // }

  // 更改题解字体以及滚动到题解 ---------------------------------------------------------------
  if (pathname.startsWith('/submissions/detail/')) {
    const style = document.createElement('style')
    style.textContent = `
      pre, code {
        font-family: Menlo, Monaco, Consolas, "Courier New", monospace!important;
        line-height: 1.6!important;
        max-height: initial!important;
      }
    `
    document.head.appendChild(style)
    waitFor(
      () => document.querySelector('.edit-entrance'),
      () => {
        const code = document.querySelector('.edit-entrance')
        code.scrollIntoView()
        document.body.scrollLeft = 0
      },
      5000
    )
  }

  // 获取提交备注-------------------------------------------------------
  if (pathname.includes('/problemset/')) {
    const button = document.createElement('button')
    button.textContent = '获取提交备注'
    button.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 50px;
      z-index: 9999;
      padding: 5px 10px;
      color: #fff;
      background-color: green;
      border: none;
    `
    document.body.appendChild(button)
    const scheduleTasks = (tasks, maxNum) => {
      return new Promise((resolve) => {
        let finished = 0
        const total = tasks.length
        let current = 0
        const doTask = () => {
          let task = tasks[current++]
          if (!task) {
            return
          }
          task().finally(() => {
            finished++
            if (finished === total) {
              return resolve()
            }
            doTask()
          })
        }
        for (let i = 0; i < maxNum; i++) {
          if (tasks[i]) {
            current = i
            doTask()
          }
        }
      })
    }
    let loading = false
    const getMark = (questionSlug) => {
      const payload = {
        operationName: 'submissions',
        variables: {
          offset: 0,
          limit: 1,
          lastKey: null,
          questionSlug: questionSlug,
        },
        query:
          'query submissions($offset: Int!, $limit: Int!, $lastKey: String, $questionSlug: String!, $markedOnly: Boolean, $lang: String) {\n  submissionList(offset: $offset, limit: $limit, lastKey: $lastKey, questionSlug: $questionSlug, markedOnly: $markedOnly, lang: $lang) {\n    lastKey\n    hasNext\n    submissions {\n      id\n      statusDisplay\n      lang\n      runtime\n      timestamp\n      url\n      isPending\n      memory\n      submissionComment {\n        comment\n        flagType\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n',
      }
      return fetch('https://leetcode.cn/graphql/', {
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
      })
        .then((r) => r.json())
        .then((res) => {
          const comment = res?.data?.submissionList?.submissions?.[0]?.submissionComment?.comment
          return comment
        })
    }
    button.addEventListener('click', () => {
      if (loading) return
      const questionsMap = {}
      const questions = Array.from(document.querySelectorAll('a[href^="/problems/"]'))
      const tasks = questions
        .map((a) => {
          const questionSlug = a.getAttribute('href').split('/')[2]
          if (questionsMap[questionSlug]) return null
          questionsMap[questionSlug] = true
          return () => {
            return getMark(questionSlug).then((mark) => {
              if (mark) {
                a.style.color = 'green'
                a.style.fontWeight = 'bold'
                a.title = mark
              }
            })
          }
        })
        .filter(Boolean)
      loading = true
      scheduleTasks(tasks, 6).finally(() => {
        loading = false
      })
    })
  }

  // Your code here...
})()
