const { promisify } = require('util'); // 内置模块 转化为promise

// download-git-repo 基本上脚手交都使用这个函数来下载git项目
// 下载git项目需要使用回调，使用promise不会出现回调地狱
const download = promisify(require('download-git-repo'));
// 打开浏览器
const open = require('open');

const { vue2ts, vue3ts_vite } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');

const createProjectActions = async (project, template) => {
  console.log('helen helps you create project...');
  let vueRepo = '';

  switch (template) {
    case 'vue2ts':
      vueRepo = vue2ts;
      break;
    case 'vue3ts_vite':
      vueRepo = vue3ts_vite;
      break;
  
    default:
      vueRepo = vue2ts;
      break;
  }

  // 1.clone项目 
  await download(vueRepo, project, {clone: true});

  // 2.执行npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'; // window电脑在使用自己方法运行命令时需要加.cmd
  await commandSpawn(command, ['install'], {cwd: `./${project}`});

  // 3.运行npm run serve
  commandSpawn(command, ['run', 'serve'], {cwd: `./${project}`}); // 为什么要异步？不会阻塞后续open操作
}

module.exports = {
  createProjectActions
};
