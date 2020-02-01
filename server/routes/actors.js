const { Router } = require('express');
const ActorCtrl = require('../controllers/actor.controller');

const router = Router();

router.get('/actors', ActorCtrl.index);

router.get('/actors/:id', ActorCtrl.find);

router.post('/actors', ActorCtrl.store);

router.put('/actors/:id', ActorCtrl.update)

router.delete('/actors/:id', ActorCtrl.delete)

module.exports = router;