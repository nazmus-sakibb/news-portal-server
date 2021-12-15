import './App.css';
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Topbar from './components/Topbar/Topbar';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import Write from './pages/Write/Write';
import Single from './pages/Single/Single';
import Home from './pages/Home/Home';
import { Context } from './context/Context';
import Footer from './components/Footer/Footer';

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
