const program = require('commander');

const helpOptions = () => {
  // 增加自己的options
  program.option('-d --dest <dest>', 'a destination folder, 例如：-d /src/components');
  program.option('-f --frameword <frameword>', 'your frameword');

  // 监听命令
  program.on('--help', function() {
    console.log("");
    console.log("Orther:");
    console.log("  other options~");
  })
}

module.exports = helpOptions;
