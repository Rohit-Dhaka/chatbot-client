import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../ulits/api";
import { useNavigate } from "react-router-dom";




const Mycontext = createContext(null);

export const ContextProvider = ({children}) =>{
    const [isLogin, setIsLogin] = useState(false)
    const [chats, setChats] = useState([])
    const [user, setUser] = useState([])
    const [show, setShow] = useState(false);

    useEffect(() =>{
        const token = localStorage.getItem('token')
        if(token){
            setIsLogin(true)
        }
    },[])

    const navigate = useNavigate()

    const signup = async (data) =>{
        try{
            const response = await api.post("auth/signup" , data)
            console.log(response)
            return response.data;
        }
        catch(error){
            console.log(error)            
        }
    }
    const login = async (data)=>{
        try{
            const response = await api.post('auth/login' , data)
            console.log(response)
            const token = response.data.token 
            localStorage.setItem('token' ,token)
            return response.data;
        }
        catch(error){
            console.log(error)
        }
    }
    const getuser = async ()=>{
        const token = localStorage.getItem('token')
        try{
            const response = await api.get('auth/getuser' , {headers:{
                Authorization: `Bearer ${token}`
            }})
            setUser(response.data.user)

        }
        catch(error){
            console.log(error)
        }
    }

    const addchat = async (data) =>{
        const token = localStorage.getItem('token')
        try{
            const response = await api.post('chat/chatstart' , data  , {
                headers:{
                Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
        }
        catch(error){
            console.log(error)        
        }
    }
    const logout = () =>{
        localStorage.removeItem('token')
        navigate('/login')
        setIsLogin(false)
    }

    const getchat = async () =>{
        const token = localStorage.getItem('token')
        try{
            const response = await api.get('chat/getchat', {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setChats(response.data.chats)
        }
        catch(error){
            console.log(error)
        }
    }


    return(
        <Mycontext.Provider value={{addchat , signup , login , logout , isLogin , getchat,chats  , getuser ,user  , show, setShow }}>
            {children}
        </Mycontext.Provider>
    )
}

export const UseMycontext = () => useContext(Mycontext)

