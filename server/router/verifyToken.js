import JWT from 'jsonwebtoken'

export const verifyToken = (req,res,next) =>{
    const token = req.cookies.access_token
    if(!token) return res.status(404).json({message: "you aren't auhentication"})

    JWT.verify(token, process.env.JWT_TOKEN, (err,user)=>{
        if(err) return res.status(401).json({message: 'token is valid'})
        req.user = user;
        next();
    })
    
}

export const verifyAuth = (req, res, next) => {
    verifyToken(req,res, ()=>{
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
          } else {
            res.status(403).json("You are not alowed!");
          }
    
    })
}


export const verifyAuthisAdmin = (req, res, next) => {
    verifyToken(req,res, ()=>{
        if (req.user.isAdmin) {
            next();
          } else {
            res.status(403).json("You are not alowed!");
          }
    
    })
}