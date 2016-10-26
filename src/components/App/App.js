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
        var fonts={'color':'white', 'font-style':'italic', 'font-size':'20'};
        var style_left={'width':'30%', 'margin-left':'4%', 'margin-right':'10px', 'float':'left','text-align':'right'};
        var style_input={'width':'40%', 'margin':'0','float':'left'};
        this.state= {codename: "", password:""};
        return (
            <div className={styles.login}>
                <h3 style={fonts}>로그인</h3>
                <div style={fonts}>
                    <div style={style_left}>Codename :</div><input type="text" name="ID" value={this.state.codename} style={style_input}/><br/><br/>
                    <div style={style_left}>PW :      </div><input type="password" name="PW" value={this.state.password} style={style_input}/><br/>
                </div>
                <br/>
                <div style={{'width':'70px','height':'20px','font-style':'italic','font-size':'20','background-color':'#ffcc00','margin':'auto','border-radius': '5px','padding-top':'2px'}}>Login</div>
            </div>
        );
    }
}

export default App;
