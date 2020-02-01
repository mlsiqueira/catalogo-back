const { Router } = require('express');
const Actor = require('../controllers/actor.controller');

const router = Router();

router.get('/actors', Actor.index);

router.get('/actors/:id', Actor.find);

router.post('/actors', Actor.store);

router.put('/actors/:id', Actor.update)

router.delete('/actors/:id', Actor.delete)

module.exports = router;