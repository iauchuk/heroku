import * as React from "react";
import Dashboard from "../dashboard/dashboard";
import { UsersInfo } from "../usersInfo/usersInfo";
import Login from "../auth/login/login";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";

const history = createBrowserHistory();

const Routing = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users-info" component={UsersInfo} />
        </Switch>
      </Router>
    </div>
  );
};

// <ScrollingTop />
//        <Routes>
//          <Route path="/login" element={<Login />} />
//          <Route path="/" element={<Dashboard />} />
//          <Route path="/dashboard" element={<Dashboard />} />
//          <Route path="/users-info" element={<UsersInfo />} />
//        </Routes>
export default Routing;
