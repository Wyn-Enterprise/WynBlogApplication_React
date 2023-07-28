import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

const SignIn = ({ onTokenValidated }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(localStorage.getItem('WinEnterpriseToken'));
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleSubmit = async () => {
        var urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "password");
        urlencoded.append("username", username);
        urlencoded.append("password", password);
        urlencoded.append("client_id", "integration");
        urlencoded.append("client_secret", process.env.REACT_APP_CLIENT_SECRET);

        const response = await fetch(process.env.REACT_APP_PORTAL_URL + "/connect/token", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',
            body: urlencoded
        });

        await response.json().then(res => {
            var token = res.access_token;
            if (token) {
                setToken(token);
                setErrorMessage("");
                localStorage.setItem('WinEnterpriseToken', token);
            } else {
                setErrorMessage("Authorization error");
                setToken('');
            }
        }).catch(err => {
            console.log(err);
            setErrorMessage("Authorization error");
        });
    }

    return (
        <div className="sign-in-root">
            <form className="sign-in-form">
                <div className="sign-in-control">
                    <h3>Enter your admin credentials</h3>
                </div>
                <div className="sign-in-control">
                    <input autoFocus type="text" className="sign-in-input" id="sign-in-username" placeholder="Username" onChange={({ target }) => setUsername(target.value)} />
                </div>
                <div className="sign-in-control">
                    <input type="password" className="sign-in-input" id="sign-in-password" placeholder="Password" onChange={({ target }) => setPassword(target.value)} />
                </div>
                <div className="sign-in-submit">
                <button id="sign-in-button" className="sign-in-button" onClick={() => handleSubmit()}>
                    <FontAwesomeIcon icon={faSignIn} />&nbsp;&nbsp;Sign In
                </button>
                </div>
                <div className="sign-in-control">
                    <div>
                        <label className="sign-in-error">{errorMessage}</label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
