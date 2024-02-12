const express = require("express");
const tasksController = require("../controllers/tasks.js");
const router = express.Router();


router.post('/addtask', tasksController.createTask);
router.get('/tasks', tasksController.getAllTasks);
router.put('/tasks/:id', tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;