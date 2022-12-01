import { Auth } from "./components/auth";
import { Dashboard } from "./components/dashboard";
import { useUserContext } from "./context/userContext";

function App() {
  const { loading,error,user } = useUserContext()
  return (
    <div className="App">
      {error && <p className="text-center font-bold mt-40 text-2xl">{error}</p>}
      {loading ? <h2 className="text-center font-bold mt-40 text-2xl">Loading...</h2> : <>{ user ? <Dashboard /> : <Auth /> }</>}
    </div>
  );
}

export default App;
