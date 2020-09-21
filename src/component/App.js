import React from 'react';
import Layout from './Layout/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PersonalInformation from '../pages/PersonalInformation';
import Main from './Layout/components/Main/Main';
import Credit from '../pages/Credit';
import Orderlist from '../pages/Orederlist';
import Transactions from '../pages/Transactions';
import FreeCredit from '../pages/FreeCredit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Addresses from '../pages/Addresses';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Main} />
          <Route exact path={"/personalInformation"} component={PersonalInformation} />
          <Route exact path={"/credit"} component={Credit} />
          <Route exact path={"/orderlist"} component={Orderlist} />
          <Route exact path={"/transactions"} component={Transactions} />
          <Route exact path={"/freeCredit"} component={FreeCredit} />
          <Route exact path={"/addresses"} component={Addresses} />
          <Layout />


        </Switch>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
