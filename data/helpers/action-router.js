//Router Module
const express = require("express");
//Databases
const actionModel = require("./actionModel.js");

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
      res.status(500).json({ errorMessage: "Error retrieving actions" });
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
    .catch(error => {
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

//PUT
router.put("/:id", (req, res) => {
  actionModel
    .update(req.params.id, req.body)
    .then(updating => {
      if (updating) {
        res.status(200).json(updating);
      } else {
        res.status(404).json({ errorMessage: "Cannot find id" });
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "ERROR, YOU ARE DOOMED" });
    });
});

//DELETE
router.delete("/:id", (req, res) => {
  actionModel
    .remove(req.params.id)
    .then(deleting => {
      res.status(200).json(deleting);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "Object is untraceable!, define more please." });
    });
});

module.exports = router;
