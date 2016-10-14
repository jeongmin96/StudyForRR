import React from 'react';
import styles from './App.css';

class App extends React.Component {
    render(){
        return (
            <div>
                <Background/>
                <Login/>
            </div>
        );
    }
}

class Background extends React.Component {
    render() {
        return (
            <div className={styles.background}>

            </div>
        );
    }
}

class Login extends React.Component {
    render(){
        var fonts={color:'white', 'font-style':'italic'};
        return (
            <div className={styles.login}>
                <h3 style={fonts}>로그인</h3>
                <div style={fonts}>
                    Codename : <input type="text" name="ID" value=""/><br/>
                </div>
                <div style={fonts}>
                    <br/>PW : <input type="password" name="PW" value=""/><br/>
                </div>
                <input type="button" value="Login"/>
            </div>
        );
    }
}

export default App;
