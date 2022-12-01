import { createContext,useContext,useEffect,useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    sendPasswordResetEmail, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile 
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext)

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            res ? setUser(res) : setUser(null);
            setLoading(false)
            setError("")
        })
        return unsubscribe
    }, [])

    const registerUser = (email, name, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            return updateProfile(auth.currentUser, {
                displayName: name
            })
        })
        .then(res => console.log(res))
        .catch(error => setError(error.message))
        .finally(() => setLoading(false))
    }

    const signinUser = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(res => console.log(res))
        .catch(error => setError(error.message))
        .finally(() => setLoading(false))
    }

    const logoutUser = () => {
        signOut(auth)
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const contextValue = {
        user,
        loading,
        error,
        registerUser,
        signinUser,
        logoutUser,
        forgotPassword,
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}