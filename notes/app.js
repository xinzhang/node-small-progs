const process = require('process');
//var notes = require('./mgonotes');

const argv = require('yargs').argv;
const command = argv._[0];

console.log(argv);

if (argv.provider === 'console') {
  var notes = require('./consolenotes');
} else if (argv.provider === 'mongodb') {
  var notes = require('./mgonotes')
} else if (argv.provider === 's3') {
  var notes = require('./s3notes')
} else {
  console.log('please specify a provider');
  process.exit(-1)
}

if (command === 'add') {
  notes.add(argv.title, argv.body);
} else if (command === 'list') {
  notes.list();
} else if (command === 'remove') {
  notes.remove(argv.title);
} else {
  console.log('the command is not recognized')
}
