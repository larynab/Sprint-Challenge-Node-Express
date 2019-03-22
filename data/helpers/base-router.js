//Router Module
const express = require("express");
//Databases
const actionModel = require("./actionModel.js");
const projectModel = require("./projectModel.js");

const router = express.Router();

//ACTIONS CRUD

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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  actionModel
    .get(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "There was an error" });
    });
});

//PROJECTS CRUD

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

module.exports = router;
