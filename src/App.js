import React, { Suspense, useContext } from "react"
import { AuthContext } from "./context/auth-context";
import { BrowserRouter as Router } from "react-router-dom"

const InitLayout = React.lazy(() => import("./components/Layout/InitLayout"))
const Layout = React.lazy(() => import('./components/Layout/Layout'))

function App() {
  const authContext = useContext(AuthContext)
  let content = {
    true: <Layout />,
    false: <InitLayout />
  };
  return (
    <Router>
      <Suspense>
        {content[authContext.isAuthentication]}
      </Suspense>
    </Router>)
}

export default App;
