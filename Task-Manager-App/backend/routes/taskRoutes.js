const express = require("express");
const Task = require("../models/Task");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(tasks);
  } catch (error) {
    console.log("Get Tasks Error:", error.message);

    res.status(500).json({
      message: error.message || "Failed to fetch tasks",
    });
  }
});

router.post("/", protect, async (req, res) => {
  try {
    const { title, description, stage } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required",
      });
    }

    const task = await Task.create({
      title,
      description,
      stage: stage || "Todo",
      user: req.user.id,
    });

    res.status(201).json(task);
  } catch (error) {
    console.log("Create Task Error:", error.message);

    res.status(500).json({
      message: error.message || "Failed to create task",
    });
  }
});

router.put("/:id", protect, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    console.log("Update Task Error:", error.message);

    res.status(500).json({
      message: error.message || "Failed to update task",
    });
  }
});

router.delete("/:id", protect, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.log("Delete Task Error:", error.message);

    res.status(500).json({
      message: error.message || "Failed to delete task",
    });
  }
});

module.exports = router;