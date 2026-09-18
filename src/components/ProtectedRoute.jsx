import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { auth    } from '../firebase/config'
import { onAuthStateChanged ,signOut } from 'firebase/auth'
import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'


const ProtectedRoute = () => {

    const navigate = useNavigate()

    const checkUser = async ()=>{
        try {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  const uid = user.uid;
                } else {
                    navigate("/login")
                
                }
              });
        } catch (error) {

            console.log(error.message);
            
        }
    }

    useEffect(() => {

        checkUser()
        return () => {
            checkUser()
        };
    }, [])




  return <Outlet/> 
  
}

export default ProtectedRoute
