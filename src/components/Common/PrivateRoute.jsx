import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function PrivateRoute(props) {
    const isAccessToken = Boolean(localStorage.getItem('access_token'));
    if (!isAccessToken) return <Redirect to="/login-anonymous" />;

    return <Route {...props} />;
}