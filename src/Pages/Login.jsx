import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Input from '../components/Input';
import Button1 from '../components/Button';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import { ToastContainer, toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const provider = new GoogleAuthProvider();



    const [form, setForm] = useState({
        email: "",
        password: "",
       
    })


    const handleChange = (e) => {

        const { name, value } = event.target

        setForm((prev) => ({ ...prev, [name]: value }))



    }

    const submitHandler = async () => {
        try {

        
            if (!form.email.trim()) {
                return toast.warning("Please enter email")
            }


            if (!form.password.trim()) {
                return toast.warning("Please enter password")
            }

            const response = await signInWithEmailAndPassword(auth, form.email, form.password)

            console.log(response);

            if (response.user) {
                toast.success("Logged in sucessfully")

            }



        } catch (error) {

            toast.error(error.message)


        }
    }

    const googleRegister = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            if (response.user) {
                toast.success("User created successfully")
            }

            console.log(response);

        } catch (error) {

            console.log("error", error.message);

        }

    }

    return (
        <>
            <Box className="flex justify-center items-center h-[100vh]">

                <Paper className='px-4 py-2 md:w-[400px] w-full'>
                    <Box className="mb-4 text-2xl text-center font-bold">
                        <h1>Login</h1>
                    </Box>

                    <Box className="mt-3">
                        <Input handler={handleChange} name={"email"} label={"Email"} type={"email"} />
                        <Input handler={handleChange} name={"password"} label={"Password"} type={"password"} />
                    </Box>
                    <Stack spacing={2} direction="row">
                        <Button1 message={"Login"} handler={submitHandler} />
                    </Stack>

                    <Box className="flex justify-center items-center gap-2 mt-4 ">
                        <div className='h-[1px]  w-full  bg-gray-300'></div>
                        <div className='w-full text-[14px]'>Or Login With</div>
                        <div className='h-[1px] w-full bg-gray-300'></div>

                    </Box>

                    <Box className="mt-4">

                        <button onClick={googleRegister} className='bg-[#FAFAFA] px-2 py-1 w-full rounded-lg mt-2  outline outline-gray-400 cursor-pointer flex justify-center items-center  gap-2 '>
                            <GoogleIcon />
                            Google

                        </button>
                    </Box>

                    <Box className="text-center mt-3">
                        <h6 className='text-[12px]'>Not Have An Account? <span className='text-[12px] text-[#3739EC]'><Link to={'/singup'}>Sign Up.</Link></span></h6>
                    </Box>


                </Paper>


            </Box>
            <ToastContainer />

        </>
    )
}

export default Login
