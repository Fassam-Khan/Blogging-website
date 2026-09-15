import React from 'react'
import { auth } from '../firebase/config'
import { ToastContainer, toast } from 'react-toastify';
import { signOut } from 'firebase/auth';


const Blogs = () => {

const logOutUser = ()=>{
    try {
        signOut(auth)
        
    } catch (error) {
        console.log(error.message);
        toast.error(error.message)
        
    }

}


    return (
        <div>
            <h1>I am a blog page </h1>

            <button onClick={logOutUser} className='bg-red-500 text-white'>Logout User</button>

            <ToastContainer/>

        </div>
    )
}

export default Blogs
