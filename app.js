//const validator = require('validator');

const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js'); 

//const command = process.argv[2];

//console.log(process.argv);

// customize yargs version 
yargs.version('1.1.0');


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log('Adding a new note! ', argv);
        //console.log('Title: ' + argv.title);
        //console.log('body: ' + argv.body);
        notes.addNote(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({ 
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log('Removing a note!');
        notes.removeNote(argv.title);
    }
})


// Create List command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function () {
        //console.log('Listing our all notes!');
        notes.listNotes();
    }
})


// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title);
        //console.log('Reading a note!');
    }
})


yargs.parse(); 
//console.log(yargs.argv);
// add remove read list 




















































































// if (command === 'add') {
//     console.log('adding note');
// } else if (command === 'remove') {
//     console.log('Removing note');
// }


// const msg = getNotes();
// console.log(msg);

// console.log(validator.isEmail('test@test.com'));

// console.log(validator.isURL('https:/www.googlecom'));


// const greenMsg = chalk.green('Success!');
// console.log(greenMsg);

// console.log(chalk.green.bgRed.bold('Hello world!'));  

// console.log(process.argv[2]);








// const add = require('./utils.js');
// const sum = add(4,5);
// console.log(sum);