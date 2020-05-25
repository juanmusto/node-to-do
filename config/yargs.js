const argv = require('yargs')
    .command('create', 'create a new task', {
        description: {
            demand: true,
            alias: "d"
        } 
    })
    .command('delete', 'delete a task', {
        description: {
            demand: true,
            alias: "d"
        } 
    })
    .command('update', 'update task status', {
        description: {
            demand: true,
            describe: 'Task description',
            alias: 'd'
        }, 
        complete: {
            default: true,
            alias: 'c'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
