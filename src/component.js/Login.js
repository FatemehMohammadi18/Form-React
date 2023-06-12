import React, { useEffect, useState } from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';


const Login = () => {
    const [data, setData] = useState ({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState ({});
    const [touched, setTouched] = useState({});


    useEffect (() => {
        setErrors(validate(data, "Login"))
    }, [data, touched])

    const changeHandler = event => {
            setData({...data, [event.target.name]: event.target.value}) 
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name] : true})
    }
    
    const submitHandler = event => {
        event.preventDefault ();
        if (!Object.keys(errors).length){
            console.log("ok")
        }else {
            console.log("error")
            setTouched({
                email: true,
                password: true,

            })
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <form className=" space-y-8" onSubmit={submitHandler}>


                {/* Elmail input */}
                <div className="flex-col p-4 space-y-4">
                    <label className="block text-m font-medium leading-6 text-gray-900">Email</label>
                    <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    type="text" 
                    name='email' 
                    value={data.email} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}></input>
                    {errors.email && touched.email && 
                    <span className="w-72 h-1 rounded-sm p-1 ml-2 text-red-600 font-bold">{errors.email}</span>}
                </div>
                {/* Password input */}
                <div className="flex-col p-4 space-y-2">
                    <label className="block text-m font-medium leading-6 text-gray-900">Password</label>
                    <input 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    type="password" 
                    name='password' 
                    value={data.password} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}></input>
                    {errors.password && touched.password && 
                    <span className="w-72 h-1 rounded-sm p-1 ml-2 text-red-600 font-bold">{errors.password}</span>}
                </div>

                <div className="flex flex-row-reverse items-center p-4">
                <button 
                className="rounded-md bg-indigo-600 px-3 py-2 ml-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login;