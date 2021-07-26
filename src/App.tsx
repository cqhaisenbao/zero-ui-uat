import React from 'react';
import Button, {ButtonSize} from "./components/Button/Button";

function App() {
    return (
        <div className="App">
            <Button disabled children={123}/>
            <Button children={'baidu'} btnType="primary" size={ButtonSize.Large}/>
        </div>
    );
}

export default App;
