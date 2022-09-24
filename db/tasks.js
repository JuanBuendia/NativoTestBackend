const knex = require("./knex.js");

function createTask(task){
    return knex("tasks").insert(task);
}

function getAllTask(){
    return knex("tasks").select("*");
}

function deleteTask(id){
    return knex("tasks").where("id", id).del();
}

function updateTask(id, task){
    return knex("tasks").where("id", id).update(task);
}

module.exports = {
    createTask,
    getAllTask,
    deleteTask,
    updateTask
}