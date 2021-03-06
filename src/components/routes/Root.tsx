import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from '../../history';
import Converter from '../pages/Converter';
import Registration from '../pages/registration/Registration';
import Tasks from '../pages/Task';
import Weather from '../pages/Weather';
import { Routes } from './urls';

const Root = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={`/${Routes.CONVERTER}`} component={Converter} exact />
        <Route path={`/${Routes.WEATHER}`} component={Weather} exact />
        <Route path={`/${Routes.TASKS}`} component={Tasks} exact />
        <Route path={`/${Routes.REGISTRATION}`} component={Registration} exact />
        <Route>
          {/* Fallback route which redirects to 1st page */}
          <Redirect to={`/${Routes.CONVERTER}`} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;
