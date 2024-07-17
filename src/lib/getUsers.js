export const getUsers = async()=>{
try {
    let res = await fetch('https://jsonplaceholder.typicode.com/Users')
    res = await res.json()
    
    return res
} catch (error) {
return "something went wrong"    
}
}