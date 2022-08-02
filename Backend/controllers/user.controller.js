const userLogin = async (req,res)=>{
    res.status(200).json({"msg":"login route"});
}

const userSignup = async (req, res)=>{
    res.status(200).json({"msg":"signup route"});
}

module.exports = {
    userLogin,
    userSignup
}