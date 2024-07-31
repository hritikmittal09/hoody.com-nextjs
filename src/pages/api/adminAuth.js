import  jwt from 'jsonwebtoken' 
export default async function handler(req, res){
    if (req.method == 'GET') {
        let isAdmin = false
        const authCokie = req.cookies.auth
        if (authCokie) {
            const verifyToken = jwt.verify(authCokie,process.env.SECRET_KEY)
            if (verifyToken) {
                 isAdmin =(verifyToken.isAdmin);
                
            }
        }

        //console.log(isAdmin);
        return res.send(isAdmin)
    }
}