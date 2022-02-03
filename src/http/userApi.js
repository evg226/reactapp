import {$host,$authHost} from "./index";
import {ROLE_ADMIN, ROLE_USER} from "../AppRouter/routes";

// export const signup= async (email,password) =>{
//     const responce= await $host.post("api/user/signup",{email,password,role:"ADMIN"});
//     localStorage.setItem("token",responce.data.token);
//     return  jwt_decode(responce.data.token);
// };

export const loginRequest = async (login,password) =>{
    // const response= await $host.post("api/user/signin", {email,password});
    const responseToken=
        {login,name:"Tom",surname:"Soyer",role:(login==="Admin")?ROLE_ADMIN:ROLE_USER};
    localStorage.setItem('token', responseToken.role);
    return responseToken;
};


// export const check= async () =>{
//     const response = await $authHost.get("api/user/auth");
//     localStorage.setItem('token', response.data.token);
//     return jwt_decode(response.data.token);
// };


