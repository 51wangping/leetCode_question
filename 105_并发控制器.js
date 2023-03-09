// TODO 实现 SuperTask

class SuperTask {
  constructor(concurringCount = 2) {
    this.concurringCount = concurringCount; // 并发数
    this.runningCount = 0; // 已经运行的任务数
    this.queue = []; // 任务队列

  }
  add(fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        fn,
        resolve,
        reject
      })
      this.run();
    })
  }
  run() {
    while (this.runningCount < this.concurringCount && this.queue.length > 0) {
      const {
        fn,
        reject,
        resolve
      } = this.queue.shift();
      if (fn() instanceof Promise) {
        this.runningCount++;
        fn().then(resolve, reject).finally(() => {
          this.runningCount--;
          this.run()
        })
      } else {
        throw new Error('fn must return a Promise')
      }
    }
  }
}


function timeout(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const superTask = new SuperTask();

function addTask(time, name) {
  superTask.add(() => timeout(time))
    .then(() => {
      console.log(`任务${name} 完成`)
    })
}


addTask(10000, '1') // 10000ms 后输出 任务1完成
addTask(2000, '2') // 2000ms 后输出 任务2完成
addTask(1000, '3') // 3000ms 任务3 完成
addTask(4000, '4') // 9000ms 任务4 完成