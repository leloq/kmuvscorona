const router = require('express').Router();
let Solution = require('../models/solution.model');

router.route('/').get((req, res) => {
  Solution.find()
    .then(solutions => res.json(solutions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const problem = req.body.problem;
  const title = req.body.title;
  const description = req.body.description;

  const newSolution = new Solution({
    problem,
    title,
    description,
  });

  newSolution.save()
  .then(() => res.json('Solution added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Solution.findById(req.params.id)
    .then(solution => res.json(solution))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Solution.findByIdAndDelete(req.params.id)
    .then(() => res.json('Solution deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Solution.findById(req.params.id)
    .then(problem => {
      solution.problem = req.body.problem;
      solution.title = req.body.title;
      solution.description = req.body.description;

      solution.save()
        .then(() => res.json('Solution updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;