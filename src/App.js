import FormClientInfomation from "./components/FormClientInfomation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FormGenerateInvoice from "./components/FormGenerateInvoice";
import 'antd/dist/antd.css';
import Invoice from "./components/Invoice";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/client_infomation" component={FormClientInfomation} />
        <Route exact path="/generate_invoice" component={FormGenerateInvoice} />
        <Route exact path="/invoice" component={Invoice} />
      </Switch>
    </Router>
  );
}

export default App;
