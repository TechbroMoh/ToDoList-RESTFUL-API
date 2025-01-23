'use strict';

var mongoose = require('mongoose');
var Task = mongoose.model('Tasks');

// List all tasks
exports.list_all_tasks = async function(req, res) {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new task
exports.create_a_task = async function(req, res) {
  try {
    const new_task = new Task(req.body);
    const task = await new_task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Read a task by ID
exports.read_a_task = async function(req, res) {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).send({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update a task by ID
exports.update_a_task = async function(req, res) {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.taskId },
      req.body,
      { new: true }
    );
    if (!task) {
      return res.status(404).send({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete a task by ID
exports.delete_a_task = async function(req, res) {
  try {
    // Using findByIdAndDelete 
    const task = await Task.findByIdAndDelete(req.params.taskId);
    
    if (!task) {
      return res.status(404).send({ message: 'Task not found' });
    }

    res.json({ message: 'Task successfully deleted', taskId: req.params.taskId });
  } catch (err) {
    console.error('Error deleting task:', err); // Log error for debugging
    res.status(500).send({ message: 'Error occurred while deleting task', error: err });
  }
};
