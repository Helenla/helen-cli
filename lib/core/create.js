const program = require('commander');

const {createProjectActions} = require('./actions');

const createCommands = () => {
  program
    .command('create <project> [template...]') // 项目名 + 创建类型
    .description('clone a repository info a folder')
    .action((project, template) => {
      createProjectActions(project, template[0]);
    })
}

module.exports = createCommands;