import * as React from "react";
import Dashboard from "../dashboard/dashboard";
import { UsersInfo } from "../usersInfo/usersInfo";
import Login from "../auth/login/login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollingTop from "../scrollingTop/scrollingTop";

const Routing = () => {
  return (
    <div>
      <Router>
        <ScrollingTop />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users-info" component={UsersInfo} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};
export default Routing;
