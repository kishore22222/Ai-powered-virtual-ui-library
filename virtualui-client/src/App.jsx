import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setAllComponents, setAllUsers, setUserData } from './redux/userSlice'
import Generate from './pages/Generate'
import AdminDashboard from './pages/AdminDashboard'
import AllComponents from './pages/AllComponents'
import MyComponents from './pages/MyComponents'
import Pricing from './pages/Pricing'

export const ServerUrl = import.meta.env.VITE_API_URL

const App = () => {
  const dispatch = useDispatch()
  const {userData} = useSelector((state)=>state.user)
  const [authChecked,setAuthChecked] = useState(false);


  useEffect(()=>{
    const fetchUser = async () => {
      try {
        const res = await axios.get(ServerUrl + "/api/user/current-user" , {withCredentials:true})
        
        dispatch(setUserData(res.data))
        setAuthChecked(true)
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null))
        setAuthChecked(true)
        
        
      }


    }
    fetchUser()
  },[])

  useEffect(()=>{
    if(!userData)return;
     const fetchAllUsers = async () => {
      try {
        const usersRes = await axios.get(ServerUrl + "/api/user/all-users" , {withCredentials:true})
        
        dispatch(setAllUsers(usersRes.data))
       
       
      } catch (error) {
        console.log(error);
        dispatch(setAllUsers(null))
        setAuthChecked(true)
        
        
      }


    }
      const fetchAllComonents = async () => {
      try {
        const componentsRes = await axios.get(ServerUrl + "/api/component/all-components" , {withCredentials:true})
        
        dispatch(setAllComponents(componentsRes.data))
       
       
      } catch (error) {
        console.log(error);
        dispatch(setAllComponents(null))
        setAuthChecked(true)
        
        
      }


    }
   
    fetchAllUsers()
    fetchAllComonents()
    

  },[userData,dispatch])
  return (
    <div>
      {
        !authChecked && <div className='fixed top-0 left-0 w-full h-1 bg-[#35ebff] animate-pulse z-50 '>


        </div>
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/generate' element={<Generate/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/components' element={<AllComponents/>}/>
        <Route path='/my-components' element={<MyComponents/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
      
    </div>
  )
}

export default App
