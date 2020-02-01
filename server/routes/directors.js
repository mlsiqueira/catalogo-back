const { Router } = require('express');

const router = Router();

router.get('/movies', (req, res) => {
  res.json({ hello: 'get' })
});

router.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  res.json({ hello: 'get', id })
});

router.post('/movies', (req, res) => {
  const body = req.body;
  res.json({ hello: 'post', body })
});

router.put('/movies/:id', (req, res) => {
  const id = req.params.id;
  res.json({ hello: 'put', id })
})

router.delete('/movies/:id', (req, res) => {
  const id = req.params.id;
  res.json({ hello: 'delete', id })
})

module.exports = router;