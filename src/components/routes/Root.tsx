import { Router, Switch, Route } from 'react-router-dom';
import history from '../../history';
import Converter from '../pages/Converter';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Tasks from '../pages/Tasks';
import Weather from '../pages/Weather';
import { Routes } from './urls';

const Root = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={`/${Routes.LOGIN}`} component={Login} exact />
        <Route path={`/${Routes.CONVERTER}`} component={Converter} exact />
        <Route path={`/${Routes.WEATHER}`} component={Weather} exact />
        <Route path={`/${Routes.TASKS}`} component={Tasks} exact />
        <Route path={`/${Routes.REGISTRATION}`} component={Registration} exact />
      </Switch>
    </Router>
  );
};

export default Root;
