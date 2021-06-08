import React, { lazy, Suspense, memo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
  import { Navbar } from "../modules/index";
import { Loader } from "../components/index";
import PrivateRoute from "./PrivateRoute";
import AuthWrapper from "../components/AuthWrapper";

const CategoryEvents = lazy(() => import("../modules/CategoryEvents"));
const CategoryList = lazy(() => import("../modules/CategoryList"));
const EventDetails = lazy(() => import("../modules/EventDetails"));
const TrackedEvents = lazy(() => import("../modules/TrackedEvents"));
const Login = lazy(() => import("../modules/Login"));
const Signup = lazy(() => import("../modules/Signup"));
const Error = lazy(() => import("../modules/Error"));
const Profile = lazy(() => import("../modules/Profile"));

const Routes = () => {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/category/:id" component={CategoryEvents} />
            <Route
              exact
              path="/category/:id/:eventId/eventDetails"
              component={EventDetails}
            />
            <Route exact path="/trackedEvents" component={TrackedEvents} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="*" component={Error} />
          </Switch>
        </Suspense>
      </Router>
    </AuthWrapper>
  );
}

export default memo(Routes);
