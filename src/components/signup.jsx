import { useRef } from "react"
import { useUserContext } from "../context/userContext"

export const SignUp = () => {
    const emailRef = useRef()
    const nameRef = useRef()
    const psdRef = useRef()

    const { registerUser } = useUserContext()

    const onSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const name = nameRef.current.value
        const password = psdRef.current.value
        if (email && name && password) registerUser(email, name, password);
    }

    return (
        <form onSubmit={onSubmit}>
            <div><h2 className="text-center font-bold tracking-wider text-2xl">New User</h2></div>
            <div className="email_input mt-7">
                <input type="email" 
                    placeholder="Email"
                    ref={emailRef}
                    className="p-3 drop-shadow-md rounded-md lg:w-96 focus:outline-none"
                />
            </div>
            <div className="name_input mt-5">
                <input type="text" 
                    placeholder="Name"
                    ref={nameRef}
                    className="p-3 drop-shadow-md rounded-md lg:w-96 focus:outline-none"
                />
            </div>
            <div className="password_input mt-5">
                <input type="password" 
                    placeholder="Password"
                    ref={psdRef}
                    className="p-3 drop-shadow-md rounded-md lg:w-96 focus:outline-none"
                />
            </div>
            <div className="reg_button mt-5 flex justify-center">
                <button type="submit" className="lg:w-96 p-3 rounded-md hover:bg-green-600 bg-green-700 text-white">
                    Register
                </button>
            </div>
        </form>
    )
}