const router = require('express').Router();
let TargetGroup = require('../models/targetGroup.model');

router.route('/').get((req, res) => {
  TargetGroup.find()
    .then(targetGroups => res.json(targetGroups))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const groupname = req.body.groupname;

  const newTargetGroup = new TargetGroup({groupname});

  newTargetGroup.save()
    .then(() => res.json('Target Group added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;