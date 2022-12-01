import { useState } from "react";
import { SignIn } from "./signin";
import { SignUp } from "./signup";

export const Auth = () => {
    const [index, setIndex] = useState(false)
    const toggleIndex = () => {
        setIndex((prevIndex) => !prevIndex)
    }

    return (
        <div className="flex justify-center">
        <div className="drop-shadow-md bg-white block mt-40 p-4 md:p-10">
            {!index ? <SignIn /> : <SignUp />}
            <p onClick={toggleIndex} className="text-center mt-7">
                {!index ? "New user? Click here" : "Already have an account? log in"}
            </p>
        </div>
        </div>
    )
}