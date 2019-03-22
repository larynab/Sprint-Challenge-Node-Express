const express = require('express');

const actionModel = require('./actionModel.js');
const projectModel = require('./projectModel.js');

const router = express.Router();

router.get('/:id/projects', async (req, res) => {
    try {
      const actions = await actionModel.get(req.query);
      res.status(200).json(actions);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the actions',
      });
    }
  });

module.exports = router;