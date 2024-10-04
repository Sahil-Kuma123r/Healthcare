const jwt = require('jsonwebtoken')

exports.istokenValid = (req,res,next)=>{
    try{
        let {token} = req.body;
        jwt.verify(token,'my_sinature',(err,decoded)=>{
            if(err){
                res.status(400).send({
                    valid : false
                })
            }
            res.status(200).send({
                valid : true
            })
        })
    }catch(err){
        console.log(err)
    }
}