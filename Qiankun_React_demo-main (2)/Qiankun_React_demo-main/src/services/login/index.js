import axios from "axios";
export const getUserInfo = async (parmas)=>{
    // console.log("servers login",parmas.payLoad);
    const {username,password} = parmas.payLoad
    // console.log(username,password);
    const result = await axios.post('http://localhost:8080/admin/login',{
            account:username,
            password
    })
    return result
}