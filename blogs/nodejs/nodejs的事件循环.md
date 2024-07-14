### nodejs的事件循环

Node.js 的事件循环是其异步非阻塞 I/O 模型的核心。它允许 Node.js 在单线程上执行 I/O 密集型操作，而不会阻塞线程。这是通过事件循环机制实现的。以下是 Node.js 事件循环的基本工作原理：

### 事件循环的阶段

事件循环可以分为以下几个阶段，每个阶段都有特定类型的回调要执行：

1.  **timers** 阶段
2.  **I/O callbacks** 阶段
3.  **idle, prepare** 阶段
4.  **poll** 阶段
5.  **check** 阶段
6.  **close callbacks** 阶段

### 详细说明

1.  **timers 阶段**:

    - 执行 `setTimeout` 和 `setInterval` 设定的回调。

2.  **I/O callbacks 阶段**:

    - 执行一些系统操作的回调，如 TCP 错误类型的回调。

3.  **idle, prepare 阶段**:

    - 仅限内部使用，可以忽略。

4.  **poll 阶段**:

    - 获取新的 I/O 事件；执行与 I/O 相关的回调（几乎所有的回调都会在这个阶段执行，除了 `close`、`timers` 和 `setImmediate` 回调）。

5.  **check 阶段**:

    - 执行 `setImmediate` 设定的回调。

6.  **close callbacks 阶段**:

    - 执行 `close` 事件回调，例如 `socket.on('close', ...)`。

### 事件循环的执行流程

1.  **进入事件循环**:

    - 当 Node.js 启动后，初始化事件循环，进入循环。

2.  **timers 阶段**:

    - 执行任何已准备好的 `setTimeout` 和 `setInterval` 回调。
    - 然后进入下一个阶段。

3.  **I/O callbacks 阶段**:

    - 执行系统级别的 I/O 回调。

4.  **idle, prepare 阶段**:

    - 仅限内部使用，可以忽略。

5.  **poll 阶段**:

    - 检查是否有被延迟到下一个循环迭代的 I/O 事件。
    - 如果 `poll` 队列不为空，循环执行队列中的回调，直到队列清空或达到系统限制。
    - 如果 `poll` 队列为空：
      - 如果有 `setImmediate` 回调，结束 `poll` 阶段并进入 `check` 阶段。
      - 如果没有 `setImmediate` 回调，等待回调被加入 `poll` 队列并立即执行。

6.  **check 阶段**:

    - 执行 `setImmediate` 回调。

7.  **close callbacks 阶段**:

    - 执行 `close` 事件的回调。

8.  **循环返回 timers 阶段**:

    - 重复上述步骤。
