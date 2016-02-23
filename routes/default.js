var express = require('express'),
    router = express.Router(),
    defaultController = require('../controllers/default');

router.get('/',defaultController.handleDefault)
      .get('/List',defaultController.handleList)
      .get('/find/:id',defaultController.handleFind)
      .post('/save', defaultController.handleSave)
      .post('/save/:id', defaultController.handleUpdate);

module.exports = router;
