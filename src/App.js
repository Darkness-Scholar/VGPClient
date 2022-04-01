import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components"
import Sidebar from './comps/Sidebar';
import Home from './pages/Home';
import User from './pages/User';
import Dashboard from './pages/Dashboard';
import Recharge from './pages/Recharge';
import Withdraw from './pages/Withdraw';
import Header from "./comps/Header";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  h1 {
    size: calc(2rem + 2vw);
    background: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
  }
`

function App() {
  return (
    <Router>

      <Sidebar />
      <Pages className="px-14 md:px-16 bg-primary w-full">
        <Switch>
          <Route path="/recharge">
            <Recharge />
          </Route>
          <Route path="/withdraw">
            <Withdraw />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Pages>
    </Router>
  );
}

export default App;
