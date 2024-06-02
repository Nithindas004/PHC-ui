import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./custom-components/NavBar/Navbar";
import Phc from "./admin/pages/Phc";
import PhcForm from "./workers/PhcForm";
import Createuser from "./custom-components/Createuser";
import Form from "./admin/pages/loginForm";
// import Home from "./admin/pages/home";
import CreateCampaign from "./admin/pages/CreateCampaign";
import CampaingTable from "./admin/pages/CampaingTable";
// import PreditcDiabetes from "./admin/pages/PreditcDiabetes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Phc}/>
        <Route path="/user" component={Createuser} />
        {/* <Route path="/predict-diabetes" component={PreditcDiabetes} /> */}
        <Route path="/campaigns" component={CampaingTable} />
        <Route path="/create-campaign" component={CreateCampaign} />
        <Route path="/phc" component={Phc} />
        <Route path="/phc-form" component={PhcForm} />
        <Route path="/login" component={Form} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
      </Switch>
    </Router>
  );
}

export default App;
