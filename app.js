const argv = require('./config/yargs').argv;

const colors = require('colors/safe');
const error = colors.red;
const success = colors.green;

const toDoFile = require('./to-do/to-do');

let comando = argv._[0];

switch(comando) {

    case 'create':
        toDoFile.createTask(argv.d)
    break;

    case 'show':

        let toDoTasks = toDoFile.getTasks();

        console.log('=========Tasks========');
        for(task of toDoTasks) {
            console.log('=====================');
            console.log(`Descripcion: ${success(task.description)}`);
            console.log(`Complete: ${success(task.complete)}`);
        }
        console.log('=====================');

    break;

    case 'update':
        toDoFile.updateTask(argv.d, argv.c);
    break;

    case 'delete':
        toDoFile.deleteTask(argv.d);
    break;

    default: 
        console.log('No se conoce el comando');
    break;
}