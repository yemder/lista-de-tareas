const express = require('express');
const router = express.Router();

const tarController = require('../controllers/tareasController');

router.get('/', tarController.list);

router.post('/add', tarController.save);
router.get('/delete/:id', tarController.delete);
router.get('/update/:id', tarController.edit);
router.post('/update/:id', tarController.update);

router.get('/agr', tarController.render);

module.exports = router;