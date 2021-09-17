const express = require('express');
const { Course } = require('../module/course');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  Course.find((err, courses) => {
    if (err) return res.status(500).send({ error: 'Server error' });
    return res.render('courses', { courses });
  });
});

router.get('/course/:id', (req, res) => {
  const { id } = req.params;
  Course.findById(id, (err, course) => {
    if (err) return res.status(500).send({ error: 'Server error' });
    return res.render('course', { course });
  });
});

router.post('/api/course', (req, res) => {
  const { name, description } = req.body;
  const course = new Course({ name, description });

  // eslint-disable-next-line consistent-return
  course.save((err) => {
    if (err) {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ error: 'Validation error' });
      }
      return res.status(500).send({ error: 'Server error' });
    }
    return res.status(201).send(course);
  });
});

router.put('/api/course', (req, res) => {
  console.log(req.body);
  const { id, name, description } = req.body;

  // eslint-disable-next-line consistent-return
  Course.findByIdAndUpdate(id, { name, description }, (err) => {
    if (err) {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ error: 'Validation error' });
      }
      return res.status(500).send({ error: 'Server error' });
    }
    return res.status(200).send();
  });
});

module.exports = router;
