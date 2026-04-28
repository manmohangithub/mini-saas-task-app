const db = require("../models");
const Task = db.Task;

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.user.id },
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title)
      return res.status(400).json({ error: "Title required" });

    const task = await Task.create({
      title,
      userId: req.user.id,
    });

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { status } = req.body;

    const task = await Task.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!task)
      return res.status(404).json({ error: "Task not found" });

    task.status = status;
    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!task)
      return res.status(404).json({ error: "Task not found" });

    await task.destroy();

    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};