import React from 'react';

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>OVERWATCH</h1>
                <h4>로그인</h4>
                ID : <input type="text" name="ID" value=""/><br/>
                PW : <input type="password" name="PW" value=""/><br/>
                <input type="submit" value="Submit"/>
            </div>
        );
    }
}

export default App;
