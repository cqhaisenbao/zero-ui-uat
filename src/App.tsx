import React from 'react';
import './index.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/home/Home";
import Doc from "./views/doc/Doc";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/doc" component={Doc}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
