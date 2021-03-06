const router = require('express').Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Solution = require('../models/solution.model');
const Problem = require('../models/problem.model');

router.route('/').get((req, res) => {
  Solution.find()
    .then(solutions => res.json(solutions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const specificForTargetGroups = req.body.specificForTargetGroups;
  const upVotes = req.body.upVotes;
  const downVotes = req.body.downVotes;
  const preliminary = req.body.preliminary;

  const newSolution = new Solution({
    title,
    description,
    specificForTargetGroups,
    upVotes,
    downVotes,
    preliminary,
  });

  newSolution.save()
  .then(() => {
    return Problem.findById(req.body.problemId);
  })
  .then((problem) => {
    problem.solutions.push(newSolution.id);
    return problem.save();
  })
  .then(() => {
    return res.json(newSolution);
  })
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Solution.findById(req.params.id)
    .then(solution => res.json(solution))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Solution.findByIdAndDelete(req.params.id)
    .then(() => {
      return Problem.updateMany(
        { "solutions": ObjectId(req.params.id) },
        { $pull: { solutions: req.params.id } },
      );
    })
    .then(() => res.json(req.params.id))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Solution.findById(req.params.id)
    .then(solution => {
      solution.title = req.body.title;
      solution.description = req.body.description;
      solution.specificForTargetGroups = req.body.specificForTargetGroups;
      solution.upVotes = req.body.upVotes;
      solution.downVotes = req.body.downVotes;
      solution.preliminary = req.body.preliminary;

      solution.save()
        .then(() => {
          return Problem.updateMany(
            { "solutions": ObjectId(req.params.id) },
            { $pull: { solutions: req.params.id } },
          );
        })
        .then(() => {
          return Problem.updateMany(
            {"_id": ObjectId(req.body.problemId) },
            { $push: { solutions: ObjectId(req.params.id) } },
          )
        })
        .then(() => res.json(solution))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/vote/:id').post((req, res) => {
  Solution.findById(req.params.id)
    .then(solution => {
      solution.upVotes = req.body.upVotes;
      solution.downVotes = req.body.downVotes;
      return solution.save();
    })
    .then(solution => res.json(solution))
    .catch(error => res.status(400).json(error));
});

module.exports = router;