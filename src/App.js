import "App.scss";
import Home from "components/Layout/Home";
import Login from "features/auth/page/Login";
import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Switch } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path='/' component={Home} />
            </Switch>
        </QueryClientProvider>
    );
}

export default App;
