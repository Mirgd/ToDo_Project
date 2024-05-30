const router=require('express').Router();
const TaskController=require('../contollers/Tasks');
//find all data
router.get('/',TaskController.index)
// create new task
router.post('/create',TaskController.create)
// update a task
router.get('/update/:id',TaskController.edit);
router.put('/update/:id',TaskController.update);
// delete task
router.delete('/delete/:id',TaskController.delete);
module.exports=router;