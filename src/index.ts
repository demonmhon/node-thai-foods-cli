const argv = require('yargs')
.command("count", "Count the lines in a file")
.example("$0 count -f foo.js","count the lines in the given file")
  .usage('Usage: $0 <command> [options]')
  .help('h')
  .alias('h', 'help').argv
