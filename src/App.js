import { useContext} from "react";
import Layout from "./components/Layout/Layout";
import InitLayout from "./components/Layout/InitLayout"
import { AuthContext } from "./context/auth-context";
import Signin from './containers/Signin/Signin'
import Signup from "./containers/Signup/Signup";

function App() {

  const authContext = useContext(AuthContext)

  let content = null;
  if (authContext.isAuthentication) {
    content = <Layout></Layout>
  }
  else {
    content = <InitLayout><Signup></Signup></InitLayout>
    //content = <InitLayout><Signin></Signin></InitLayout>

  }

  return (content)
}

export default App;
