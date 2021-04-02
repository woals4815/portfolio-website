import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";

const routes = [
  {
    path: "/",
    component: <Home />,
  },
];

export const HomeRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route) => (
          <Route path={route.path} key={route.path} exact>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};
