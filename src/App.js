import { useContext } from "react";
import Layout from "./components/Layout/Layout";
import InitLayout from "./components/Layout/InitLayout"
import { AuthContext } from "./context/auth-context";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  const authContext = useContext(AuthContext)
  let content = {
    true: <Layout />,
    false: <InitLayout />
  };
  return (<Router>{content[authContext.isAuthentication]}</Router>)
}

export default App;
