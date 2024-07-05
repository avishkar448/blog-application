import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './service/auth'
import {login,logout} from './features/auth/authSlice'
import {Footer,Header} from './components'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import appwriteService from './service/auth'


function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  const [username,setUsername]=useState('')
  // const [msg,setMsg]=useState('')

  useEffect(()=>{ 
    const fetchCurrentUser=async()=>{ 
      try {
        const currentuser=await appwriteService.getCurrentUser()
        setUsername(currentuser.name)
      } catch (error) {
        console.log("Cannot fetch the current user",error)
      }
    };

    fetchCurrentUser();
  },[]);

  // //msg
  // useEffect(()=>{ 
  //   const getCurrentTime=()=>{ 
  //     const currentHour=new Date().getHours();
  //     if(currentHour >= 5 && currentHour < 12){
  //       setMsg('Good Morning!!')
  //     }
  //     else if(currentHour >=12 && currentHour < 18){
  //       setMsg('Good Afternoon!!')
  //     }
  //     else{ 
  //       setMsg('Good Night!!')
  //     }
  //   }

  //   getCurrentTime()
  // },[])

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({ 
          userData
        }))
      }
      else{ 
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (
    <ThemeProvider>
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header/>
        <main>
          <h1 className='text-2xl'><b>Hello,{username}!!</b></h1>
        <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
    </ThemeProvider>
  ): null
}

export default App
