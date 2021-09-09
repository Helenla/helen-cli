/**
 * 执行终端命令相关的代码
 */
const { spawn } = require('child_process'); // 内部属性：子进程。spawn用于执行命令

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args); // childProcess是进程中执行命令过程中的打印信息
    childProcess.stdout.pipe(process.stdout); // 打印输出
    childProcess.stderr.pipe(process.stderr); // 打印错误
    childProcess.on('close', () => {
      resolve();
    })
  })
}

module.exports = {
  commandSpawn
}