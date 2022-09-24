const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const db = require("./db/tasks");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("tasks", async (req, res) => {
  const results = await db.createTask(req.body);
  res.status(201).json({ id: results[0] });
  res.end();
});

app.get("/tasks", async (req, res) => {
  const tasks = await db.getAllTask();
  res.status(200).json({ tasks });
});

app.patch("/tasks/:id", async (req, res) => {
  const id = await db.updateTask(req.params.id, req.body);
  res.status(200).json({ id });
});

app.delete("/tasks/:id", async (req, res) => {
  await db.deleteTask(req.params.id);
  res.status(200).json({ success: true });
  res.end();
});

app.listen(1337, () => console.log("Server running on port 1337"));
