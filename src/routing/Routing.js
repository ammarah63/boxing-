import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import SignUp from '../pages/auth/SignUp';
import Login from '../pages/auth/Login';
import NotFound from '../pages/notfound/NotFound';

function Routing() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/login" component={Login}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    )
}

export default Routing;
