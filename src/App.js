import AddItemPopup from "./components/popup/AddItemPopup";
import {
  Router,
  Switch,
  Route,
} from "react-router";
import FormGenerateInvoice from "./components/FormGenerateInvoice";
import 'antd/dist/antd.css';
import Invoice from "./components/Invoice";
import FormUserInfomation from "./components/FormUserInfomation";
import { createBrowserHistory } from 'history';
import Loading from "./components/Loading/Loading";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <AddItemPopup />
      <Loading />
      <Switch>
        <Route exact path="/" component={FormUserInfomation} />
        <Route exact path="/generate_invoice" component={FormGenerateInvoice} />
        <Route exact path="/invoice" component={Invoice} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
