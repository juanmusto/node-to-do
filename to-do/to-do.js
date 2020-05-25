const fs = require('fs');
const colors = require('colors/safe');

const error = colors.red;
const success = colors.green;

let tasksToDo = [];

const createTask = (description) => {
    
    if(typeof description !== 'string') {
        return console.log(error('Must be a string'));
    }

    loadDB();

    const data = {
        description,
        complete: false
    };
    console.log(tasksToDo);
    tasksToDo.push(data);

    saveDB(tasksToDo);
}

const saveDB = (data) => {
    
    fs.writeFile('./db/data.json', JSON.stringify(data), (err) => {
        if(err) throw `Error saving... ${err}`;
        console.log(success(`The task ${data.description} has been saved!`));
    });
}

const loadDB = () => {
    try {
        tasksToDo = require('../db/data.json');
    } catch (error) {
        tasksToDo = [];
    }
}

const getTasks = () => {
    loadDB();
    return tasksToDo;
}

const updateTask = (description, complete = true) => {
    loadDB();

    let task = tasksToDo.findIndex(task => task.description === description);

    if(task >= 0) {
        tasksToDo[task].complete = complete;
        saveDB(tasksToDo);
    } else {
        console.log(error('Task not found'));
    }
}

const deleteTask = (description) => {

    loadDB();

    let updatedTasksToDo = tasksToDo.filter(task => task.description !== description);

    if(updatedTasksToDo !== tasksToDo) {
        saveDB(updatedTasksToDo);
    } else {
        console.log(error('Task not found'));
    }


}

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
}

