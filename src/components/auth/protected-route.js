import React from "react";
import { Route, Redirect } from "react-router-dom";

const protectedRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (user) {
          return <Component {...props} loggedInUser={user} {...rest} />
        } else {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
      }
      }
    />
  )
}

export default protectedRoute;