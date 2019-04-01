//Router Module
const express = require("express");
//Databases
const projectModel = require("./projectModel.js");

const router = express.Router();

//----------------------------------------------------------------------------------------------------------------------------
//PROJECTS CRUD
//GET
router.get("/", (req, res) => {
  projectModel
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "Error retrieving projects" });
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
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There was an error getting project" });
    });
});

//GET ALL PROJECT ACTIONS
router.get("/actions/:id", (req, res) => {
  projectModel
    .getProjectActions(req.params.id)
    .then(actions => {
      if (actions) {
        res.status(200).json(actions);
      } else {
        res.status(404).json({ errorMessage: "No actions found" });
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "CANNOT GET PROJECT" });
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
    projectModel.insert(newProject).then(projects => {
      res.status(201).json(projects.id);
    });
  }
});

//PUT
router.put("/:id", (req, res) => {
  projectModel
    .update(req.params.id, req.body)
    .then(updating => {
      if (updating) {
        res.status(200).json(updating);
      } else {
        res
          .status(404)
          .json({ errorMessage: "id is invisible, do not know what to do!" });
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "ERROR!!!" });
    });
});

//DELETE
router.delete("/:id", (req, res) => {
  projectModel
    .remove(req.params.id)
    .then(deleting => {
      res.status(200).json(deleting);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "CANT DELETE IT, I CANT SEE IT" });
    });
});

module.exports = router;
