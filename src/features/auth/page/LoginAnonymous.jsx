import { getOwnerCredentials } from 'apis/axiosClient';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

function LoginAnonymous() {
    const history = useHistory();
    useEffect(() => {
        getOwnerCredentials().then(response => {
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('expires_in', response.expires_in + Date.now());
            history.push('/');
        })
    }, [history])
    return (
        <div> </div>
    );
}

export default LoginAnonymous;