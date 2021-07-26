import React from 'react';
import Button, {ButtonSize} from "./components/Button/Button";

function App() {
    return (
        <div className="App">
            <Button onClick={e => console.log(e)} children={123}/>
            <Button size={ButtonSize.Small} children="small"/>
            <Button children={'baidu'} btnType="primary"/>
            <Button children={'baidu'} btnType="danger"/>
            <Button children={'baidu'} btnType="link" href="www.baidu.com"/>
        </div>
    );
}

export default App;
