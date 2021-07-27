import React, {createContext, useState} from 'react';
import './index.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/home/Home";
import Doc from "./views/doc/Doc";

export const C = createContext<any>(null);

function App() {
    const width = document.documentElement.clientWidth;
    const [menuVisible, setMenuVisible] = useState(width > 500);

    return (
        <C.Provider value={[menuVisible, setMenuVisible]}>
            <div>
                <div className="App">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/doc" component={Doc}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </C.Provider>
    );
}

export default App;
