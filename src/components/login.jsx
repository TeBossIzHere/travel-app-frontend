import React from 'react';
import FadeIn from 'react-fade-in';

function Login() {
  return (
    <div style={{
      minHeight: '90%',
      backgroundColor: '#F8F0E3',
      }}>

      <FadeIn transitionDuration="1000" delay="300">
        <div id="login">
          <div id="contents">
            <div id="loginContent">
              <div id="loginHeader">
                <h1>LOGIN</h1>
              </div>
              <div id="loginEmail">
                <div id="loginEmailHeader">
                  <h3>Email:</h3>
                </div>
                <div id="loginEmailInput">
                  <input id="loginInput"></input>
                </div>
              </div>
              <div id="loginPassword">
                <div id="loginPasswordHeader">
                  <h3>Password:</h3>
                </div>
                <div id="loginPasswordInput">
                  <input id="loginInput"></input>
                </div>
              </div>
              <button id="loginButton">LOGIN</button>
              <a id="a"href="/homepage/signup"><button id="signUp">SIGN UP</button></a>
            </div>
          </div>
        </div>
      </FadeIn>
        
    </div>
  )
}

export default Login;
