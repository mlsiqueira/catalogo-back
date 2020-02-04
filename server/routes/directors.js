const { Router } = require('express');
const DirectorCtrl = require('../controllers/director.controller');

const router = Router();

router.get('/api/directors', DirectorCtrl.index);

router.get('/api/directors/:id', DirectorCtrl.find);

router.post('/api/directors', DirectorCtrl.store);

router.put('/api/directors/:id', DirectorCtrl.update)

router.delete('/api/directors/:id', DirectorCtrl.delete)

module.exports = router;