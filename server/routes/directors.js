const { Router } = require('express');

const router = Router();

router.get('/directors', (req, res) => {
  res.json({ hello: 'get' })
});

router.get('/directors/:id', (req, res) => {
  const id = req.params.id;
  res.json({ hello: 'get', id })
});

router.post('/directors', (req, res) => {
  const body = req.body;
  res.json({ hello: 'post', body })
});

router.put('/directors/:id', (req, res) => {
  const id = req.params.id;
  res.json({ hello: 'put', id })
})

router.delete('/directors/:id', (req, res) => {
  const id = req.params.id;
  res.json({ hello: 'delete', id })
})

module.exports = router;