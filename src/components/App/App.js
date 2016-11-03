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
        var style_left={'width':'30%', 'margin-left':'4%', 'margin-right':'10px', 'float':'left','text-align':'right','padding-top':'2px'};
        var style_input={'width':'40%', 'margin':'0','float':'left'};
        function clickLogin() {
            if(codename.value=="겐지") {
                alert("asdf");
            }
        }
        return (
            <div className={styles.login}>
                <h3>로그인</h3>
                <form name="frmLogin">
                    <label for="codename" style={style_left}>CODENAME:</label>
                    <input type="text" id="codename" name="codename" onChange={function() {}}  className ={styles.input} style={style_input}></input><br/><br/>
                    <label for="password" style={style_left}>PW :     </label>
                    <input type="password" id="password" name="password" onChange={function() {}} className ={styles.input} style={style_input}></input><br/>
                    <br/>
                    <button className={styles.button} type="submit" onClick={clickLogin}>Login</button>
                </form>
            </div>
        );
    }
}

export default App;
