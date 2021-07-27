import React from 'react';
import Button, {ButtonSize} from "./components/Button/Button";

function App() {
    return (
        <div className="App">
            <Button onClick={e => console.log(e)} children={123}/>
            <Button size={ButtonSize.Small} loading children="small"/>
            <Button children={'baidu'} loading btnType="primary"/>
            <Button children={'baidu'} loading btnType="danger"/>
            <Button children={'baidu'} btnType="link" href="www.baidu.com"/>
        </div>
    );
}

export default App;
