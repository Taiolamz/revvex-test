// import logo from './logo.svg';
// import './App.css';
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage_route_group } from "./routes/landing-page";

function App() {
  return (
    <Fragment>
      <Routes>
  
        {/* landing_page route group end */}
          {LandingPage_route_group.map((route, idx) => {
            return <Route key={idx} exact {...route} />;
          })}

      </Routes>
    
    </Fragment>
  );
}

export default App;
