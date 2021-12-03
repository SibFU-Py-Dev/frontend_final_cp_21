import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {TestUI} from "./pages/TestUI/TestUI";
import {TestUIKov} from "./pages/TestUIKov/TestUIKov";
import {Home} from "./pages/Home/Home";
import {Auth} from "./pages/Auth/Auth";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/test-ui" exact>
                    <TestUI/>
                </Route>
                <Route path="/test-ui-kov" exact>
                    <TestUIKov/>
                </Route>
                <Route path="/home" exact>
                    <Home/>
                </Route>
                <Redirect to="/home" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/auth" exact>
                <Auth />
            </Route>
            <Redirect to="/auth" />
        </Switch>
    );
};
