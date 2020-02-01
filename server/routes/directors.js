const { Router } = require('express');
const DirectorCtrl = require('../controllers/director.controller');

const router = Router();

router.get('/directors', DirectorCtrl.index);

router.get('/directors/:id', DirectorCtrl.find);

router.post('/directors', DirectorCtrl.store);

router.put('/directors/:id', DirectorCtrl.update)

router.delete('/directors/:id', DirectorCtrl.delete)

module.exports = router;