import  jwt from 'jsonwebtoken' 
export default async function (req,res){
    if (req.method === "GET") {
        let login = false
        const authCokie = req.cookies.auth
        if (authCokie) {
            const verifyToken = jwt.verify(authCokie,process.env.SECRET_KEY)
            if (verifyToken) {
                 login =true
                
            }
        }
     res.send(login)   
    }
}