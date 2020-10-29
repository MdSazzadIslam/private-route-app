import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogin } from "./helper";

const privateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default privateRoute;
