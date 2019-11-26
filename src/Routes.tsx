import React from 'react';
import { Switch, Route } from 'react-router-dom';

import urls from 'src/urls';

import Home from 'src/pages/Home';
import DesignSystem from 'src/pages/DesignSystem';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path={urls.designSystem} component={DesignSystem}></Route>
            <Route path={urls.home} component={Home}></Route>
            {/* TODO 404 */}
            {/* <Route path="*">
                    <NoMatch />
                </Route> */}
        </Switch>
    );
};

export default Routes;
