import React, {useState} from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const FormPage = () => {
    const [showSignup, setShowSignup] = useState(true);
    
    const handleSignupClick = () => {
        setShowSignup(true);
      }
    
      const handleLoginClick = () => {
        setShowSignup(false);
      }
    return (
        <>
        <div className=" w-screen h-screen flex justify-center items-start">
            <div className=" w-3/4 lg:w-1/2 h-screen bg-yellow-300 z-10 flex flex-col items-center sticky">
                <div className=" w-full flex justify-evenly mt-28">
                    <div className=" flex font-bold text-lg lg:text-2xl">
                    <li className=" list-none"><ul>itis-ftmmhm</ul></li>
                    </div>
                    <div className=" font-bold text-lg lg:text-2xl">
                    <li className="inline-flex">
                        <ul className=" mr-10"><button onClick={handleLoginClick} className={showSignup ? 'active' : ' text-blue-700 underline decoration-solid decoration-2 '}>Login</button></ul>
                        <ul> <button onClick={handleSignupClick} className={!showSignup ? 'active' : ' text-blue-700 underline decoration-solid decoration-2 '}>Signup</button></ul>
                    </li>
                    </div>
                </div>
            <div className=" w-2/3 mt-20">
            {showSignup ? <SignUp /> : <Login />}
            </div>
            </div>
        </div>
        </>
    )
}

export default FormPage;