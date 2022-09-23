// import logo from './logo.svg';
// import './App.css';
import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { LandingPage_route_group } from "./routes/landing-page";

function App() {
  return (
    <Fragment>
      <Switch>
        {/* <Route exact path="/"> */}
          {/* <Redirect to="/get-started" /> */}
          {/* landing_page route group start */}
        {/* </Route> */}
          {LandingPage_route_group.map((route, idx) => {
            return <Route key={idx} exact {...route} />;
          })}
        {/* landing_page route group end */}

      </Switch>
    </Fragment>
  );
}

export default App;
