const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

// add, remove, read, list

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe : 'Note Title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title: {
            describe:'Read Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()