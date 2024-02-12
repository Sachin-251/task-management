const query = require("../database/connect");

const createTask = async(req, res) => {
    const {title, description} = req.body;
    // console.log(title, description);
    if(!title || ! description){
        return res.status(401).json({message: 'Incomplete information'});
    }
    try {
        let sqlQuery = "INSERT INTO tasks (title, description) VALUES (?, ?)";
        const result = await query(sqlQuery, [title, description]);
        return res.status(201).json({result});
    } catch (error) {
        return res.status(500).json({message: error});
    }
}

const getAllTasks = async(req, res) => {
    try {
        let sqlQuery = "SELECT * FROM tasks";
        const result = await query(sqlQuery);
        return res.status(200).json({result: result});
    } catch (error) {
        return res.status(500).json({message: error});
    }
}

const updateTask = async(req, res) => {
    const completed = req.body.data;
    const {id} = req.params;
    try {
        let sqlQuery = "UPDATE tasks SET completed = ? WHERE id = ?";
        const result = await query(sqlQuery, [completed, id]);
        return res.status(201).json({result: result});
    } catch (error) {
        return res.status(500).json({message: error});
    }
}

const deleteTask = async(req, res) => {
    const {id} = req.params;
    try {
        let sqlQuery = "DELETE FROM tasks WHERE id = ?";
        const result = await query(sqlQuery, [id]);
        return res.status(201).json({message: "Task Deleted"});
    } catch (error) {
        return res.status(500).json({message: error});
    }
}

module.exports = {createTask, getAllTasks, updateTask, deleteTask};