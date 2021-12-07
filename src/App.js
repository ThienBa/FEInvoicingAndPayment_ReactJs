import AddItemPopup from "./components/popup/AddItemPopup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FormGenerateInvoice from "./components/FormGenerateInvoice";
import 'antd/dist/antd.css';
import Invoice from "./components/Invoice";
import FormUserInfomation from "./components/FormUserInfomation";
import { createBrowserHistory } from 'history';
import Loading from "./components/Loading/Loading";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <AddItemPopup />
      <Loading />
      <Switch>
        <Route exact path="/user_infomation" component={FormUserInfomation} />
        <Route exact path="/generate_invoice" component={FormGenerateInvoice} />
        <Route exact path="/invoice" component={Invoice} />
      </Switch>
    </Router>
  );
}

export default App;
