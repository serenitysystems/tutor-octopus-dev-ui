const { questionAdd } = require('../Controllers/Question');
const { Question } = require('../Models/Question');
const express = require('express');
const router = express.Router();
const verifyToken=require('../Middlewares/verifyToken');





router.post('/teacher/question/add',verifyToken,
questionAdd
)
module.exports=router;