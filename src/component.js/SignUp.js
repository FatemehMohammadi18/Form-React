import React, { useEffect, useState } from 'react';
import { validate } from './validate';


const SignUp = () => {
    const [data, setData] = useState ({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    const [errors, setErrors] = useState ({});
    const [touched, setTouched] = useState({});


    useEffect (() => {
        setErrors(validate(data, "SignUp"))
    }, [data, touched])

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({...data, [event.target.name]: event.target.checked})
        }else {
            setData({...data, [event.target.name]: event.target.value})
        }
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
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
            <form className="space-y-4" onSubmit={submitHandler}>

                {/* Name input */}
                <div className="flex-col p-4 space-y-2">
                    <label className="block text-m font-medium leading-6 text-gray-900">Name</label>
                    <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  
                    type="text" 
                    name='name' 
                    value={data.name} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}></input>
                    {errors.name && touched.name && 
                    <span className="w-72 h-1 rounded-sm p-1 ml-2 text-red-600 font-bold">{errors.name}</span>}
                </div>

                {/* Elmail input */}
                <div className="flex-col p-4 space-y-2">
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
                {/* Confirme password */}
                <div className="flex-col p-4 space-y-2">
                    <label className="block text-m font-medium leading-6 text-gray-900">ConfirmPassword</label>
                    <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="password" 
                    name='confirmPassword' 
                    value={data.confirmPassword} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}></input>
                    {errors.confirmPassword && touched.confirmPassword && 
                    <span className="w-72 h-1 rounded-sm p-1 ml-2 text-red-600 font-bold">{errors.confirmPassword}</span>}
                </div>
                {/* isAccepted input */}
                <div className="flex flex-row space-x-2 p-4">
                    <label
                    className="block text-m font-bold leading-6 text-gray-900"
                    >I accept terms of privacy policy</label>
                    <input
                    type="checkbox" 
                    name='isAccepted' 
                    value={data.isAccepted} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}></input>
                    {errors.isAccepted && touched.isAccepted && 
                    <span className="w-72 h-1 rounded-sm p-1 ml-2 text-red-600 font-bold">{errors.isAccepted}</span>}
                </div>
                <div className="flex flex-row-reverse items-center p-4">
                <button 
                className="rounded-md bg-indigo-600 px-3 py-2 ml-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;