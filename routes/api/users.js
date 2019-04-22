const express = require('express');
const router = express.Router();

const users = require('../../Users');

//app.get(...){...}
router.get('/',(req,res) => {
    res.json(users);
});

router.get('/:id',(req,res) => {
    console.log(req.params.id);
    const found = users.some( user => user.id === parseInt(req.params.id));
    if(!found){
        res.status(400).json({
            msg: `No member with id of ${req.params.id}`,
            err_code : 888
        });

    }else{
        res.json(users.filter((user) => {
        return user.id === parseInt(req.params.id);
        }))
    }
})

module.exports = router;