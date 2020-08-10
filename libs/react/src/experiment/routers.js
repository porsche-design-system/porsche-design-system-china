import {Switch} from "react-router-dom";
import {renderRoutes} from 'react-router-config';

import {PorNotFound} from '../kits';

const routesTest = function() {
  let routes = [
    {
      id: 'root',
      path: '/',
      exact: true,
      component: PorNotFound
		},
		{
      id: 'redirect',
      component: PorNotFound
    }
  ];

  return (
    <Switch>
      {renderRoutes(routes)}
    </Switch>
  );
};

export default routesTest;
