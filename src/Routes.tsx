import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import urls from 'src/urls';

import Home from 'src/pages/Home';
import DesignSystem from 'src/pages/DesignSystem';
import UsingAPIs from 'src/pages/UsingAPIs';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path={urls.designSystem} component={DesignSystem}></Route>
            <Route path={urls.usingAPIs} component={UsingAPIs}></Route>
            <Route exact={true} path={urls.home} component={Home}></Route>
            <Redirect from='/' to={urls.home} />
            {/* TODO 404 */}
            {/* <Route path="*">
                    <NoMatch />
                </Route> */}
        </Switch>
    );
};

export default Routes;