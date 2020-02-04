const { Router } = require('express');
const ActorCtrl = require('../controllers/actor.controller');

const router = Router();

router.get('/api/actors', ActorCtrl.index);

router.get('/api/actors/:id', ActorCtrl.find);

router.post('/api/actors', ActorCtrl.store);

router.put('/api/actors/:id', ActorCtrl.update)

router.delete('/api/actors/:id', ActorCtrl.delete)

module.exports = router;