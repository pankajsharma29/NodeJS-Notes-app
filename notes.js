const fs = require('fs');
const chalk = require('chalk');
const getNotes = function () {
    return "Your notes...";
}

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.find(function (note) {
        return note.title === title;
    });

    if (!duplicateNotes) {
        notes.push ({
            title: title,
            body: body
        });    
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title already taken!');
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
    
}

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
    
}


const listNotes = function () {
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes!'));

    // notes.forEach(note => {
    //     console.log(note.title);
    // });

    notes.forEach(function (note) {
        console.log(note.title);
    });
}

const readNote = function (title) {
    const notes = loadNotes();
    const note = notes.find(function (note) {
        return note.title === title;
    });

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};