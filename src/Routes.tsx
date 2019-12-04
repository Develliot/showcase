import React, { useEffect, FC } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import urls from 'src/urls';

import Home from 'src/pages/Home';
import DesignSystem from 'src/pages/DesignSystem';
import UsingAPIs from 'src/pages/UsingAPIs';

export const ScrollToTop: FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (typeof window !== undefined && window.scrollTo) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);
    return null;
};

export const Routes: FC = () => {
    return (
        <>
            <ScrollToTop />
            <Switch>
                <Route
                    path={urls.designSystem}
                    component={DesignSystem}
                ></Route>
                <Route path={urls.usingAPIs} component={UsingAPIs}></Route>
                <Route exact={true} path={urls.home} component={Home}></Route>
                <Redirect from='/' to={urls.home} />
                {/* TODO 404 */}
                {/* <Route path="*">
                    <NoMatch />
                </Route> */}
            </Switch>
        </>
    );
};

export default Routes;
