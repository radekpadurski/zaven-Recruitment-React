import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

interface PrivateRouteProps {
  children: any;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, path, ...rest }) => {
  const [cookies, setCookie] = useCookies();
  return (
    <Route
      {...rest}
      render={() =>
        cookies.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
