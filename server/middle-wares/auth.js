const jwt = require("jsonwebtoken");

const auth = (req,res,next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token,"abd2000");
        req.user = decoded;
        next();
    }
    catch
    {
        res.status(401).json({message: "Authorization failed"});
    }
};