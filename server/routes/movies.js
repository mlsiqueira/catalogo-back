const { Router } = require('express');
const MovieCtrl = require('../controllers/movie.controller');

const router = Router();

router.get('/movies', MovieCtrl.index);

router.get('/movies/:id', MovieCtrl.find);

router.post('/movies', MovieCtrl.store);

router.put('/movies/:id', MovieCtrl.update);

router.delete('/movies/:id', MovieCtrl.delete);

module.exports = router;