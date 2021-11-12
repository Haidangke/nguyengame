import "App.scss";
import { PrivateRoute } from "components/Common/PrivateRoute";
import Home from "components/Layout/Home";
import Login from "features/auth/page/Login";
import LoginAnonymous from "features/auth/page/LoginAnonymous";
import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Redirect, Route, Switch } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
    const isAccessToken = Boolean(localStorage.getItem('access_token') && localStorage.getItem('expires_in'));
    return (
        <QueryClientProvider client={queryClient}>
            {!isAccessToken ? <Redirect to='/login-anonymous' /> : <Redirect to='/' />}
            <Switch>
                <Route path="/login-anonymous" component={LoginAnonymous} />
                <Route path="/login" component={Login} />
                <PrivateRoute path='/' component={Home} />
            </Switch>
        </QueryClientProvider>
    );
}

export default App;
