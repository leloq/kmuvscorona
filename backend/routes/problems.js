const router = require('express').Router();
let Problem = require('../models/problem.model');

router.route('/').get((req, res) => {
  Problem.find()
    .then(problems => res.json(problems))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const severity = Number(req.body.severity);
  const solutions = req.body.solutions;

  const newProblem = new Problem({
    title,
    description,
    severity,
    solutions,
  });

  newProblem.save()
  .then(() => res.json(newProblem))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Problem.findById(req.params.id)
    .then(problem => res.json(problem))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Problem.findByIdAndDelete(req.params.id)
    .then(() => res.json(req.params.id + ' deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Problem.findById(req.params.id)
    .then(problem => {
      problem.title = req.body.title;
      problem.description = req.body.description;
      problem.severity = Number(req.body.severity);
      problem.solutions = req.body.solutions;

      problem.save()
        .then(() => res.json(problem))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;