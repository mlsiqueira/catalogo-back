const { Router } = require('express');
const MovieCtrl = require('../controllers/movie.controller');

const router = Router();

router.get('/api/movies', MovieCtrl.index);

router.get('/api/movies/:id', MovieCtrl.find);

router.post('/api/movies', MovieCtrl.store);

router.put('/api/movies/:id', MovieCtrl.update);

router.delete('/api/movies/:id', MovieCtrl.delete);

module.exports = router;