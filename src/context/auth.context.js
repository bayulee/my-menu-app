import { Children, createContext, useState } from "react";
const AuthContext=createContext();

const AuthProvider=AuthContext.Provider;

function AuthContextProvider({childern}){
const {success, setSuccess}=useState(false);
const {error,setError }=useState(null);
const {loading, setLoading}=useState(false);
const {user, setUser}=useState(null);



//login function
 const authLogin=async(email, password)=>{
     setLoading(true);
     await fetch("/api/users/login",{
         method:"POST",
         headers:{
             "Context-Type":"application/json"
         },
         body:JSON.stringify({
             email,
             password
         })
     })
     .then(res=>res.json())
     .then(data =>{
setSuccess(true);
setUser(data);
 }).catch((err)=>{
     setError(err);
 });
 setLoading(false);
}

//signup function
const authRegister=async(username,email, password)=>{
    setLoading(true);
    await fetch("/users/register",{
        method:"POST",
        headers:{
            "Context-Type":"application/json"
        },
        body:JSON.stringify({
            username,
            email,
            password
        })
    }).then(res=>res.json()).then(data =>{
setSuccess(true);
setUser(data);
}).catch(err=>{
    setError(err);
});
setLoading(false);
}
//logout function
const authLogout=()=>{
    setSuccess(false);
    setUser(null);
};
return(
    <AuthProvider
    value={{
success,
error,
loading,
user,
authLogin,
authRegister,
authLogout,
    }}
    >
    {Children}

    </AuthProvider>
);

return <AuthProvider value={{}}>{Children}</AuthProvider>
};

export {AuthContext, AuthContextProvider};