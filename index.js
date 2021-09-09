#!/usr/bin/env node
const program = require('commander'); // 提供了用户命令行输入和参数解析

const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create');

// 查看版本号
program.version(require('./package.json').version);

helpOptions();
createCommands();

program.parse(process.argv);