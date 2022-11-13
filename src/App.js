import { useContext } from "react";
import Layout from "./components/Layout/Layout";
import InitLayout from "./components/Layout/InitLayout"
import { AuthContext } from "./context/auth-context";
import Login from "./containers/LogIn/LogIn";

function App() {

  const authContext = useContext(AuthContext)
  authContext.checkAuthentication()
  
  let content = null;
  if (authContext.isAuthentication) {
    content = <Layout></Layout>
  }
  else {
    content = <InitLayout><Login></Login></InitLayout>
  }

  return (content)
}

export default App;
