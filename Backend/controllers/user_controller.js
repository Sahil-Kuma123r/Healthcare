// // cosnt jwt = require('jsonwebtoken')
// const User = require('../models/User.js')
// const bcrypt = require('bcrypt')
// let saltrounds = 10;

// exports.registerUser = async(req,res,next)=>{
     

//           const {fullName , email, password,userType} = req.body;
//           User.find({email : email})
//           .then(data=>{
//                if(data.length !== 0){
//                     //user exists
//                     throw("User exists already")
//                }
//                bcrypt.hash(password,saltrounds,(err,hash)=>{

//                     let new_user = new User({
//                          fullName : fullName,
//                          email : email,
//                          password : hash,
//                          userType : userType
//                     })
//                     new_user.save()
//                     .then(()=>{
//                          res.status(200).send({
//                               message : "User Stored"
//                          })
//                     })
//                })
//           })
     // }catch(err=>{
     //      res.status(400).send({message : err})
     // })
          
// }


const User = require('../models/User.js');
const bcrypt = require('bcrypt');
let saltrounds = 10;

exports.registerUser = async (req, res, next) => {
        console.log(req.body)
        const { fullName, email, password, userType } = req.body;

        
        User.find({ email: email })
            .then(data => {
                if (data.length !== 0) {
                    
                    throw new Error("User exists already");
                }

                bcrypt.hash(password, saltrounds, (err, hash) => {
                    if (err) {
                        throw err; 
                    }

                    let new_user = new User({
                        fullName: fullName,
                        email: email,
                        password: hash,
                        userType: userType
                    });

                    new_user.save()
                    .then(() => {
                            res.status(200).send({
                                message: "User Stored"
                                
                            });
                        })
                        .catch(err => {
                            res.status(500).send({ message: err.message }); 
                        });
                });
            })
            .catch(err => {
                res.status(400).send({ message: err.message }); 
            });
};

exports.login = async(req,res,next)=>{
    const {email,password,fullName} = req.body;

    User.findOne({$or: [{fullName : fullName} , {email: email}]})
    .then((data)=>{
        console.log(data)
        if(data.length === 0){
            throw("Please Register First")
        }
        let payload = {
            id :data._id,
            fullName : data.fullName
        }
        bcrypt.compare(password , data.password, (err,matches)=>{
            if(matches){
                jwt.sign({data : payload},"my_sinature",{ algorithm: 'RS256' })
            }else{
                throw("Enter correct password")
            }
        })
    })
    .catch(err=>{
        res.status(400).send({message : err});
    })

    

}
