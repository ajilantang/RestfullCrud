'use strict'

//---------------
// require router
//----------------
const express = require('express');
const router = express.Router();
const Memo = require('../controller/controller.memo');

router.get('/',Memo.listMemo);
router.post( '/', Memo.addMemo);
router.delete('/:id',Memo.deleteMemo);
router.put('/:id',Memo.updateMemo);


module.exports = router
