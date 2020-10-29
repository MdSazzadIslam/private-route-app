import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Login from "./Login";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute restricted={false} component={Login} path="/" exact /> /
          <PrivateRoute
            restricted={true}
            exact={true}
            component={Dashboard}
            path="/Dashboard"
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

//restricted = false meaning public route
//restricted = true meaning public route

//Please login first after that dashboard component will appear then click logout button
//then type http://localhost:3000/dashboard in browser url and  will see login component will appear instead of dashboard component
//Protected routes allow us to ensure only logged in users can access certain parts of our site
