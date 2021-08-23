import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MenuAppBar from "./components/AppBar";
import ConfiguredToaster from "./components/ConfiguredToaster";
import Copyright from "./components/Copyright";
import Home from "./components/Home";
import MaterialUi from "./components/MaterialUi";
import ProfilePage from "./components/profile/ProfilePage";

function App() {
  return (
    <Router>
      <MenuAppBar />
      <ConfiguredToaster />
      <Switch>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/material" component={MaterialUi} />
        <Route path="/" component={Home} />
      </Switch>
      <Copyright />
    </Router>
  );
}

export default App;
