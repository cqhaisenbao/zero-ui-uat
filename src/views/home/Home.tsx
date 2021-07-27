import React from "react";
import Topnav from "../components/Topnav";
import {Link} from "react-router-dom";

const Home: React.FC = (props) => {
    console.log(props);
    return (
        <>
            <div className="topnavAndBanner">
                <Topnav/>
                <div className="banner">
                    <h1>YI UI</h1>
                    <h2>一个面向学习者的 UI 框架</h2>
                    <p className="actions">
                        <a href="https://github.com/cqhaisenbao/guoguo-ui">GitHub</a>
                        <Link to="/doc/intro">Start</Link>
                    </p>
                </div>
            </div>
            <div className="features">
                <ul>
                    <li>
                        <svg>
                            <use xlinkHref="#icon-vue"/>
                        </svg>
                        <h3>基于 Vue 3</h3>
                        <p>骄傲地使用了 Vue 3 Composition API</p>
                    </li>
                    <li>
                        <svg>
                            <use xlinkHref="#icon-ts"/>
                        </svg>
                        <h3>基于 TypeScript </h3>
                        <p>源代码采用 TypeScript 书写</p>
                    </li>
                    <li>
                        <svg>
                            <use xlinkHref="#icon-light"/>
                        </svg>
                        <h3>代码易读</h3>
                        <p>每个组件的源代码都极其简洁</p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Home;
