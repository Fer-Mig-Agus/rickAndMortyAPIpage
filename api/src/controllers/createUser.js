const User=require("../db/models/User");

const createUser= async (req,res)=>{
    const {email,password}=req.query;
    try {
        if(!email || email === "" || !password || password === "") return res.status(400).json({error:"Faltan datos"});

        const [user,created]=await User.findOrCreate({
            where:{
                email:email,
                password:password
            }
        })

        if (created) return res.status(200).json({email:email,password:password}); 
        else res.status(400).json({ error: "El usuario ya existe" });

    } catch (error) {
        res.status(400).json({ error: error.messege });
    }

}


module.exports = createUser;