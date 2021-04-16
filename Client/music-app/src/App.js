import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SongDetails from "./components/SongDetails";


const App = () => {
  return (
        <Router>
          <Switch>
              <Route exact path={`/`} render={(props) => <Layout {...props} />} />
              <Route exact path={`/songs/:name`} render={(props) => <SongDetails {...props} />} />
          </Switch>
        </Router>
      );
};

export default App;
