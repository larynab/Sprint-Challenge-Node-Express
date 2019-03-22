//Router Module
const express = require("express");
//Databases
const actionModel = require("./actionModel.js");
const projectModel = require("./projectModel.js");

const router = express.Router();

//ACTIONS CRUD
//GET
router.get("/", (req, res) => {
  actionModel
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({ error: "Error retrieving actions" });
    });
});
//GET BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  actionModel
    .get(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "There was an error getting action" });
    });
});

//POST
router.post("/", (req, res) => {
  let newAction = req.body;

  if (!newAction.description && !newAction.notes) {
    res
      .status(400)
      .json({ errorMessage: "Error, you need description and notes, please" });
  } else {
    actionModel.insert(newAction).then(actions => {
      res.status(201).json(actions.id);
    });
  }
});

//PROJECTS CRUD
//GET
router.get("/", (req, res) => {
  projectModel
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ error: "Error retrieving projects" });
    });
});
//GET BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectModel
    .get(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "There was an error getting project" });
    });
});
//POST
router.post("/", (req, res) => {
  let newProject = req.body;

  if (!newProject.description && !newProject.name) {
    res
      .status(400)
      .json({ errorMessage: "Need description and notes!!!!!!!!" });
  } else {
    projectModel.insert(newProject).then(post => {
      res.status(201).json(post.id);
    });
  }
});

module.exports = router;
