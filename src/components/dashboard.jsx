import { useUserContext } from "../context/userContext"

export const Dashboard = () => {
    const { user, logoutUser } = useUserContext()
    return (
        <div className="flex justify-center">
        <div className="mt-40 bg-white drop-shadow-md p-3">
            <h1 className="text-center text-2xl">Dashboard</h1>
            <h2 className="mt-5">Name: {user.displayName}</h2>
            <h2 className="mt-3">Email: {user.email}</h2>
            <button className="lg:w-96 p-3 mt-4 rounded-md hover:bg-green-600 bg-green-700 text-white" onClick={logoutUser}>Logout</button>
        </div>
        </div>
    )
}