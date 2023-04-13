const checkUserCredentials = require('./auth.controllers')

const postLogin = (req, res) =>{
  const {email, password} = req.body
  checkUserCredentials(email, password)
  .then(data =>{
  if(!data){
    res.status(401).json({message:'Invalid credentials'})
  }
  })
  .catch(err => res.status(400).json(err))
}