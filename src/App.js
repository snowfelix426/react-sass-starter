import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './components/header'
// import Footer from './components/footer'
import HomePage from './pages/Home';
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
