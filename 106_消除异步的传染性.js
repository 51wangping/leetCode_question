//  如何消除异步的传染性

function getUser() {
  return fetch('https://my-json-server.typicode.com/typicode/demo/profile')
}

function m1() {
  return getUser()
}

function m2() {
  return m1()
}

function m3() {
  return m2()
}

function m4() {
  return m3()
}

function m5() {
  return m4()
}

function main() {
  const user = m5()
  console.log(user)
}

// 写一个  run 函数调用 main 函数

function run(func) {
  let cache = []
  let i = 0
  let originFetch = window.fetch;
  window.fetch = (...arguments) => {
    if (cache[i]) {
      if (cache[i].state === 'fulfilled') {
        // 有缓存 并状态是成功， 返回缓存数据
        return cache[i].data
      } else if (cache[i].state === 'rejected') {
        // 有缓存 并状态是失败， 返回错误信息
        throw cache[i].err
      }
    }
    const result = {
      state: 'pending',
      data: null,
      err: null
    }
    // 使用原来 fetch 的方法 发送请求
    const proms = originFetch(...arguments).then(resp => resp.json()).then(resp => {
      result.state = 'fulfilled'
      result.data = resp
    }, error => {
      result.state = 'rejected'
      result.err = error
    })
    cache[i++] = result
    throw proms
  }

  // 捕获错误并重新执行
  try {
    func()
  } catch (error) {
    if (error instanceof Promise) {
      const reRun = () => {
        i = 0
        func()
      }
      error.then(reRun, reRun)
    }
  }
}

run(main)