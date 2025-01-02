import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'




const Login = () => {

    const [state,setState]= useState('Login')
    const {setShowLogin,backendUrl,setToken,setUser} = useContext(AppContext)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler=async(e)=>{
        e.preventDefault();
        try{
            if(state==='Login'){
                const {data}=await axios.post(backendUrl + '/api/user/login',{email,password})
                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token',data.token)
                    setShowLogin(false)
                     
                }else{
                    toast.error(data.message)
                }
            

            }else{
                const {data}=await axios.post(backendUrl + '/api/user/register',{name,email,password})
                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token',data.token)
                    setShowLogin(false)
                     
                }else{
                    toast.error(data.message)
                }

                }

        }catch(error){

            toast.error(error.message)

        }
    }

    useEffect(()=>{
        document.body.style.overflow="hidden";
        return()=>{
            document.body.style.overflow="unset";
        }

    },[])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/10 flex justify-center items-center'>
       
        <motion.form  onSubmit={onSubmitHandler}
        
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    
        
        className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-3xl text-center  font-medium underline text-blue-600 '>{state}</h1>
           
            <p className='text-md text-black-900 '>Welcome ! Please sign in to continue</p>

           {state !=='Login' && <div className='border px-5 py-1 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.profile_icon} alt="" width={40} />
                <input onChange={e=>setName(e.target.value)} value={name} className='outline-none text-sm ' type="text" placeholder='Full Name' required />

            </div>}

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.email_icon} alt="" width={25} />
                <input onChange={e=>setEmail(e.target.value)} value={email} className='outline-none text-sm ' type="email" placeholder='Email id' required />
                

            </div>

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.lock_icon} alt="" width={20} />
                <input onChange={e=>setPassword(e.target.value)} value={password}  className='outline-none text-sm ' type="password" placeholder='Password' required />

            </div>
            <p className='text-sm text-blue-600 my-4 cursor-pointer '>Forgot Passsword ?</p>
            <button className='bg-blue-600 w-full text-white py-2 rounded-full '>{state==="Login" ? "Login" : "Create Account"}</button>

            {state==='Login' ?  <p className='mt-5 text-center '>Don't have an account?<span onClick={()=>setState('Sign Up')} className='text-blue-600 cursor-pointer'> Sign up</span> </p>
            :
            <p className='mt-5 text-center '>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')} >  LogIn</span> </p>}
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' alt="" />
         
         
         </motion.form>
      
    </div>
  )
}

export default Login
