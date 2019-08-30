var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
 
function createToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
        expiresIn: 200 // 86400 expires in 24 hours
      });
}
 
exports.registerUser = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ 'msg': 'You need to send email and password' });
    }
 
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return res.status(400).json({ 'msg': err });
        }
 
        if (user) {
            return res.status(400).json({ 'msg': 'The user already exists' });
        }
 
        let newUser = User(req.body);
        newUser.save((err, user) => {
            if (err) {
                return res.status(400).json({ 'msg': err });
            }
            return res.status(201).json(user);
        });
    });
};
exports.loginGUser = (req, res) => {
    User.findOne({ google_Id: req.body.userId}, (err, user) => {
        if (err) {
            return res.status(400).json({ 'msg': err });
        }
 
        if (user == null) {
            let user = new user({
                name: req.body.givenName,
                lastname: req.body.familyName,
                email: req.body.email,
                usermane: req.body.email,
                google_Id: userId
            })
            user.save((err, user)=>{
                if(err){
                    return res.status(400).json({ 'msg': err });
                }
                return res.status(200).json({
                    token: createToken(user)
                });
                
            })
        }
        else{
            return res.status(200).json({
                token: createToken(user)
            });
        }
  
    })
};
exports.loginUser = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ 'msg': 'You need to send email and password' });
    }
 
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return res.status(400).send({ 'msg': err });
        }
 
        if (!user) {
            return res.status(400).json({ 'msg': 'The user does not exist' });
        }
 
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err) {
                return res.status(200).json({
                    token: createToken(user)
                });
            } else {
                return res.status(400).json({ msg: 'The email and password don\'t match.' });
            }
        });
        
    });
};